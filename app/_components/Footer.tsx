import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] bg-[#060c1a]">

      {/* Top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] bg-gradient-to-r from-transparent via-indigo-500/35 to-transparent" />

      <div className="max-w-7xl mx-auto px-7 py-[10px] flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-[22px] h-[22px] rounded-md bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-[11px]">
            🏛
          </div>
          <span className="text-white font-bold text-sm">UniSearch</span>
        </div>

        {/* Copyright */}
        <p className="text-xs text-white/20">
          © 2026 UniSearch. Barcha huquqlar himoyalangan.
        </p>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* Partner */}
          <div className="flex items-center gap-1.5 px-2 py-1 rounded-[5px] bg-white/[0.03] border border-white/[0.07]">
            <span className="text-xs">🎓</span>
            <span className="text-xs text-white/30">Shift Academy · Rasmiy hamkor</span>
          </div>

          {/* Creator */}
          <p className="text-xs text-white/20">
            Yaratuvchi: <span className="text-white/35 font-medium">Sardor</span> · Buxoro
          </p>
        </div>

      </div>
    </footer>
  );
}