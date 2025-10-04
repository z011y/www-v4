import * as Icons from "@primer/octicons-react";

import Badge from "./Badge";

export default function SkillsSection() {
  return (
    <section id="skills" className="pt-28 pb-16">
      <h4 className="ml-4 lg:ml-16">Some things I&apos;m good at</h4>
      <div className="scrollbar-hidden my-4 flex gap-x-4 overflow-x-scroll px-4 lg:px-16">
        <Badge text="Leadership" icon={<Icons.CodeOfConductIcon />} />
        <Badge text="People Management" icon={<Icons.PeopleIcon />} />
        <Badge text="Software Architecture" icon={<Icons.CpuIcon />} />
        <Badge
          text="Collaboration & Communication"
          icon={<Icons.CommentDiscussionIcon />}
        />
        <Badge text="Technical Strategy" icon={<Icons.TelescopeIcon />} />
        <Badge text="Backend Engineering" icon={<Icons.CodeIcon />} />
        <Badge text="Frontend Engineering" icon={<Icons.CodeIcon />} />
        <Badge text="ML Engineering" icon={<Icons.BeakerIcon />} />
        <Badge text="Data Visualization" icon={<Icons.GraphIcon />} />
      </div>
      <h4 className="ml-4 lg:ml-16">Some things I&apos;m learning</h4>
      <div className="scrollbar-hidden my-4 flex gap-x-4 overflow-x-scroll px-4 lg:px-16">
        <Badge text="Data Engineering" icon={<Icons.DatabaseIcon />} />
        <Badge text="Data Modeling" icon={<Icons.ShareAndroidIcon />} />
        <Badge text="AI Agents" icon={<Icons.DependabotIcon />} />
      </div>
      <h4 className="ml-4 lg:ml-16">Some technologies I like to use</h4>
      <div className="scrollbar-hidden my-4 flex gap-x-4 overflow-x-scroll px-4 lg:px-16">
        <Badge text="Python" />
        <Badge text="TypeScript" />
        <Badge text="C#" />
        <Badge text="PySpark" />
        <Badge text="MLflow" />
        <Badge text="FastAPI" />
        <Badge text=".NET" />
        <Badge text="React" />
        <Badge text="Vue" />
        <Badge text="PostgreSQL" />
      </div>
    </section>
  );
}
