import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "local-first-notes",
    title: "心灵守卫",
    tagline: "帮助交易员控制心理状态的应用",
    description:
      "帮助交易员控制心理状态的应用，在交易前进行心理状态检查和情绪管理",
    story:
      "这其实是一个1.0.0版本，但我尝试在各类社区推广了一周左右最终还是零用户，所以最终决定开源，希望对其他交易员有所帮助。",
    githubUrl: "https://github.com/Chris-Jie/MindGuard",
    demoUrl: "https://mind-guard-drab.vercel.app/dashboard",
    tags: ["TypeScript", "React", "Next.js", "Tailwind", "Shadcn", "Lucide", "OpenAI"],
    status: "archived",
    year: 2026,
    highlights: ["零服务器架构", "PWA 离线可用"],
    color: "#6366f1",
  }
];
