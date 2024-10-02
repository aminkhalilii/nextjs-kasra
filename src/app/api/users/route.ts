import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

interface User {
  _id: string;
  name: string;
  age: number;
}

// GET method handler
export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("nextjs-kasra"); 

    // Ensure the collection exists before querying
    const collectionExists = await db.listCollections({ name: "users" }).hasNext();
    if (!collectionExists) {
      return NextResponse.json({ error: "Users collection does not exist" }, { status: 404 });
    }

    const users = await db.collection<User>("users").find({}).toArray();
    return NextResponse.json(users, { status: 200 });
  } catch (e) {
    console.error("Error in /api/users:", e.message);
    return NextResponse.json({ error: `Failed to load data: ${e.message}` }, { status: 500 });
  }
}
