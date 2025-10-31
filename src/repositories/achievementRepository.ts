import { eq } from "drizzle-orm";

import { db } from "../../db/db";
import { achievement, SelectAchievement } from "../../db/schema";

export class AchievementRepository {
  async all(): Promise<SelectAchievement[]> {
    return await db.select().from(achievement);
  }

  async get(positionId: number): Promise<SelectAchievement[]> {
    return await db
      .select()
      .from(achievement)
      .where(eq(achievement.positionId, positionId));
  }
}
