import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="mb-3 font-mono text-xs tracking-widest text-cyan-400 uppercase">
            Portfolio
          </p>
          <h2 className="mb-4 text-4xl font-bold text-white sm:text-5xl">
            作品集合
          </h2>
          <p className="mx-auto max-w-xl text-white/40">
            每一个项目都是一次完整的创业尝试。它们没有带来预期的商业回报，但留下了可运行的代码、可复用的经验和值得分享的故事。
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
