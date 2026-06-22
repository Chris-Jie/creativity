import type { Project } from "@/types";
import { ExternalLinkIcon, GitHubIcon } from "./Icons";

const statusLabels: Record<Project["status"], string> = {
  archived: "已归档",
  active: "维护中",
  experiment: "实验中",
};

const statusColors: Record<Project["status"], string> = {
  archived: "text-white/40 bg-white/5 border-white/10",
  active: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
  experiment: "text-amber-400 bg-amber-400/10 border-amber-400/20",
};

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <article
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/8 bg-white/[0.03] backdrop-blur-sm transition-all duration-500 hover:border-white/15 hover:bg-white/[0.06]"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div
        className="absolute inset-x-0 top-0 h-px opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `linear-gradient(90deg, transparent, ${project.color}, transparent)`,
        }}
      />

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-4 flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div
              className="flex h-10 w-10 items-center justify-center rounded-xl text-sm font-bold text-white"
              style={{ backgroundColor: `${project.color}20`, color: project.color }}
            >
              {project.title.charAt(0)}
            </div>
            <div>
              <h3 className="font-semibold text-white">{project.title}</h3>
              <p className="text-xs text-white/40">{project.year}</p>
            </div>
          </div>
          <span
            className={`shrink-0 rounded-full border px-2.5 py-0.5 text-xs ${statusColors[project.status]}`}
          >
            {statusLabels[project.status]}
          </span>
        </div>

        <p className="mb-1 text-sm font-medium text-white/70">
          {project.tagline}
        </p>
        <p className="mb-4 flex-1 text-sm leading-relaxed text-white/40">
          {project.description}
        </p>

        <div className="mb-4 rounded-xl border border-white/5 bg-white/[0.02] p-3">
          <p className="text-xs leading-relaxed text-white/35 italic">
            &ldquo;{project.story}&rdquo;
          </p>
        </div>

        <div className="mb-4 flex flex-wrap gap-1.5">
          {project.highlights.map((highlight) => (
            <span
              key={highlight}
              className="rounded-md bg-white/5 px-2 py-0.5 text-xs text-white/50"
            >
              {highlight}
            </span>
          ))}
        </div>

        <div className="mb-5 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-white/8 px-2 py-0.5 font-mono text-xs text-white/35"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3 border-t border-white/5 pt-4">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 py-2 text-sm text-white/70 transition-all hover:border-white/20 hover:bg-white/10 hover:text-white"
          >
            <GitHubIcon className="h-4 w-4" />
            源码
          </a>
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-center justify-center gap-2 rounded-lg py-2 text-sm text-white/70 transition-all hover:text-white"
              style={{ backgroundColor: `${project.color}15` }}
            >
              <ExternalLinkIcon className="h-4 w-4" />
              在线演示
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
