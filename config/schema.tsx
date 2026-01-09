


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
  userInput: varchar("user_input"), // Added column name
  device: varchar("device"), // Added column name
  createdOn: date("created_on").defaultNow(), // Added column name
  config: json(), // Added column name
  userId: varchar("user_id").references(() => users.email).notNull() // Added column name and fixed missing comma
});
// import {
//   date,
//   integer,
//   json,
//   pgTable,
//   serial,
//   text,
//   timestamp,
//   varchar,
// } from "drizzle-orm/pg-core";

// export const users = pgTable("users", {
//   id: serial("id").primaryKey(),
//   name: text("name").notNull(),
//   email: text("email").notNull().unique(),
//   credits: integer("credits").default(5),
// });

// export const projectTable = pgTable("project", {
//   id: serial("id").primaryKey(),
//   projectId: varchar("project_id", { length: 255 }).notNull(),
//   userInput: varchar("user_input", { length: 255 }),
//   device: varchar("device", { length: 100 }),
//   createdOn: timestamp("created_on").defaultNow(),
//   config: json("config"),
//   userId:varchar().references(()=> users.email).notNull()
// });
