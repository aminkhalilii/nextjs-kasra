import { ObjectId } from "mongodb";

export interface User {
  _id?: ObjectId;
  username: string;
  password: string; // Make sure to hash this password
}
