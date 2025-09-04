import { ordersTable } from "@/db/schema";
import { NextRequest, NextResponse } from "next/server";
import { db } from "../../../../../..";

export const GET = async (
  req: NextRequest,
  {
    params,
  }: {
    params: Promise<{ slug: string }>;
  }
) => {
  const body = req?.body();
  return await db.update(ordersTable).set(body);
};
