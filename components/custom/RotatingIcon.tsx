"use client";

import { useState } from "react";
import { MdOutlineSettings } from "react-icons/md";

export default function RotatingIcon() {
  const [rotated, setRotated] = useState(false);

  return (
    <MdOutlineSettings
      onClick={() => setRotated((r) => !r)}
      className={`text-3xl text-cyan-300 transition-transform duration-300 ${
        rotated ? "rotate-180" : ""
      }`}
    />
  );
}
