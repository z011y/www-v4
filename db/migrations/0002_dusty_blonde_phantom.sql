ALTER TABLE "achievement" RENAME COLUMN "name" TO "description";--> statement-breakpoint
ALTER TABLE "company" ALTER COLUMN "end_date" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "company" ALTER COLUMN "start_date" SET DATA TYPE date USING CASE WHEN start_date IS NULL THEN NULL ELSE to_date(start_date, 'Mon YYYY') END;--> statement-breakpoint
ALTER TABLE "company" ALTER COLUMN "end_date" SET DATA TYPE date USING CASE WHEN end_date IS NULL OR end_date = 'Present' THEN NULL ELSE to_date(end_date, 'Mon YYYY') END;--> statement-breakpoint
ALTER TABLE "position" ALTER COLUMN "start_date" SET DATA TYPE date USING CASE WHEN start_date IS NULL THEN NULL ELSE to_date(start_date, 'Mon YYYY') END;--> statement-breakpoint
ALTER TABLE "position" ALTER COLUMN "end_date" SET DATA TYPE date USING CASE WHEN end_date IS NULL OR end_date = 'Present' THEN NULL ELSE to_date(end_date, 'Mon YYYY') END;--> statement-breakpoint