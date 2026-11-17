import Link from "next/link";
import ContactSection from "@/components/custom/ContactSection";
import RotatingHeadshot from "@/components/custom/RotatingHeadshot";
import { SkillsShowcase } from "@/components/custom/SkillsShowcase";
import { RetroGrid } from "@/components/magicui/retro-grid";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#070b17] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(168,85,247,0.2),_transparent_45%),radial-gradient(circle_at_bottom_right,_rgba(34,211,238,0.18),_transparent_40%)]" />

      <main className="relative z-10 mx-auto flex min-h-screen w-full max-w-5xl flex-col px-6 py-8 sm:px-10 lg:px-12">
        <header className="flex items-center justify-between border-b border-white/10 pb-5">
          <Link href="/" className="text-sm font-semibold tracking-wide text-white">
            Wesley Grant<span className="text-fuchsia-300">.</span>
          </Link>
          <a
            href="#contact"
            className="text-sm text-slate-300 transition-colors hover:text-white"
          >
            Get in touch <span aria-hidden="true">↗</span>
          </a>
        </header>

        <section className="grid flex-1 items-center gap-10 py-16 sm:py-20 lg:grid-cols-[1fr_auto] lg:gap-16">
          <div className="order-2 space-y-6 text-center lg:order-1 lg:text-left">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-cyan-200/80">
              A little about me
            </p>
            <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl">
              Hey, I&apos;m Wesley.
            </h1>
            <p className="mx-auto max-w-xl text-lg leading-8 text-slate-300 lg:mx-0">
              I&apos;m a developer who likes making useful things, exploring how
              they work and learning something new along the way. Lately,
              that&apos;s been web projects, game ideas and plenty of tinkering.
            </p>
            <p className="text-sm text-slate-400">
              When I&apos;m away from the keyboard, I&apos;m usually hiking,
              making things or spending time with friends.
            </p>
          </div>

          <div className="order-1 flex justify-center lg:order-2">
            <RotatingHeadshot />
          </div>
        </section>

        <SkillsShowcase />
        <ContactSection />
        <footer className="py-6 text-center text-xs text-slate-500">
          Made with care by Wesley.
        </footer>
      </main>

      <RetroGrid
        angle={60}
        cellSize={80}
        opacity={1}
        lightLineColor="#d1bfff"
        darkLineColor="#432d7f"
        className="absolute inset-0 hidden md:block"
      />
    </div>
  );
}
