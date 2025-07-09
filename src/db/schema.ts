import { integer, pgTable, text } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users_table", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: text().notNull(),
  age: integer().notNull(),
  email: text().notNull().unique(),
});

export const businessTable = pgTable("business_table", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: text().notNull(),
  description: text(),
  address: text().notNull()
})