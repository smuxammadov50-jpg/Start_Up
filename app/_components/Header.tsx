"use client";
import { useState } from "react";
import Link from "next/link";

export default function Header() {

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/[0.06] bg-[#060c1a]/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-5 h-16 flex items-center justify-between gap-4">

        {/* LOGO — Murakkab SVG yulduzcha o'rniga ⭐ emojisi */}
        <Link href="/" className="flex items-center gap-2 no-underline shrink-0">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-sm">
            🏦
          </div>
          <span className="text-white font-bold text-lg tracking-tight">UniSearch</span>
        </Link>

       

        {/* RIGHT NAV — O'ng tarafdagi menyular */}
        <div className="flex items-center gap-2 shrink-0">
          <Link
            href="/"
            className="px-4 py-2 rounded-xl text-sm font-medium text-white/60 hover:text-white hover:bg-white/[0.06] transition-all duration-200 no-underline"
          >
            Bosh sahifa
          </Link>
          <Link
            href="/universities"
            className="px-4 py-2 rounded-xl text-sm font-medium text-white/60 hover:text-white hover:bg-white/[0.06] transition-all duration-200 no-underline"
          >
            Universitetlar
          </Link>
          <Link
            href="/favorites"
            className="px-4 py-2 rounded-xl text-sm font-medium text-white/60 hover:text-white hover:bg-white/[0.06] transition-all duration-200 no-underline flex items-center gap-1.5"
          >
            {/* SVG yurakcha o'rniga oq yurak emojisi */}
            <span className="text-xs">❤️</span>
            Saqlanganlar
          </Link>
          <Link href="/login" className="ml-1 px-4 py-2 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 transition-all duration-200 border border-purple-500/40 active:scale-95 no-underline">
  Admin ⚙️
</Link>
        </div>

      </div>
    </header>
  );
}