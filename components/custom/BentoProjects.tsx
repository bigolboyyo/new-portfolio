import {
  BellIcon,
  CalendarIcon,
  FileTextIcon,
  GitHubLogoIcon,
  GlobeIcon,
} from "@radix-ui/react-icons";
import { Share2Icon } from "lucide-react";

import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { Marquee } from "@/components/magicui/marquee";

const projects = [
  {
    Icon: GlobeIcon,
    name: "Personal Portfolio",
    description: "Built with Next.js and Tailwind. Responsive and fast.",
    status: "completed",
    href: "/",
    cta: "View Project",
    className: "col-span-3 lg:col-span-1",
    background: (
      <Marquee className="absolute top-1/6 [--duration:30s] opacity-60  scale-100">
        {[
          "Next.js",
          "Tailwind",
          "TypeScript",
          "Vercel",
          "Responsive",
          "Shadcn/ui",
          "React Icons",
          "Magic",
        ].map((tag, i) => (
          <span
            key={i}
            className="blur-[1px] mx-2 rounded bg-black/50 px-4 py-2 text-xs border-2 text-[#00ff00] min-w-[150px] min-h-[75px] flex items-center justify-center hover:border-accent-foreground hover:blur-none hover:scale-105 transition-all duration-300"
          >
            {"> "}
            {tag}
          </span>
        ))}
      </Marquee>
    ),
  },
  {
    Icon: FileTextIcon,
    name: "Test Test",
    description: "Live preview with autosave and export features.",
    status: "ongoing",
    href: "https://github.com/username/md-editor",
    cta: "View Repo",
    className: "col-span-3 lg:col-span-2",
  },
  {
    Icon: CalendarIcon,
    name: "Task Planner",
    description: "Plan tasks by day, week, or Kanban view.",
    status: "archived",
    href: "https://github.com/username/task-planner",
    cta: "View Repo",
    className: "col-span-3 lg:col-span-2",
  },
  {
    Icon: BellIcon,
    name: "Notification System",
    description: "Real-time WebSocket alerts with Redis backend.",
    status: "completed",
    href: "https://github.com/username/notifier",
    cta: "View Repo",
    className: "col-span-3 lg:col-span-1",
    background: (
      <div className="absolute inset-0 flex items-center justify-center text-center text-white opacity-10">
        WebSocket + Redis
      </div>
    ),
  },
  {
    Icon: GitHubLogoIcon,
    name: "CLI Logger Tool",
    description: "TTY-friendly log viewer with filters and formatting.",
    status: "completed",
    href: "https://github.com/username/logger",
    cta: "View Repo",
    className: "col-span-3 lg:col-span-1",
  },
  {
    Icon: Share2Icon,
    name: "Meshtastic Messenger",
    description: "LoRa mesh-based peer messaging and file transfer.",
    status: "experimental",
    href: "https://github.com/username/meshtastic-messenger",
    cta: "Coming Soon",
    className: "col-span-3 lg:col-span-2",
    background: (
      <div className="absolute right-4 top-10 opacity-20">
        <svg
          viewBox="0 0 100 100"
          className="h-24 w-24 animate-pulse text-white"
          fill="none"
        >
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="currentColor"
            strokeWidth="5"
          />
        </svg>
      </div>
    ),
  },
];

export default function BentoProjects() {
  return (
    <BentoGrid className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 row-span-full gap-4 pb-4 px-2">
      {projects.map((proj, idx) => (
        <BentoCard
          key={idx}
          {...proj}
          background={proj.background ?? undefined}
        />
      ))}
    </BentoGrid>
  );
}
