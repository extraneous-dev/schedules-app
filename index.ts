// db/client.ts
import { drizzle } from "drizzle-orm/node-postgres";
import pkg from "pg";
const { Client } = pkg;

export function getDb() {
  const client = new Client({ connectionString: process.env.DATABASE_URL });
  client.connect();
  return drizzle(client);
}