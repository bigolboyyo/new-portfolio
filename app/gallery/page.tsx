import Image from "next/image";
import React from "react";

export default function GalleryPage() {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen w-screen px-4 sm:px-8 md:px-12 lg:px-20 py-12 gap-12 font-mono relative">
      <main className="w-full max-w-4xl flex flex-col items-center text-center sm:text-left gap-8 ">
        <Image
          src="/avatar_selfie.webp"
          alt="Portrait"
          width={150}
          height={150}
          className="rounded-4xl border-4 border-pink-400 shadow-[6px_6px_0_#8e7cc3] bg-zinc-950 p-1"
          priority
        />
      </main>
    </div>
  );
}
