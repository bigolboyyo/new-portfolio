import ContactSection from "@/components/custom/ContactSection";
import GradientAboutMe from "@/components/custom/GradientAboutMe";
import { MarqueeSkills } from "@/components/custom/MarqueeSkills";
import TextAnimateCycle from "@/components/custom/TextAnimateCycle";
import { HyperText } from "@/components/magicui/hyper-text";
import { RetroGrid } from "@/components/magicui/retro-grid";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen w-screen px-4 sm:px-8 md:px-12 lg:px-20 py-12 gap-12 font-mono relative">
      <main className="w-full max-w-4xl flex flex-col items-center text-center sm:text-left gap-8 ">
        <Image
          src="/avatar_selfie.webp"
          alt="Portrait"
          width={150}
          height={150}
          className="rounded-4xl border-4 border-pink-400 shadow-[6px_6px_0_#8e7cc3] bg-zinc-950 p-1"
          priority
        />
        <HyperText className="text-4xl sm:text-5xl font-extralight tracking-tight text-white">
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
          className="absolute inset-0"
        />
      </main>
    </div>
  );
}
