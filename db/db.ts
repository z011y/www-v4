import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";

const sql =
  process.env.ENV === "prod"
    ? neon(process.env.PROD_DATABASE_URL!)
    : neon(process.env.DEV_DATABASE_URL!);
export const db = drizzle({ client: sql });
