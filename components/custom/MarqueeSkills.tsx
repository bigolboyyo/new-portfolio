import { Marquee } from "@/components/magicui/marquee";

const skills = [
  "JavaScript",
  "TypeScript",
  "Node.js",
  "React",
  "Next.js",
  "Express",
  "Hono",
  "Tailwind CSS",
  "HTML5",
  "CSS3",
  "Tampermonkey",
  "Python",
  "Flask",
  "OBS Scripting",
  "Custom HTML Overlays",
  "Game Emulation",
  "Media Preservation",
  "Linux",
  "WSL",
  "Bash",
  "Data Wrangling",
  "Systems Design",
  "Creative Coding",
  "Vaporwave Aesthetic",
  "Crafting",
  "Leatherwork",
  "Raspberry Pi",
  "LoRa",
  "Git",
  "Docker",
  "GitHub Actions",
  "CI/CD",
  "REST APIs",
  "WebSockets",
  "GraphQL",
  "SQLite",
  "PostgreSQL",
  "Redis",
  "Nginx",
  "Systemd",
  "Network Protocols",
  "TCP/IP",
  "UDP",
  "Arduino",
  "ESP32",
  "JSON",
  "YAML",
  "Markdown",
  "SEO",
  "UX/UI Principles",
  "Open Source Contribution",
  "Agile Methodologies",
  "Debugging",
  "Profiling",
  "Performance Optimization",
  "Security Best Practices",
  "OAuth",
  "JWT",
  "FOSS Advocacy",
  "Decentralized Systems",
  "Mesh Networking",
  "Offline-First Design",
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
