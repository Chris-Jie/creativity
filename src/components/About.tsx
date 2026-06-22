import { siteConfig } from "@/data/site";

const principles = [
  {
    title: "先做出来",
    description: "想法的价值在于验证，而不是空想。每个项目都是从 MVP 开始的。",
    icon: "⚡",
  },
  {
    title: "公开透明",
    description: "失败不可耻，藏着才可耻。代码开源，过程公开，经验共享。",
    icon: "🔓",
  },
  {
    title: "持续迭代",
    description: "商业化的失败不等于技术的失败。好的模块会在下一个项目中重生。",
    icon: "🔄",
  },
];

export default function About() {
  return (
    <section id="about" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <p className="mb-3 font-mono text-xs tracking-widest text-pink-400 uppercase">
              About
            </p>
            <h2 className="mb-6 text-4xl font-bold text-white sm:text-5xl">
              关于这个
              <br />
              <span className="bg-gradient-to-r from-pink-400 to-indigo-400 bg-clip-text text-transparent">
                创意实验室
              </span>
            </h2>
            <p className="mb-6 leading-relaxed text-white/50">{siteConfig.bio}</p>
            <p className="leading-relaxed text-white/40">
              这个网站是我所有「没能赚钱但值得记住」的项目的家。它们记录了我的技术成长、产品思维和创业教训。如果你正在做类似的事情，希望这些项目能给你一些启发——或者至少让你知道，你不是一个人在踩坑。
            </p>

            {siteConfig.email && (
              <a
                href={`mailto:${siteConfig.email}`}
                className="mt-8 inline-flex items-center gap-2 text-sm text-cyan-400 transition-colors hover:text-cyan-300"
              >
                {siteConfig.email}
                <span aria-hidden>→</span>
              </a>
            )}
          </div>

          <div className="flex flex-col gap-4">
            {principles.map((principle) => (
              <div
                key={principle.title}
                className="group rounded-2xl border border-white/8 bg-white/[0.03] p-6 transition-all hover:border-white/15 hover:bg-white/[0.06]"
              >
                <div className="mb-3 text-2xl">{principle.icon}</div>
                <h3 className="mb-2 font-semibold text-white">
                  {principle.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/40">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
