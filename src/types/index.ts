export type ProjectStatus = "archived" | "active" | "experiment";

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  story: string;
  githubUrl: string;
  demoUrl?: string;
  tags: string[];
  status: ProjectStatus;
  year: number;
  highlights: string[];
  color: string;
}

export interface SiteConfig {
  name: string;
  title: string;
  subtitle: string;
  bio: string;
  githubUsername: string;
  email?: string;
  social: {
    github: string;
    twitter?: string;
    blog?: string;
  };
}
