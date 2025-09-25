CREATE TABLE "company" (
	"id" serial PRIMARY KEY NOT NULL,
	"created_at" timestamp (6) DEFAULT now() NOT NULL,
	"updated_at" timestamp (6) DEFAULT now() NOT NULL,
	"name" varchar(255) NOT NULL,
	"start_date" varchar(25) NOT NULL,
	"end_date" varchar(25) NOT NULL
);
--> statement-breakpoint
CREATE TABLE "project" (
	"id" serial PRIMARY KEY NOT NULL,
	"created_at" timestamp (6) DEFAULT now() NOT NULL,
	"updated_at" timestamp (6) DEFAULT now() NOT NULL,
	"name" varchar(255) NOT NULL,
	"tech_stack" json NOT NULL,
	"description" varchar(255),
	"company_id" integer,
	"title_id" integer
);
--> statement-breakpoint
CREATE TABLE "title" (
	"id" serial PRIMARY KEY NOT NULL,
	"created_at" timestamp (6) DEFAULT now() NOT NULL,
	"updated_at" timestamp (6) DEFAULT now() NOT NULL,
	"name" varchar(255) NOT NULL,
	"roles" json NOT NULL,
	"start_date" varchar(25),
	"end_date" varchar(25),
	"company_id" integer
);
--> statement-breakpoint
ALTER TABLE "project" ADD CONSTRAINT "project_company_id_company_id_fk" FOREIGN KEY ("company_id") REFERENCES "public"."company"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "project" ADD CONSTRAINT "project_title_id_title_id_fk" FOREIGN KEY ("title_id") REFERENCES "public"."title"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "title" ADD CONSTRAINT "title_company_id_company_id_fk" FOREIGN KEY ("company_id") REFERENCES "public"."company"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
CREATE UNIQUE INDEX "company_name_unique" ON "company" USING btree ("name");--> statement-breakpoint
CREATE UNIQUE INDEX "title_name_unique" ON "title" USING btree ("name");