"use client";

import { TextAnimate } from "@/components/magicui/text-animate";
import { useEffect, useState, useRef } from "react";

const TITLES = [
  "Web Developer",
  "Data Technician",
  "Creative Technologist",
  "Linux Lunatic",
  "Infrastructure Gremlin",
];

export default function TextAnimateCycle() {
  const [index, setIndex] = useState(0);
  const debounceTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (debounceTimeout.current) clearTimeout(debounceTimeout.current);

    debounceTimeout.current = setTimeout(() => {
      setIndex((prev) => (prev + 1) % TITLES.length);
    }, 2000);

    return () => {
      if (debounceTimeout.current) clearTimeout(debounceTimeout.current);
    };
  }, [index]);

  return (
    <TextAnimate
      key={index}
      className="
      text-[clamp(1.1rem,2.5vw,1.35rem)]
      whitespace-nowrap
      font-semibold
      text-pink-400
      z-100
      [text-shadow:
        0 0 2px rgba(209,107,165,0.7),
        0 0 5px rgba(209,107,165,0.5),
        0 0 8px rgba(209,107,165,0.3),
        1px 1px 0 rgba(0,0,0,0.5)
      ]
    "
    >
      {TITLES[index]}
    </TextAnimate>
  );
}
