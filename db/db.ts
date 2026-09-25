import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";

const databaseUrl =
  process.env.DATABASE_URL ||
  (process.env.ENV === "prod"
    ? process.env.PROD_DATABASE_URL
    : process.env.DEV_DATABASE_URL);

const sql = neon(databaseUrl!);
export const db = drizzle({ client: sql });
