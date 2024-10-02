"use client"
import { useEffect, useState } from "react";

interface User {
  _id: string;
  name: string;
  age:number
}

export default function Home() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("/api/users",{
          method: "GET",
        });
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Users</h1>
      {error && <p>Error: {error}</p>}
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            {user.name} - {user.age}
          </li>
        ))}
      </ul>
    </div>
  );
}
