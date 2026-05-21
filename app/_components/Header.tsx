"use client";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [search, setSearch] = useState("");

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/[0.06] bg-[#060c1a]/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-5 h-16 flex items-center justify-between gap-4">

        {/* LOGO — Murakkab SVG yulduzcha o'rniga ⭐ emojisi */}
        <Link href="/" className="flex items-center gap-2 no-underline shrink-0">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-sm">
            ⭐
          </div>
          <span className="text-white font-bold text-lg tracking-tight">UniSearch</span>
        </Link>

        {/* SEARCH — Markazda joylashgan qidiruv paneli */}
        <div className="flex-1 max-w-xl relative">
          {/* Lupa SVG'si o'rniga oddiy belgi */}
          <span className="absolute left-3 top-1/2 -translate-x-0 -translate-y-1/2 text-base text-white/30 pointer-events-none">
            🔍
          </span>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Universitet qidiring... masalan: Harvard, MIT, Oxford"
            className="w-full bg-white/[0.06] border border-white/[0.10] rounded-2xl pl-9 pr-9 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-indigo-500/60 focus:bg-white/[0.08] transition-all duration-200"
          />
          {/* Input ichini tozalash "X" tugmasi */}
          {search && (
            <button
              onClick={() => setSearch("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-white/40 hover:text-white/80 transition-colors bg-white/10 w-5 h-5 rounded-full flex items-center justify-center active:scale-90"
            >
              ✕
            </button>
          )}
        </div>

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