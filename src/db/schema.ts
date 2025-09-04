import { relations } from "drizzle-orm";
import { boolean, integer, pgTable, text } from "drizzle-orm/pg-core";

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
  address: text().notNull(),
});
export const businessRelations = relations(businessTable, ({ many }) => ({
  items: many(menuTable),
}));
export const menuTable = pgTable("menu_table", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: text().notNull(),
  price: integer().notNull(),
  available: boolean().notNull().default(true),
  businessId: integer().notNull(),
});

export const menuRelations = relations(menuTable, ({ one }) => ({
  business: one(businessTable, {
    fields: [menuTable.businessId],
    references: [businessTable.id],
  }),
}));
