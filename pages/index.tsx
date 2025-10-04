import type { NextPage, InferGetStaticPropsType } from "next";
import Head from "next/head";
import { useState } from "react";
import * as Icons from "@primer/octicons-react";

import { db } from "../db/db";
import { company, project, position } from "../db/schema";
import Header from "../components/Header";
import CompanySection from "../components/CompanySection";
import ProjectCard from "../components/ProjectCard";
import SkillsSection from "../components/SkillsSection";

export async function getStaticProps() {
  let companies = await db.select().from(company);
  let projects = await db.select().from(project);
  let positions = await db.select().from(position);
  companies = JSON.parse(JSON.stringify(companies));
  projects = JSON.parse(JSON.stringify(projects));
  positions = JSON.parse(JSON.stringify(positions));

  return {
    props: { companies, projects, positions },
  };
}

export default function Home({
  companies,
  projects,
  positions,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [focusedProject, setFocusedProject] = useState(0);

  const renderCompanies = () => {
    // sort companies by startDate newest to oldest
    companies.sort((a, b): number => {
      const dateA = new Date(a.startDate);
      const dateB = new Date(b.startDate);
      return Number(dateB) - Number(dateA);
    });

    const companyComponents = companies.map((company) => {
      return (
        <CompanySection
          key={company.id}
          company={company}
          projects={projects}
          positions={positions}
          focusProject={setFocusedProject}
        />
      );
    });
    return companyComponents;
  };

  function renderProjects() {
    const projectComponents = projects
      .sort((a, b) => (b.positionId ?? 0) - (a.positionId ?? 0))
      .map((project) => {
        const isFocused = focusedProject === project.id;
        const positionName = positions.filter(
          (position) => position.id === project.positionId,
        )[0].name;
        return (
          <ProjectCard
            key={project.id}
            project={project}
            isFocused={isFocused}
            positionName={positionName}
          />
        );
      });
    return projectComponents;
  }

  return (
    <div>
      <Head>
        <title>Cameron Zollinger | z011y</title>
      </Head>
      <Header></Header>
      <main className="flex w-full flex-col justify-center">
        {/* About */}
        <section id="home" className="w-full pt-28">
          <div className="m-16 flex h-[28rem] flex-col items-center justify-center gap-y-4 text-center">
            <p className="opacity-60">Hi, my name is</p>
            <h1>Cameron Zollinger</h1>
            <span className="flex gap-x-1">
              <p className="opacity-60">
                I&apos;m a software engineering leader at{" "}
              </p>
              <a
                href="https://award.co"
                target="_blank"
                rel="noreferrer"
                className="text-blue"
              >
                Awardco
              </a>
            </span>
          </div>
          <div className="mx-4 mt-16 flex flex-col justify-between gap-y-8 rounded-2xl bg-gray-100 p-8 md:flex-row lg:mx-16 lg:gap-x-8 dark:bg-gray-1100">
            <div className="flex items-center gap-x-4">
              <Icons.CodeIcon size={24} />
              <h3>Software</h3>
            </div>
            <div className="flex items-center gap-x-4">
              <Icons.GraphIcon size={24} />
              <h3>Analytics</h3>
            </div>
            <div className="flex items-center gap-x-4">
              <Icons.DependabotIcon size={24} />
              <h3>AI / ML</h3>
            </div>
          </div>
        </section>
        {/* Career */}
        <section id="career" className="flex flex-col items-center pt-28">
          {renderCompanies()}
        </section>
        {/* Projects */}
        <section
          id="projects"
          className="grid grid-cols-1 gap-4 px-4 pt-28 lg:grid-cols-2 lg:px-16"
        >
          {renderProjects()}
        </section>
        {/* Skills */}
        <SkillsSection />
      </main>
    </div>
  );
}
