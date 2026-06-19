"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const DynamicSmoothCursor = dynamic(
  () => import("../ui/smooth-cursor").then((mod) => mod.SmoothCursor),
  { ssr: false }
);

export default function EnableSmoothCursor() {
  const [showCursor, setShowCursor] = useState(false);

  useEffect(() => {
    const handleFirstMouseMove = () => {
      setShowCursor(true);
      window.removeEventListener("mousemove", handleFirstMouseMove);
    };

    const isTouchOnly =
      "ontouchstart" in window &&
      navigator.maxTouchPoints > 0 &&
      !window.matchMedia("(hover: hover)").matches;

    if (!isTouchOnly) {
      window.addEventListener("mousemove", handleFirstMouseMove);
    }

    return () => {
      window.removeEventListener("mousemove", handleFirstMouseMove);
    };
  }, []);

  return showCursor ? <DynamicSmoothCursor /> : null;
}
