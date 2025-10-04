import { db } from "../../db/db";
import { company, project, position } from "../../db/schema";
import HomeClient from "../components/HomeClient";

async function getData() {
  let companies = await db.select().from(company);
  let projects = await db.select().from(project);
  let positions = await db.select().from(position);
  companies = JSON.parse(JSON.stringify(companies));
  projects = JSON.parse(JSON.stringify(projects));
  positions = JSON.parse(JSON.stringify(positions));

  return { companies, projects, positions };
}

export default async function Home() {
  const { companies, projects, positions } = await getData();

  return (
    <HomeClient
      companies={companies}
      projects={projects}
      positions={positions}
    />
  );
}
