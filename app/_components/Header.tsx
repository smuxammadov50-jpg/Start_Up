"use client";
import Link from "next/link";
import { useFavorites } from "../context/FavoritesContext";
import { useEffect, useState } from "react";

export default function Header() {
  const { favorites } = useFavorites();
  const [isMounted, setIsMounted] = useState(false);

  // Komponent brauzerga to'liq o'rnashganini (Hydration tugaganini) bilish uchun
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/[0.06] bg-[#060c1a]/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-5 h-16 flex items-center justify-between">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2 no-underline">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-sm shadow-[0_0_15px_rgba(99,102,241,0.4)]">
            🏦
          </div>
          <span className="text-white font-bold text-lg tracking-tight">UniSearch</span>
        </Link>

        {/* MENYULAR */}
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
            {/* AGAR brauzer to'liq yuklangan bo'lsa haqiqiy sonni ko'rsatadi,
              aks holda (serverda) doim 0 turadi. Urush janjal tugadi!
            */}
            <span className="bg-indigo-500/20 text-indigo-400 text-xs px-2 py-0.5 rounded-md font-bold ml-0.5">
              {isMounted ? favorites.length : 0}
            </span>
          </Link>
        </div>

      </div>
    </header>
  );
}