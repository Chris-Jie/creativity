import { siteConfig } from "@/data/site";
import { GitHubIcon } from "./Icons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="font-mono text-sm text-white/60">{siteConfig.name}</p>
          <p className="mt-1 text-xs text-white/30">
            © {year} · 用热情构建，用代码记录
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href={siteConfig.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/40 transition-colors hover:text-white/80"
            aria-label="GitHub"
          >
            <GitHubIcon className="h-5 w-5" />
          </a>
          {siteConfig.social.twitter && (
            <a
              href={siteConfig.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/40 transition-colors hover:text-white/80"
            >
              Twitter
            </a>
          )}
          {siteConfig.social.blog && (
            <a
              href={siteConfig.social.blog}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/40 transition-colors hover:text-white/80"
            >
              Blog
            </a>
          )}
        </div>
      </div>
    </footer>
  );
}
