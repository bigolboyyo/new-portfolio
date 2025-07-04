import { CultBlob } from "@/components/custom/CultBlob";
import Image from "next/image";
import React from "react";

export default function GalleryPage() {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen w-screen px-4 sm:px-8 md:px-12 lg:px-20 py-12 gap-12 font-mono relative">
      <main className="w-full max-w-4xl flex flex-col items-center text-center sm:text-left gap-8 ">
        <CultBlob />
      </main>
    </div>
  );
}
