import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";

export default function GradientAboutMe() {
  return (
    <NeonGradientCard
      className="max-w-[75vw] mx-auto"
      borderSize={5}
      borderRadius={20}
      neonColors={{ firstColor: "#ff2975", secondColor: "#00FFF1" }}
    >
      <p className="text-white font-light text-sm sm:text-base leading-snug sm:leading-relaxed text-center drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]">
        A full-stack developer and curious systems tinkerer. I build elegant
        tools, bend protocols, and solder weird hardware late into the night.
      </p>
      <p className="mt-2 text-white font-light text-sm sm:text-base leading-snug sm:leading-relaxed text-center drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]">
        Passionate about retro tech, CRT TVs, game emulation, and hands-on craft
        like leatherworking. Always exploring the intersection of code,
        hardware, and creativity.
      </p>
    </NeonGradientCard>
  );
}
