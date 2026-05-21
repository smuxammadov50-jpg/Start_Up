import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] bg-[#060c1a] mt-20">

      {/* Tepadagi nur effekti (Top glow) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-5 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand (Logotip va qisqacha matn) */}
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
              {/* Logotip: SVG path o'rniga oddiy yulduzcha emojisi qo'yildi */}
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-sm">
                ⭐
              </div>
              <span className="text-white font-bold text-lg tracking-tight">UniSearch</span>
            </div>
            <p className="text-sm text-white/40 leading-relaxed">
              Orzu qilgan universitetingizga eng qisqa yo'l.
            </p>
            
            {/* Ijtimoiy tarmoqlar tugmalari - Faqat className va matn orqali */}
            <div className="flex items-center gap-3 mt-5">
              <a href="#" className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-xs font-bold text-white/55 hover:text-white hover:bg-white/10 transition-all no-underline">
                X
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-xs font-bold text-white/55 hover:text-white hover:bg-white/10 transition-all no-underline">
                In
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-xs font-bold text-white/55 hover:text-white hover:bg-white/10 transition-all no-underline">
                Ig
              </a>
            </div>
          </div>

          {/* Links 1 (Sahifalar) */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest text-white/40 uppercase mb-5">Sahifalar</h4>
            <div className="flex flex-col gap-3">
              <Link href="/" className="text-sm text-white/55 hover:text-white transition-colors no-underline">Bosh sahifa</Link>
              <Link href="/universities" className="text-sm text-white/55 hover:text-white transition-colors no-underline">Barcha universitetlar</Link>
              <Link href="/favorites" className="text-sm text-white/55 hover:text-white transition-colors no-underline">Saqlanganlar</Link>
            </div>
          </div>

          {/* Links 2 (Ma'lumotlar) */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest text-white/40 uppercase mb-5">Ma'lumot</h4>
            <div className="flex flex-col gap-3">
              <a href="#" className="text-sm text-white/55 hover:text-white transition-colors no-underline">Biz haqimizda</a>
              <a href="#" className="text-sm text-white/55 hover:text-white transition-colors no-underline">Bog'lanish</a>
              <a href="#" className="text-sm text-white/55 hover:text-white transition-colors no-underline">Maxfiylik siyosati</a>
            </div>
          </div>

          {/* Partner (Hamkorlar bo'limi) */}
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

        {/* Bottom bar (Mualliflik huquqlari va Sardor aka haqida) */}
        <div className="pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/25 tracking-wide">
            © 2026 UniSearch. Barcha huquqlar himoyalangan.
          </p>
          <p className="text-xs text-white/25">
            Yaratuvchi: <span className="text-white/40 font-medium">Sardor</span> · 📍 Buxoro, O'zbekiston
          </p>
        </div>

      </div>
    </footer>
  );
}