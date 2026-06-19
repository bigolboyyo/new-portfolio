"use client";

import { TextAnimate } from "@/components/magicui/text-animate";
import { useEffect, useState, useRef } from "react";

const TITLES = [
  "Full-Stack Developer",
  "Former AWS Data Technician",
  "Indie Game Developer",
  "Twitch Streamer",
  "Open Source Enthusiast"
];

export default function TextAnimateCycle() {
  const [index, setIndex] = useState(0);
  const debounceTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (debounceTimeout.current) clearTimeout(debounceTimeout.current);

    debounceTimeout.current = setTimeout(() => {
      setIndex((prev) => (prev + 1) % TITLES.length);
    }, 3000);

    return () => {
      if (debounceTimeout.current) clearTimeout(debounceTimeout.current);
    };
  }, [index]);

  return (
    <TextAnimate
      key={index}
      className="text-[clamp(1.1rem,2.5vw,1.35rem)] whitespace-nowrap text-neon-outline z-100"
    >
      {TITLES[index]}
    </TextAnimate>
  );
}
