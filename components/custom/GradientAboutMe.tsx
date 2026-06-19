import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";

export default function GradientAboutMe() {
  return (
    <NeonGradientCard
      className="max-w-[75vw] mx-auto"
      borderSize={5}
      borderRadius={20}
      neonColors={{ firstColor: "#ff2975", secondColor: "#00FFF1" }}
    >
      <p className="text-white font-light text-sm sm:text-base leading-snug sm:leading-relaxed text-center">
        I&apos;m a full-stack developer focused on building clean, reliable applications with an emphasis on simplicity and performance. My career began in infrastructure at AWS, where I worked on both decommissioning and DCO teams, primarily supporting S3 and end-of-life networking initiatives.
      </p>

      <p className="mt-2 text-white font-light text-sm sm:text-base leading-snug sm:leading-relaxed text-center">
        After completing the <a href="https://flatironschool.com/" target="_blank" rel="noopener noreferrer" className="text-cyan-200 decoration-cyan-400/50 hover:text-white transition-colors duration-200">Flatiron School</a> software engineering bootcamp, I shifted my focus to web development and design. These days though, I spend most of my time working with Godot and building my first game.
      </p>

      <p className="mt-2 text-white font-light text-sm sm:text-base leading-snug sm:leading-relaxed text-center">
        I also stream coding and gaming on Twitch, where I share parts of my development process and experiment with interactive ideas. I see AI as a tool for learning and speeding up the boring parts, not replacing the work itself.
      </p>

      <p className="mt-2 text-white font-light text-sm sm:text-base leading-snug sm:leading-relaxed text-center">
        Outside of development, I enjoy creating Renaissance festival outfits, playing Magic: The Gathering, hiking, spending time with friends and occasionally rewatching <em>Vikings</em>.
      </p>
    </NeonGradientCard>
  );
}
