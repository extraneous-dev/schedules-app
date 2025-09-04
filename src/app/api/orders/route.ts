import { ordersTable } from "@/db/schema";
import { db } from "../../../..";
import { NextResponse } from "next/server";

export const GET = async () => {
  const data = await db.select().from(ordersTable);
  return NextResponse.json(data);
};
