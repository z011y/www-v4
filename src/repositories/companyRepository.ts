import { desc } from "drizzle-orm";

import { db } from "../../db/db";
import { company, SelectCompany } from "../../db/schema";

export class CompanyRepository {
  async all(): Promise<SelectCompany[]> {
    return await db.select().from(company).orderBy(desc(company.startDate));
  }
}
