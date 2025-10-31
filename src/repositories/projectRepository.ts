import { eq } from "drizzle-orm";

import { db } from "../../db/db";
import { project, SelectProject } from "../../db/schema";

export class ProjectRepository {
  async all(): Promise<SelectProject[]> {
    return await db.select().from(project);
  }

  async get(positionId: number): Promise<SelectProject[]> {
    return await db
      .select()
      .from(project)
      .where(eq(project.positionId, positionId));
  }
}
