import { ordersTable } from "@/db/schema";

import { NextResponse } from "next/server";
import { getDb } from "../../../../index.js";

export const GET = async () => {
    const db = getDb();
  const data = await db.select().from(ordersTable);
  return NextResponse.json(data);
};
