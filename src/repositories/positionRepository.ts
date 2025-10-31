import { desc, eq } from "drizzle-orm";

import { db } from "../../db/db";
import { position, SelectPosition } from "../../db/schema";

export class PositionRepository {
  async all(): Promise<SelectPosition[]> {
    return await db.select().from(position).orderBy(desc(position.startDate));
  }

  async get(companyId: number): Promise<SelectPosition[]> {
    return await db
      .select()
      .from(position)
      .where(eq(position.companyId, companyId))
      .orderBy(desc(position.startDate));
  }
}
