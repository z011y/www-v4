import type { NextPage, GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import { useState } from "react";
import { PrismaClient } from "@prisma/client";
import * as Icons from "@primer/octicons-react";

import Header from "../components/Header";
import Badge from "../components/Badge";
import CompanySection from "../components/CompanySection";
import ProjectCard from "../components/ProjectCard";

export async function getStaticProps() {
  const prisma = new PrismaClient();

  let companies = await prisma.company.findMany();
  let projects = await prisma.project.findMany();
  let titles = await prisma.title.findMany();
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
          (title) => title.id === project.titleId
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
        <title>Zolly (Cameron Zollinger)</title>
      </Head>
      <Header></Header>
      <main className="w-full flex flex-col justify-center">
        {/* About */}
        <section id="home" className="w-full pt-28">
          <div className="flex flex-col justify-center items-center gap-y-4 text-center h-[28rem] m-16">
            <p className="opacity-60">Hi, my name is</p>
            <h1>Cameron Zollinger</h1>
            <span className="flex gap-x-1">
              <p className="opacity-60">I&apos;m a Tech Lead at </p>
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
          <div className="flex flex-col lg:flex-row justify-between gap-y-8 lg:gap-x-8 bg-gray-100 dark:bg-gray-1100 rounded-2xl mt-16 mx-4 lg:mx-16 p-8">
            <div className="flex items-center gap-x-4">
              <Icons.CodeIcon size="medium" />
              <h2>Engineer</h2>
            </div>
            <div className="flex items-center gap-x-4 opacity-60">
              <Icons.DependabotIcon size="medium" />
              <h2>Automator</h2>
            </div>
            <div className="flex items-center gap-x-4 opacity-30">
              <Icons.PencilIcon size="medium" />
              <h2>Designer?</h2>
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
        <section id="skills" className="pt-28 pb-16">
          <h3 className="ml-4 lg:ml-16">Some things I&apos;m good at</h3>
          <div className="flex gap-x-4 my-4 px-4 lg:px-16 overflow-x-scroll scrollbar-hidden">
            <Badge text="Test Automation" icon={<Icons.DependabotIcon />} />
            <Badge text="Debugging" icon={<Icons.BugIcon />} />
            <Badge
              text="Test Cases & Product Requirements"
              icon={<Icons.LogIcon />}
            />
            <Badge text="Frontend Development" icon={<Icons.CodeIcon />} />
            <Badge text="Git Organization" icon={<Icons.GitBranchIcon />} />
            <Badge text="Product Design" icon={<Icons.PaintbrushIcon />} />
            <Badge
              text="Product Team Communication"
              icon={<Icons.CommentDiscussionIcon />}
            />
          </div>
          <h3 className="ml-4 lg:ml-16">Some things I&apos;m learning</h3>
          <div className="flex gap-x-4 my-4 px-4 lg:px-16 overflow-x-scroll scrollbar-hidden">
            <Badge text="User Research" icon={<Icons.PersonIcon />} />
            <Badge text="Sprint Planning" icon={<Icons.TelescopeIcon />} />
            <Badge
              text="Leadership & Mentoring"
              icon={<Icons.CodeOfConductIcon />}
            />
            <Badge text="Backend Development" icon={<Icons.CodeIcon />} />
            <Badge
              text="Software Architecture Design"
              icon={<Icons.CpuIcon />}
            />
          </div>
          <h3 className="ml-4 lg:ml-16">Some technologies I like to use</h3>
          <div className="flex gap-x-4 my-4 px-4 lg:px-16 overflow-x-scroll scrollbar-hidden">
            <Badge text="JavaScript" />
            <Badge text="TypeScript" />
            <Badge text="React" />
            <Badge text="Next" />
            <Badge text="Node" />
            <Badge text="Cypress" />
            <Badge text="Postgres" />
            <Badge text="Prisma" />
          </div>
        </section>
      </main>
    </div>
  );
}
