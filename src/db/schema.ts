import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const usersTable = sqliteTable("users_table", {
  id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  age: int().notNull(),
  email: text().notNull().unique(),
});

export const businessTable = sqliteTable("business_table", {
  id: int().primaryKey({autoIncrement: true}),
  name: text().notNull(),
  description: text(),
  address: text().notNull()
})