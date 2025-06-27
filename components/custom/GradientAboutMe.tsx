import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";
import { LiaLinux } from "react-icons/lia";
import { AuroraText } from "../magicui/aurora-text";
import Link from "next/link";

export default function GradientAboutMe() {
  return (
    <NeonGradientCard
      className="max-w-[75vw] mx-auto"
      borderSize={5}
      borderRadius={20}
      neonColors={{ firstColor: "#ff2975", secondColor: "#00FFF1" }}
    >
      <p className="text-white font-light text-sm sm:text-base leading-snug sm:leading-relaxed text-center drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]">
        When I'm not coding, I'm usually merrily tinkering away in my homelab. I
        have a strange fondness for old chromebooks and CRT TVs. My strengths
        lie in Node.js, modern web dev (JS/TS) and Linux. I enjoy long walks on
        the beach.
      </p>
      <p className="mt-6 text-white font-light text-sm sm:text-base leading-snug sm:leading-relaxed text-center drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]">
        <AuroraText colors={["#00FF00", "#66FF66", "#33CC33", "#009900"]}>
          {" "}
          I love Linux{" "}
        </AuroraText>
        {
          <Link
            href="https://www.kernel.org/doc/html/latest/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LiaLinux className="text-4xl inline text-[#00FF00] ml-2 mb-1" />
          </Link>
        }
      </p>
      <p className="text-white font-light text-sm sm:text-base leading-snug sm:leading-relaxed text-center drop-shadow-[0_0_8px_rgba(255,255,255,0.6)] mt-6">
        I have two cats. I&rsquo;m a frequent visitor of Renaissance Festivals.
        Fond believer in cheese of all varieties. I can build it, break it and
        build it again. I can dodge a wrench and a ball. Behind the playfulness,
        I&rsquo;m deeply committed to growth and mastery.
      </p>
    </NeonGradientCard>
  );
}
