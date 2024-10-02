import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import { User } from "@/models/User"; 
import bcrypt from 'bcrypt';

export async function POST(req: Request) {
  const body = await req.json();
  const { username, password } = body;

  if (!username || !password) {
    return NextResponse.json({ error: "All fields are required" }, { status: 400 });
  }

  try {
    const client = await clientPromise;
    const db = client.db("nextjs-kasra"); 
    const user = await db.collection<User>("users").findOne({ username,password });
    if (!user) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }
    const token = bcrypt.hashSync(user._id.toString(), 10)
    return NextResponse.json({ message: "Login successful",token}, { status: 200 });
  } catch (error) {
    console.error("Error logging in user:", error);
    return NextResponse.json({ error: "Failed to log in user" }, { status: 500 });
  }
}
