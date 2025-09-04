import { businessTable, menuTable, usersTable } from "@/db/schema";
import { db } from "../../../..";
import { eq } from "drizzle-orm";
export default async function ViewBusiness({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const store = await db.select().from(businessTable).where(id);
  const items = await db
    .select()
    .from(menuTable)
    .where(eq(menuTable.businessId, Number(id)));
  return (
    <div className="p-4 space-y-4">
      <div className="-ml-4 -mt-4 w-screen bg-gradient-to-br from-gray-400 to-blue-400 h-72"></div>
      <div>
        <h1 className="text-4xl">{store[0].name}</h1>
        <p className="text-xl text-gray-500">{store[0].description}</p>
        <p>{store[0].address}</p>
      </div>
      <h2 className="text-xl font-bold">Items</h2>
      <ul>
        {items.map((item) => (
          <li>
            {item.name} - ${item.price / 100} -{" "}
            <input
              type="text"
              className="p-2 border border-gray-600 bg-gray-300"
            />
          </li>
        ))}
      </ul>
      <h1 className="text-2xl">Similar Restaurants</h1>
      <p className="text-gray-600">
        Hmm, we're not sure of any other restaurants yet :(
      </p>
      <ul></ul>
    </div>
  );
}
