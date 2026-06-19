import { Marquee } from "@/components/magicui/marquee";

const skills = [
  // 🌐 Core Web + App Dev
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Tailwind CSS",
  "HTML5",
  "CSS3",

  // ⚙️ Backend / Systems
  "REST APIs",
  "WebSockets",
  "Express",
  "Hono",
  "SQLite",
  "PostgreSQL",
  "Redis",
  "Nginx",

  // 🧱 DevOps / Infra
  "Linux",
  "Bash",
  "Docker",
  "Git",
  "GitHub Actions",
  "CI/CD",
  "Systemd",

  // 🎮 Game Dev + Creative Engineering
  "Godot Engine",
  "GDScript",
  "Creative Coding",
  "Game Systems Design",
  "Pixel Art Pipelines",
  "Animation Systems",
  "Real-time UI Systems",

  // 🧪 Scripting / Automation
  "Python",
  "Data Wrangling",
  "Automation Scripting",
  "Tampermonkey Scripts",
  "OBS Scripting",
  "Custom Streaming Overlays",

  // 🔌 Hardware / Embedded
  "Raspberry Pi Projects",
  "Meshtastic",
  "LoRa / Low-Power Networking",

  // 🌐 Networking / Systems Thinking
  "TCP/IP Fundamentals",
  "UDP Systems",
  "Network Protocol Awareness",
  "Offline-First Design",

  // 🧠 Engineering Practices
  "Debugging",
  "Performance Optimization",
  "Profiling",
  "Systems Design",
  "Security Awareness",

  // 🎨 UI / UX / Creative Direction
  "UI/UX Principles",
  "Motion Design (Framer Motion)",
  "Interactive Web Animation",

  // 🧰 Data / Formats / Glue
  "JSON",
  "YAML",
  "Markdown",

  // 🌍 Philosophy / Open Source Angle
  "FOSS Advocacy"
];

function SkillBadge({ skill }: { skill: string }) {
  return (
    <div className="mx-2 my-1 rounded-full border border-purple-500 bg-black/60 px-4 py-2 text-sm font-medium text-purple-100 shadow-md backdrop-blur-sm hover:bg-purple-500/10">
      {skill}
    </div>
  );
}

export function MarqueeSkills() {
  const firstRow = skills.slice(0, Math.ceil(skills.length / 2));
  const secondRow = skills.slice(Math.ceil(skills.length / 2));

  return (
    <div className="relative flex w-screen flex-col items-center justify-center overflow-hidden py-8 z-10">
      <Marquee pauseOnHover className="[--duration:120s]">
        {firstRow.map((skill) => (
          <SkillBadge key={skill} skill={skill} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:120s]">
        {secondRow.map((skill) => (
          <SkillBadge key={skill} skill={skill} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 "></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 "></div>
    </div>
  );
}
