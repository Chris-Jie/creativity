import { siteConfig } from "@/data/site";
import { projects } from "@/data/projects";
import { ArrowDownIcon, SparkleIcon } from "./Icons";

export default function Hero() {
  const projectCount = projects.length;
  const archivedCount = projects.filter((p) => p.status === "archived").length;

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-20">
      <div className="mx-auto max-w-4xl text-center">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-white/60 backdrop-blur-sm">
          <SparkleIcon className="h-3 w-3 text-cyan-400" />
          <span>个人创意作品集 · 纯前端展示</span>
        </div>

        <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight text-white sm:text-7xl">
          <span className="block">{siteConfig.title}</span>
          <span className="mt-2 block bg-gradient-to-r from-cyan-400 via-indigo-400 to-pink-400 bg-clip-text text-transparent">
            {siteConfig.subtitle}
          </span>
        </h1>

        <p className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-white/50 sm:text-xl">
          {siteConfig.bio}
        </p>

        <div className="mb-16 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="group relative overflow-hidden rounded-full bg-white px-8 py-3 text-sm font-medium text-black transition-transform hover:scale-105"
          >
            <span className="relative z-10">浏览作品</span>
            <div className="absolute inset-0 -z-0 bg-gradient-to-r from-cyan-400 to-indigo-400 opacity-0 transition-opacity group-hover:opacity-100" />
          </a>
          <a
            href={siteConfig.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/15 px-8 py-3 text-sm font-medium text-white/80 transition-all hover:border-white/30 hover:bg-white/5 hover:text-white"
          >
            查看 GitHub
          </a>
        </div>

        <div className="flex items-center justify-center gap-12 text-center">
          <div>
            <div className="text-3xl font-bold text-white">{projectCount}</div>
            <div className="mt-1 text-xs tracking-wider text-white/40 uppercase">
              个项目
            </div>
          </div>
          <div className="h-8 w-px bg-white/10" />
          <div>
            <div className="text-3xl font-bold text-white">{archivedCount}</div>
            <div className="mt-1 text-xs tracking-wider text-white/40 uppercase">
              已归档
            </div>
          </div>
          <div className="h-8 w-px bg-white/10" />
          <div>
            <div className="text-3xl font-bold text-white">∞</div>
            <div className="mt-1 text-xs tracking-wider text-white/40 uppercase">
              次尝试
            </div>
          </div>
        </div>
      </div>

      <a
        href="#projects"
        className="absolute bottom-10 flex flex-col items-center gap-2 text-white/30 transition-colors hover:text-white/60"
        aria-label="向下滚动"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ArrowDownIcon className="h-4 w-4 animate-bounce" />
      </a>
    </section>
  );
}
