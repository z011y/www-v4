import {
  pgTable,
  serial,
  integer,
  varchar,
  timestamp,
  json,
  uniqueIndex,
} from "drizzle-orm/pg-core";

interface TechStack {
  languages: string[];
  frameworks: string[];
}

interface Role {
  responsibilities: string[];
}

export const company = pgTable(
  "company",
  {
    id: serial("id").primaryKey(),
    createdAt: timestamp("created_at", { precision: 6 }).notNull().defaultNow(),
    updatedAt: timestamp("updated_at", { precision: 6 }).notNull().defaultNow(),
    name: varchar("name", { length: 255 }).notNull(),
    startDate: varchar("start_date", { length: 25 }).notNull(),
    endDate: varchar("end_date", { length: 25 }).notNull(),
  },
  (table) => ({
    nameUnique: uniqueIndex("company_name_unique").on(table.name),
  })
);

export const title = pgTable(
  "title",
  {
    id: serial("id").primaryKey(),
    createdAt: timestamp("created_at", { precision: 6 }).notNull().defaultNow(),
    updatedAt: timestamp("updated_at", { precision: 6 }).notNull().defaultNow(),
    name: varchar("name", { length: 255 }).notNull(),
    roles: json("roles").$type<Role>().notNull(),
    startDate: varchar("start_date", { length: 25 }),
    endDate: varchar("end_date", { length: 25 }),
    companyId: integer("company_id").references(() => company.id, {
      onUpdate: "no action",
    }),
  },
  (table) => ({
    nameUnique: uniqueIndex("title_name_unique").on(table.name),
  })
);

export const project = pgTable("project", {
  id: serial("id").primaryKey(),
  createdAt: timestamp("created_at", { precision: 6 }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { precision: 6 }).notNull().defaultNow(),
  name: varchar("name", { length: 255 }).notNull(),
  techStack: json("tech_stack").$type<TechStack>().notNull(),
  description: varchar("description", { length: 255 }),
  companyId: integer("company_id").references(() => company.id, {
    onUpdate: "no action",
  }),
  titleId: integer("title_id").references(() => title.id, {
    onUpdate: "no action",
  }),
});

export type InsertCompany = typeof company.$inferInsert;
export type SelectCompany = typeof company.$inferSelect;
export type InsertProject = typeof project.$inferInsert;
export type SelectProject = typeof project.$inferSelect;
export type InsertTitle = typeof title.$inferInsert;
export type SelectTitle = typeof title.$inferSelect;
