import { MongoClient } from "mongodb";

const uri = "mongodb://localhost:27017"; // Your MongoDB URI

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri); // No need for deprecated options
    global._mongoClientPromise = client.connect().catch(err => {
      console.error("MongoDB connection failed:", err.message);
      throw new Error("MongoDB connection failed");
    });
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri); // In production, no global variable used
  clientPromise = client.connect().catch(err => {
    console.error("MongoDB connection failed:", err.message);
    throw new Error("MongoDB connection failed");
  });
}

export default clientPromise;
