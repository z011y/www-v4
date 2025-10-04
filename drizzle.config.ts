import { defineConfig } from "drizzle-kit";

const url =
  process.env.ENV === "prod"
    ? process.env.PROD_DATABASE_URL!
    : process.env.DEV_DATABASE_URL!;

export default defineConfig({
  schema: "./db/schema.ts",
  out: "./db/migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: url,
  },
});
