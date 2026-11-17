import { Code2, Gamepad2, Terminal } from "lucide-react";
import { Marquee } from "@/components/magicui/marquee";

const stacks = [
  {
    title: "Web & product",
    description: "Thoughtful interfaces and useful apps.",
    icon: Code2,
    skills: ["TypeScript", "React", "Next.js", "Node.js", "Tailwind CSS"],
    accent: "text-cyan-200",
    border: "hover:border-cyan-300/40",
  },
  {
    title: "Systems & tinkering",
    description: "Getting curious about what runs underneath.",
    icon: Terminal,
    skills: ["Linux", "Bash", "Python", "Tampermonkey", "OBS Studio", "Automation"],
    accent: "text-fuchsia-200",
    border: "hover:border-fuchsia-300/40",
  },
  {
    title: "2D games & pixel art",
    description: "Designing little worlds, one sprite and game mechanic at a time.",
    icon: Gamepad2,
    skills: ["Godot", "GDScript", "2D game design", "Pixel art", "Sprite animation", "Tilemaps"],
    accent: "text-violet-200",
    border: "hover:border-violet-300/40",
  },
];

const firstMarqueeRow = [
  "TypeScript (TS)",
  "React",
  "Next.js",
  "Node.js",
  "Tailwind CSS",
  "HTML & CSS",
  "REST APIs",
  "PostgreSQL",
  "Git",
  "Godot",
  "GDScript",
  "2D game design",
  "Pixel art",
  "Sprite animation",
  "Tilemaps",
  "Level design",
  "Game systems",
  "Creative coding",
];

const secondMarqueeRow = [
  "Linux",
  "Bash",
  "Python",
  "Scripting",
  "Automation",
  "Tampermonkey",
  "Browser userscripts",
  "OBS Studio",
  "Stream overlays",
  "Docker",
  "Networking",
  "UI and motion",
  "Game development",
  "Character design",
  "World building",
  "Indie games",
  "Raspberry Pi",
  "Open source",
];

function MarqueeRow({ skills, reverse = false }: { skills: string[]; reverse?: boolean }) {
  return (
    <Marquee reverse={reverse} pauseOnHover className="[--duration:70s]">
      {skills.map((skill) => (
        <SkillBadge key={skill} skill={skill} />
      ))}
    </Marquee>
  );
}

function SkillBadge({ skill }: { skill: string }) {
  return (
    <span className="mx-1.5 my-1 inline-flex rounded-full border border-white/10 bg-slate-950/60 px-4 py-2 text-sm text-slate-200 shadow-lg backdrop-blur-sm transition-colors hover:border-fuchsia-300/40 hover:text-white">
      {skill}
    </span>
  );
}

export function SkillsShowcase() {
  return (
    <section aria-labelledby="skills-heading" className="relative z-10 w-full py-8">
      <div className="mx-auto mb-6 max-w-3xl text-center">
        <p className="mb-2 text-[10px] uppercase tracking-[0.3em] text-cyan-200/80">
          A few favorite tools
        </p>
        <h2 id="skills-heading" className="text-2xl font-semibold text-white sm:text-3xl">
          Things I like working with
        </h2>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {stacks.map(({ title, description, icon: Icon, skills, accent, border }) => (
          <article
            key={title}
            className={`rounded-3xl border border-white/10 bg-slate-950/45 p-5 backdrop-blur-sm transition-colors ${border}`}
          >
            <div className={`mb-4 flex items-center gap-3 ${accent}`}>
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-current/20 bg-white/5">
                <Icon size={19} aria-hidden="true" />
              </span>
              <h3 className="font-semibold text-white">{title}</h3>
            </div>
            <p className="mb-4 text-sm leading-6 text-slate-400">{description}</p>
            <ul className="flex flex-wrap gap-2" aria-label={`${title} skills`}>
              {skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-200"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div
        aria-label="More technologies and interests"
        className="relative left-1/2 mt-7 w-screen -translate-x-1/2 overflow-hidden"
      >
        <MarqueeRow skills={firstMarqueeRow} />
        <MarqueeRow skills={secondMarqueeRow} reverse />
      </div>
    </section>
  );
}
