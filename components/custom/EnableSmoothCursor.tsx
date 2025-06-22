"use client";

import { useEffect, useState } from "react";
import { SmoothCursor } from "../ui/smooth-cursor";

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

  return showCursor ? <SmoothCursor /> : null;
}
