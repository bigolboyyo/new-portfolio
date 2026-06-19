import ContactSection from "@/components/custom/ContactSection";
import GradientAboutMe from "@/components/custom/GradientAboutMe";
import { MarqueeSkills } from "@/components/custom/MarqueeSkills";
import RotatingHeadshot from "@/components/custom/RotatingHeadshot";
import TextAnimateCycle from "@/components/custom/TextAnimateCycle";
import { HyperText } from "@/components/magicui/hyper-text";
import { RetroGrid } from "@/components/magicui/retro-grid";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen w-screen px-4 sm:px-8 md:px-12 lg:px-20 py-12 gap-12 font-mono relative">
      <main className="w-full max-w-4xl flex flex-col items-center text-center sm:text-left gap-8 ">
        <RotatingHeadshot />

        <HyperText className="text-5xl sm:text-6xl font-normal tracking-tight text-white">
          Wesley Grant
        </HyperText>
        <TextAnimateCycle />
        <GradientAboutMe />
        <MarqueeSkills />
        <ContactSection />
        <RetroGrid
          angle={60}
          cellSize={80}
          opacity={1}
          lightLineColor="#d1bfff"
          darkLineColor="#432d7f"
          className="absolute inset-0 hidden md:block"
        />
      </main>
    </div>
  );
}
