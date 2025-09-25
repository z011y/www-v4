import type { NextPage, InferGetStaticPropsType } from "next";
import Head from "next/head";
import { useState } from "react";
import * as Icons from "@primer/octicons-react";

import { db } from "../db/db";
import { company, project, title } from "../db/schema";
import Header from "../components/Header";
import CompanySection from "../components/CompanySection";
import ProjectCard from "../components/ProjectCard";
import SkillsSection from "../components/SkillsSection";

export async function getStaticProps() {
  let companies = await db.select().from(company);
  let projects = await db.select().from(project);
  let titles = await db.select().from(title);
  companies = JSON.parse(JSON.stringify(companies));
  projects = JSON.parse(JSON.stringify(projects));
  titles = JSON.parse(JSON.stringify(titles));

  return {
    props: { companies, projects, titles },
  };
}

export default function Home({
  companies,
  projects,
  titles,
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
          titles={titles}
          focusProject={setFocusedProject}
        />
      );
    });
    return companyComponents;
  };

  function renderProjects() {
    const projectComponents = projects
      .sort((a, b) => (b.titleId ?? 0) - (a.titleId ?? 0))
      .map((project) => {
        const isFocused = focusedProject === project.id;
        const titleName = titles.filter(
          (title) => title.id === project.titleId,
        )[0].name;
        return (
          <ProjectCard
            key={project.id}
            project={project}
            isFocused={isFocused}
            titleName={titleName}
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
      <main className="w-full flex flex-col justify-center">
        {/* About */}
        <section id="about" className="w-full pt-28">
          <div className="flex flex-col justify-center items-center gap-y-4 text-center h-[28rem] m-16">
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
          <div className="flex flex-col md:flex-row justify-between gap-y-8 lg:gap-x-8 bg-gray-100 dark:bg-gray-1100 rounded-2xl mt-16 mx-4 lg:mx-16 p-8">
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
        <section id="career" className="pt-28 flex flex-col items-center">
          {renderCompanies()}
        </section>
        {/* Projects */}
        <section
          id="projects"
          className="pt-28 px-4 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-4"
        >
          {renderProjects()}
        </section>
        {/* Skills */}
        <SkillsSection />
      </main>
    </div>
  );
}
