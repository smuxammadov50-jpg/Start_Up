"use client";
import Link from "next/link";
import { useFavorites } from "../context/FavoritesContext";
import { useEffect, useState } from "react";

export default function Header() {
  const { favorites } = useFavorites();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/[0.06] bg-[#060c1a]/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-5 h-16 flex items-center justify-between">
        
        <Link href="/" className="flex items-center gap-2 no-underline">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-sm shadow-[0_0_15px_rgba(99,102,241,0.4)]">
            🏦
          </div>
          <span className="text-white font-bold text-lg tracking-tight">UniSearch</span>
        </Link>

        <div className="flex items-center gap-2">
          <Link href="/" className="px-4 py-2 rounded-xl text-sm font-medium text-white/60 hover:text-white hover:bg-white/[0.06] transition-all no-underline">
            Bosh sahifa
          </Link>
          <Link href="/universities" className="px-4 py-2 rounded-xl text-sm font-medium text-white/60 hover:text-white hover:bg-white/[0.06] transition-all no-underline">
            Universitetlar
          </Link>
          
          <Link href="/favorites" className="px-4 py-2 rounded-xl text-sm font-medium text-white/60 hover:text-white hover:bg-white/[0.06] transition-all no-underline flex items-center gap-1.5">
            <span>❤️</span>
            Saqlanganlar 
            <span className="bg-indigo-500/20 text-indigo-400 text-xs px-2 py-0.5 rounded-md font-bold ml-0.5">
              {isMounted ? favorites.length : 0}
            </span>
          </Link>

          <Link 
            href="/portfolio" 
            className="px-4 py-2 rounded-xl text-sm font-medium bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 hover:bg-indigo-500/20 transition-all no-underline flex items-center gap-1.5 shadow-[0_0_15px_rgba(99,102,241,0.05)]"
          >
            <span>🌟</span> Portfolio yaratish
          </Link>

          <Link 
            href="/login" 
            className="ml-2 px-4 py-2 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 transition-all duration-200 border border-purple-500/40 active:scale-95 no-underline flex items-center gap-1"
          >
            Admin ⚙️
          </Link>
        </div>

      </div>
    </header>
  );
}