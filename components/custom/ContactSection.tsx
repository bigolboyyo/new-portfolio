"use client";

import { FaGithub, FaTwitch } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function ContactSection() {
  return (
    <section className="w-full max-w-md mx-auto text-center space-y-6 mt-4 z-10">
      <h2 className="text-2xl font-semibold text-white drop-shadow-sm">
        Contact
      </h2>
      <p className="text-sm sm:text-base text-white/80 leading-relaxed">
        Please feel free to reach out if you want to collaborate, chat, swap
        nerdy ideas or hire me.
      </p>

      <div className="flex justify-center gap-6 text-2xl text-white">
        <a
          href="https://github.com/bigolboyyo"
          aria-label="GitHub"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#ff2975] transition-colors"
        >
          <FaGithub />
        </a>

        <a
          href="https://twitch.tv/squib_channel"
          aria-label="Twitch"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#9146FF] transition-colors"
        >
          <FaTwitch />
        </a>

        <a
          href="mailto:wesg.dev@proton.me"
          aria-label="Email"
          className="hover:text-[#00FFF1] transition-colors"
        >
          <HiOutlineMail />
        </a>
      </div>
      <code className="text-sm text-white/70 select-all cursor-text">
        wesg.dev@proton.me
      </code>
      <div className="mt-4">
        <a
          href="/publickey.wesg.dev@proton.me-f9413610a86af12a9e1c896296a973d950be0fb9.asc"
          download
          className="text-xs text-white/60 underline hover:text-white"
        >
          Download PGP Public Key
        </a>
      </div>
    </section>
  );
}
