import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] bg-[#060c1a] mt-20">

      {/* top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-5 py-14">
        <div className="grid grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 2L10.5 6H13L10.5 9L11.5 13L8 11L4.5 13L5.5 9L3 6H5.5L8 2Z" fill="white" />
                </svg>
              </div>
              <span className="text-white font-bold text-lg tracking-tight">UniSearch</span>
            </div>
            <p className="text-sm text-white/40 leading-relaxed">
              Orzu qilgan universitetingizga eng qisqa yo'l.
            </p>
            <div className="flex items-center gap-3 mt-5">
              <a href="#" className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-white/50">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-white/50">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z" />
                </svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-white/50">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path fill="#060c1a" d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5a1 1 0 101 1 1 1 0 00-1-1z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links 1 */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest text-white/40 uppercase mb-5">Sahifalar</h4>
            <div className="flex flex-col gap-3">
              <Link href="/" className="text-sm text-white/55 hover:text-white transition-colors no-underline">Bosh sahifa</Link>
              <Link href="/universities" className="text-sm text-white/55 hover:text-white transition-colors no-underline">Barcha universitetlar</Link>
              <Link href="/favorites" className="text-sm text-white/55 hover:text-white transition-colors no-underline">Saqlanganlar</Link>
            </div>
          </div>

          {/* Links 2 */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest text-white/40 uppercase mb-5">Ma'lumot</h4>
            <div className="flex flex-col gap-3">
              <a href="#" className="text-sm text-white/55 hover:text-white transition-colors no-underline">Biz haqimizda</a>
              <a href="#" className="text-sm text-white/55 hover:text-white transition-colors no-underline">Bog'lanish</a>
              <a href="#" className="text-sm text-white/55 hover:text-white transition-colors no-underline">Maxfiylik siyosati</a>
            </div>
          </div>

          {/* Partner */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest text-white/40 uppercase mb-5">Hamkor</h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/[0.07]">
                <div className="w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center text-sm">🎓</div>
                <div>
                  <div className="text-sm font-medium text-white/80">Shift Academy</div>
                  <div className="text-xs text-white/35">Rasmiy hamkor</div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/25 tracking-wide">
            © 2025 UniSearch. Barcha huquqlar himoyalangan.
          </p>
          <p className="text-xs text-white/25">
            Yaratuvchi: <span className="text-white/40 font-medium">Sardor</span> · 📍 Buxoro, O'zbekiston
          </p>
        </div>

      </div>
    </footer>
  );
}