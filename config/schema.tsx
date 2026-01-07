import { integer, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  idd: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  credits: integer().default(5),
});
 