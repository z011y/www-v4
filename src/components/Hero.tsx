import * as Icons from "@primer/octicons-react";

export default function Hero() {
  return (
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
      <div className="dark:bg-gray-1100 mx-4 mt-16 flex flex-col justify-between gap-y-8 rounded-2xl bg-gray-100 p-8 md:flex-row lg:mx-16 lg:gap-x-8">
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
  );
}
