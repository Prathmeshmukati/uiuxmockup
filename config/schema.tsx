

import { date, integer, json, pgTable, serial, text, timestamp, varchar } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: serial("id").primaryKey(), // Fixed: Changed 'idd' to 'id' for consistency
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  credits: integer("credits").default(5), // Added column name
});

export const ProjectTable = pgTable('project', {
  id: serial("id").primaryKey(),
  projectId: varchar("project_id").notNull(), // Added column name
  projectName:varchar(),
  theme:varchar(),
  userInput: varchar("user_input"), // Added column name
  device: varchar("device"), // Added column name
  createdOn: date("created_on").defaultNow(), // Added column name
  config: json(), // Added column name
  projectVisualDescription:text(),
  userId: varchar("user_id").references(() => users.email).notNull() // Added column name and fixed missing comma
});

export const ScreenConfigTable = pgTable('screenConfig', {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  projectId: varchar("project_id").references(() => ProjectTable.projectId),
  screenId: varchar("screen_id"),
  screenName: varchar("screen_name"),
  purpose: varchar("purpose"),
  screenDescription: varchar("screen_description"),
  code: text("code")
});