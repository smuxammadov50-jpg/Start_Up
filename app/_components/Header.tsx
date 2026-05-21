"use client";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [search, setSearch] = useState("");

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/[0.06] bg-[#060c1a]/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-5 h-16 flex items-center justify-between gap-4">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2 no-underline shrink-0">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 2L10.5 6H13L10.5 9L11.5 13L8 11L4.5 13L5.5 9L3 6H5.5L8 2Z" fill="white" />
            </svg>
          </div>
          <span className="text-white font-bold text-lg tracking-tight">UniSearch</span>
        </Link>

        {/* SEARCH — markazda */}
        <div className="flex-1 max-w-xl relative">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="7" cy="7" r="4.5" stroke="currentColor" strokeWidth="1.5" />
              <path d="M10.5 10.5L13.5 13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Universitet qidiring... masalan: Harvard, MIT, Oxford"
            className="w-full bg-white/[0.06] border border-white/[0.10] rounded-2xl pl-9 pr-4 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-indigo-500/60 focus:bg-white/[0.08] transition-all duration-200"
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60 transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M3 3L11 11M11 3L3 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          )}
        </div>

        {/* RIGHT NAV */}
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
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
              <path d="M7.5 12.5C7.5 12.5 2 8.5 2 5C2 3.343 3.343 2 5 2C6.074 2 7 2.598 7.5 3.5C8 2.598 8.926 2 10 2C11.657 2 13 3.343 13 5C13 8.5 7.5 12.5 7.5 12.5Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
            </svg>
            Saqlanganlar
          </Link>
          <button className="ml-1 px-4 py-2 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 transition-all duration-200 border border-purple-500/40">
            Kirish
          </button>
        </div>

      </div>
    </header>
  );
}