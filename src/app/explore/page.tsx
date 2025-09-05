import { businessTable, usersTable } from "@/db/schema";
import { getDb } from "../../../index.js";

export default async function Explore() {
    const db = getDb();
  const data = await db.select().from(businessTable);
  return (
    <div className="p-4 space-y-4">
      <h1 className="text-4xl">Explore</h1>
      {data.map((store) => (
        <div>
          <h1 className="text-xl font-bold">
            <a href={`/business/${store.id}`}>{store.name}</a>
          </h1>
          <p>{store.description}</p>
          <p>{store.address}</p>
        </div>
      ))}
    </div>
  );
}
