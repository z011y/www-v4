CREATE TABLE "achievement" (
	"id" serial PRIMARY KEY NOT NULL,
	"created_at" timestamp (6) DEFAULT now() NOT NULL,
	"updated_at" timestamp (6) DEFAULT now() NOT NULL,
	"name" varchar(255) NOT NULL,
	"position_id" integer
);
--> statement-breakpoint
ALTER TABLE "title" RENAME TO "position";--> statement-breakpoint
ALTER TABLE "project" RENAME COLUMN "title_id" TO "position_id";--> statement-breakpoint
ALTER TABLE "project" DROP CONSTRAINT "project_title_id_title_id_fk";
--> statement-breakpoint
ALTER TABLE "position" DROP CONSTRAINT "title_company_id_company_id_fk";
--> statement-breakpoint
DROP INDEX "title_name_unique";--> statement-breakpoint
ALTER TABLE "achievement" ADD CONSTRAINT "achievement_position_id_position_id_fk" FOREIGN KEY ("position_id") REFERENCES "public"."position"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "project" ADD CONSTRAINT "project_position_id_position_id_fk" FOREIGN KEY ("position_id") REFERENCES "public"."position"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "position" ADD CONSTRAINT "position_company_id_company_id_fk" FOREIGN KEY ("company_id") REFERENCES "public"."company"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
CREATE UNIQUE INDEX "position_name_unique" ON "position" USING btree ("name");