"use client";

import { Github, Linkedin, Twitch } from "lucide-react";
import { useState } from "react";

export default function ContactSection() {
  const [copyMessage, setCopyMessage] = useState("");

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText("wesg.dev@proton.me");
      setCopyMessage("Email copied.");
    } catch {
      setCopyMessage("Couldn’t copy automatically. Use the email link instead.");
    }
  }

  return (
    <section
      id="contact"
      className="z-10 mx-auto w-full max-w-xl space-y-5 rounded-3xl border border-white/10 bg-slate-950/40 p-7 text-center backdrop-blur-sm sm:p-8"
    >
      <h2 className="text-xl font-semibold text-white">Want to get in touch?</h2>
      <p className="text-sm leading-relaxed text-slate-300">
        Feel free to say hello, share an idea or just connect.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-4">
        <a
          href="mailto:wesg.dev@proton.me"
          className="rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-950 transition-colors hover:bg-cyan-100"
        >
          Email me
        </a>
        <button
          type="button"
          onClick={copyEmail}
          className="rounded-full border border-white/15 px-4 py-2 text-sm text-slate-200 transition-colors hover:border-cyan-200/60 hover:text-white"
        >
          Copy email
        </button>
      </div>

      <p aria-live="polite" className="min-h-5 text-xs text-cyan-200">
        {copyMessage}
      </p>

      <div className="flex justify-center gap-5 border-t border-white/10 pt-5">
        <a
          href="https://github.com/bigolboyyo"
          aria-label="GitHub"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-300 transition-colors hover:text-white"
        >
          <Github size={20} />
        </a>
        <a
          href="https://twitch.tv/squib_channel"
          aria-label="Twitch"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-300 transition-colors hover:text-white"
        >
          <Twitch size={20} />
        </a>
        <a
          href="https://www.linkedin.com/in/wesley-grant-912789450/"
          aria-label="LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-300 transition-colors hover:text-white"
        >
          <Linkedin size={20} />
        </a>
      </div>
    </section>
  );
}
