"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/data/site";
import { GitHubIcon } from "./Icons";

const navLinks = [
  { href: "#projects", label: "作品" },
  { href: "#about", label: "关于" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-white/5 bg-[#050508]/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#"
          className="group flex items-center gap-2 font-mono text-sm tracking-wider text-white/90"
        >
          <span className="inline-block h-2 w-2 rounded-full bg-cyan-400 transition-transform group-hover:scale-125" />
          {siteConfig.name}
        </a>

        <div className="flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-white/50 transition-colors hover:text-white/90"
            >
              {link.label}
            </a>
          ))}
          <a
            href={siteConfig.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-white/70 transition-all hover:border-white/20 hover:bg-white/10 hover:text-white"
          >
            <GitHubIcon className="h-4 w-4" />
            GitHub
          </a>
        </div>
      </nav>
    </header>
  );
}
