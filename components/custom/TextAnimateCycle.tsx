"use client";

import { TextAnimate } from "@/components/magicui/text-animate";
import { useEffect, useState, useRef } from "react";

const TITLES = [
  "Full-Stack Developer",
  "API Architect",
  "Homelab Hero",
  "System Tinkerer",
  "Chromebook Liberator",
  "Renaissance Faire Enjoyer",
];

export default function TextAnimateCycle() {
  const [index, setIndex] = useState(0);
  const [cycleCount, setCycleCount] = useState(0);
  // Sort of a planned debounce mechanism to cycle through titles
  const cycleTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (cycleTimeout.current) clearTimeout(cycleTimeout.current);

    cycleTimeout.current = setTimeout(() => {
      setIndex((prev) => {
        const newIndex = (prev + 1) % TITLES.length;
        if (newIndex === 0) setCycleCount((c) => c + 1);
        return newIndex;
      });
    }, 2000);

    return () => {
      if (cycleTimeout.current) clearTimeout(cycleTimeout.current);
    };
  }, [index]);

  return (
    <TextAnimate
      key={`${index}-${cycleCount}`}
      className="
    
      text-[clamp(1.1rem,2.5vw,1.35rem)]
      whitespace-nowrap
      font-semibold
      text-pink-400
      z-99
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
