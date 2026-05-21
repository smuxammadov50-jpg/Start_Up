"use client";

export default function ViewUniversity() {
  return (
    <div className="min-h-screen bg-[#060c1a] text-white select-none">
      {/* Orbs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-200px] left-[-100px] w-[500px] h-[500px] rounded-full opacity-20 bg-indigo-600 blur-[120px]" />
        <div className="absolute top-[300px] right-[-100px] w-[400px] h-[400px] rounded-full opacity-15 bg-purple-600 blur-[120px]" />
        <div className="absolute bottom-[-100px] left-[40%] w-[400px] h-[300px] rounded-full opacity-10 bg-blue-600 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-5 py-10">
        {/* BACK BUTTON */}
        <div className="mb-6">
          <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white/60 text-sm font-medium hover:bg-white/10 hover:text-white/90 transition-all duration-200 cursor-pointer">
            {/* Sof Tailwind CSS dagi strelka */}
            <span className="w-2 h-2 border-b-2 border-l-2 border-currentColor rotate-45 inline-block -mr-0.5" />
            Orqaga qaytish
          </button>
        </div>

        {/* HERO */}
        <div className="relative rounded-[32px] overflow-hidden mb-10">
          <img
            src="https://images.unsplash.com/photo-1580582932707-520aed937b7b"
            alt="Harvard University"
            className="w-full h-[380px] object-cover brightness-[0.35]"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/35 via-purple-600/10 to-[#060c1a]/80" />

          <div className="absolute inset-0 p-10 flex flex-col justify-end">
            <div className="flex items-end justify-between flex-wrap gap-4">
              <div>
                <div className="flex items-center gap-3 mb-4 flex-wrap">
                  <span className="px-4 py-1.5 rounded-full text-xs font-medium bg-indigo-500/25 border border-indigo-400/40 text-indigo-300">
                    📍 Cambridge, Massachusetts, USA
                  </span>
                  <span className="px-4 py-1.5 rounded-full text-xs font-medium bg-green-500/20 border border-green-400/35 text-green-300">
                    ✓ Ariza qabul qilinmoqda
                  </span>
                </div>
                <h1 className="text-6xl font-bold leading-tight tracking-tight text-white">
                  Harvard
                  <br />
                  <span className="text-indigo-300">University</span>
                </h1>
                <p className="mt-3 text-sm tracking-wide text-white/50">
                  1636-yilda tashkil etilgan · Xususiy tadqiqot universiteti ·
                  AQSh
                </p>
              </div>
              <div className="text-right">
                <div className="text-5xl font-bold text-indigo-300">$54K</div>
                <div className="text-xs tracking-wide uppercase mt-1 text-white/40">
                  Yillik o'qish narxi
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* STAT CARDS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          <div className="rounded-2xl p-5 bg-white/5 border border-white/10 hover:bg-white/8 transition-colors duration-300">
            <div className="text-2xl mb-3">🏆</div>
            <div className="text-2xl font-bold text-indigo-100">#4</div>
            <div className="text-sm mt-1 font-medium text-white/70">
              Dunyo reytingi
            </div>
            <div className="text-xs mt-1 text-white/35">
              QS World University Rankings — eng obro'li xalqaro reytingda
            </div>
          </div>
          <div className="rounded-2xl p-5 bg-white/5 border border-white/10 hover:bg-white/8 transition-colors duration-300">
            <div className="text-2xl mb-3">🎖️</div>
            <div className="text-2xl font-bold text-indigo-100">#2</div>
            <div className="text-sm mt-1 font-medium text-white/70">
              THE reytingi
            </div>
            <div className="text-xs mt-1 text-white/35">
              Times Higher Education — ilmiy tadqiqotlar bo'yicha 2-o'rin
            </div>
          </div>
          <div className="rounded-2xl p-5 bg-white/5 border border-white/10 hover:bg-white/8 transition-colors duration-300">
            <div className="text-2xl mb-3">🎯</div>
            <div className="text-2xl font-bold text-indigo-100">4%</div>
            <div className="text-sm mt-1 font-medium text-white/70">
              Qabul foizi
            </div>
            <div className="text-xs mt-1 text-white/35">
              100 ariza bersangiz atigi 4 kishi qabul qilinadi
            </div>
          </div>
          <div className="rounded-2xl p-5 bg-white/5 border border-white/10 hover:bg-white/8 transition-colors duration-300">
            <div className="text-2xl mb-3">💼</div>
            <div className="text-2xl font-bold text-indigo-100">95%</div>
            <div className="text-sm mt-1 font-medium text-white/70">
              Ish topish
            </div>
            <div className="text-xs mt-1 text-white/35">
              Bitiruvchilarning 95% i 6 oy ichida ish topadi
            </div>
          </div>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* LEFT */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* Academic */}
            <div className="rounded-2xl bg-white/[0.03] border border-white/[0.07] hover:border-white/[0.12] transition-colors duration-300">
              <div className="px-6 py-6">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/[0.06]">
                  <div className="w-8 h-8 rounded-xl bg-indigo-500/20 flex items-center justify-center text-base">
                    🎓
                  </div>
                  <div>
                    <h2 className="text-sm font-semibold text-white/80">
                      Ta'lim dasturlari
                    </h2>
                    <p className="text-xs text-white/35">
                      Universitetda mavjud yo'nalishlar
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5">
                  <div>
                    <div className="text-xs text-white/35 mb-1">
                      Diplom turlari
                    </div>
                    <div className="text-sm font-medium text-indigo-200">
                      Bakalavr · Magistr · Doktoratura
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-white/35 mb-1">
                      O'qish muddati
                    </div>
                    <div className="text-sm font-medium text-white/75">
                      Bakalavr — 4 yil
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-white/35 mb-1">
                      Eng mashhur yo'nalishlar
                    </div>
                    <div className="text-sm font-medium text-indigo-200">
                      Informatika · Huquq · Biznes · Tibbiyot
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-white/35 mb-1">
                      O'qitish tili
                    </div>
                    <div className="text-sm font-medium text-white/75">
                      Ingliz tili
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-white/35 mb-1">
                      Jami talabalar soni
                    </div>
                    <div className="text-sm font-medium text-indigo-200">
                      23,000+ nafar
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-white/35 mb-1">
                      O'qituvchilar soni
                    </div>
                    <div className="text-sm font-medium text-white/75">
                      2,400+ professor
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Admission */}
            <div className="rounded-2xl bg-white/[0.03] border border-white/[0.07] hover:border-white/[0.12] transition-colors duration-300">
              <div className="px-6 py-6">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/[0.06]">
                  <div className="w-8 h-8 rounded-xl bg-purple-500/20 flex items-center justify-center text-base">
                    📋
                  </div>
                  <div>
                    <h2 className="text-sm font-semibold text-white/80">
                      Qabul talablari
                    </h2>
                    <p className="text-xs text-white/35">
                      Ariza topshirish uchun minimal ball va hujjatlar
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3 mb-3">
                  <div className="rounded-xl p-4 text-center bg-white/[0.04] border border-white/[0.07]">
                    <div className="text-xl font-bold text-indigo-400">
                      7.5+
                    </div>
                    <div className="text-xs mt-1 font-medium text-white/60">
                      IELTS
                    </div>
                    <div className="text-[10px] mt-1 text-white/30">
                      Ingliz tili sertifikati
                    </div>
                  </div>
                  <div className="rounded-xl p-4 text-center bg-white/[0.04] border border-white/[0.07]">
                    <div className="text-xl font-bold text-violet-400">
                      100+
                    </div>
                    <div className="text-xs mt-1 font-medium text-white/60">
                      TOEFL
                    </div>
                    <div className="text-[10px] mt-1 text-white/30">
                      Ingliz tili sertifikati
                    </div>
                  </div>
                  <div className="rounded-xl p-4 text-center bg-white/[0.04] border border-white/[0.07]">
                    <div className="text-xl font-bold text-purple-400">
                      1500+
                    </div>
                    <div className="text-xs mt-1 font-medium text-white/60">
                      SAT
                    </div>
                    <div className="text-[10px] mt-1 text-white/30">
                      Umumiy bilim testi
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <div className="rounded-xl p-4 text-center bg-white/[0.04] border border-white/[0.07]">
                    <div className="text-xl font-bold text-emerald-400">
                      3.8+
                    </div>
                    <div className="text-xs mt-1 font-medium text-white/60">
                      GPA
                    </div>
                    <div className="text-[10px] mt-1 text-white/30">
                      O'rtacha baho (4.0 dan)
                    </div>
                  </div>
                  <div className="rounded-xl p-4 text-center bg-white/[0.04] border border-white/[0.07]">
                    <div className="text-xl font-bold text-blue-400">
                      60,000+
                    </div>
                    <div className="text-xs mt-1 font-medium text-white/60">
                      Ariza
                    </div>
                    <div className="text-[10px] mt-1 text-white/30">
                      Har yili keladigan arizalar
                    </div>
                  </div>
                  <div className="rounded-xl p-4 text-center bg-white/[0.04] border border-white/[0.07]">
                    <div className="text-xl font-bold text-pink-400">
                      ~2,000
                    </div>
                    <div className="text-xs mt-1 font-medium text-white/60">
                      Qabul
                    </div>
                    <div className="text-[10px] mt-1 text-white/30">
                      Qabul qilinganlar soni
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="rounded-2xl bg-white/[0.03] border border-white/[0.07] hover:border-white/[0.12] transition-colors duration-300">
              <div className="px-6 py-6">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/[0.06]">
                  <div className="w-8 h-8 rounded-xl bg-blue-500/20 flex items-center justify-center text-base">
                    📅
                  </div>
                  <div>
                    <h2 className="text-sm font-semibold text-white/80">
                      Ariza topshirish muddatlari
                    </h2>
                    <p className="text-xs text-white/35">
                      2026–2027 o'quv yili uchun
                    </p>
                  </div>
                </div>
                <div className="relative pl-7 border-l border-indigo-500/30">
                  <div className="relative mb-6">
                    <div className="absolute w-3 h-3 rounded-full bg-indigo-500 border-2 border-[#060c1a] left-[-1.6rem] top-[0.15rem]" />
                    <div className="text-xs font-semibold text-indigo-400 tracking-wide">
                      Sentabr 2026
                    </div>
                    <div className="text-sm font-medium text-white/80 mt-0.5">
                      Arizalar qabuli boshlanadi
                    </div>
                    <div className="text-xs text-white/35 mt-1">
                      Hujjatlarni tayyorlashni boshlang
                    </div>
                  </div>
                  <div className="relative mb-6">
                    <div className="absolute w-3 h-3 rounded-full bg-indigo-500 border-2 border-[#060c1a] left-[-1.6rem] top-[0.15rem]" />
                    <div className="text-xs font-semibold text-indigo-400 tracking-wide">
                      1 Noyabr 2026
                    </div>
                    <div className="text-sm font-medium text-white/80 mt-0.5">
                      Erta ariza muddati (Early Action)
                    </div>
                    <div className="text-xs text-white/35 mt-1">
                      Erta topshirsangiz, javobni Dekabr oyida olasiz
                    </div>
                  </div>
                  <div className="relative mb-6">
                    <div className="absolute w-3 h-3 rounded-full bg-indigo-500 border-2 border-[#060c1a] left-[-1.6rem] top-[0.15rem]" />
                    <div className="text-xs font-semibold text-indigo-400 tracking-wide">
                      1 Yanvar 2027
                    </div>
                    <div className="text-sm font-medium text-white/80 mt-0.5">
                      Oddiy ariza muddati (Regular Decision)
                    </div>
                    <div className="text-xs text-white/35 mt-1">
                      Asosiy qabul muddati — oxirgi sana
                    </div>
                  </div>
                  <div className="relative">
                    <div className="absolute w-3 h-3 rounded-full bg-emerald-500 border-2 border-[#060c1a] left-[-1.6rem] top-[0.15rem]" />
                    <div className="text-xs font-semibold text-emerald-400 tracking-wide">
                      Aprel 2027
                    </div>
                    <div className="text-sm font-medium text-white/80 mt-0.5">
                      Qabul natijalari e'lon qilinadi
                    </div>
                    <div className="text-xs text-white/35 mt-1">
                      Qabul qilinganlar ro'yxati chiqadi
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="flex flex-col gap-6">
            {/* Scholarship */}
            <div className="rounded-2xl p-6 relative overflow-hidden bg-gradient-to-br from-indigo-950/80 to-purple-950/60 border border-indigo-500/30">
              <div className="absolute top-[-40px] right-[-40px] w-32 h-32 rounded-full bg-indigo-500/10 blur-2xl" />
              <div className="text-2xl mb-3">💰</div>
              <div className="text-sm font-medium text-indigo-300">
                Moliyaviy yordam
              </div>
              <div className="text-4xl font-bold mt-1 text-white">100%</div>
              <p className="text-xs mt-2 text-white/40 leading-relaxed">
                To'liq grant mavjud — oilangizning daromadiga qarab o'qish
                pulini to'liq qoplaydi
              </p>
              <div className="mt-4 pt-4 border-t border-white/10 flex flex-col gap-2.5">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-white/45">
                    Ehtiyojga asoslangan grant
                  </span>
                  <span className="text-green-400 font-medium">✓ Bor</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-white/45">
                    Yutuqlarga asoslangan grant
                  </span>
                  <span className="text-green-400 font-medium">✓ Bor</span>
                </div>
              </div>
            </div>

            {/* Apply */}
            <div className="rounded-2xl bg-white/[0.03] border border-white/[0.07] hover:border-white/[0.12] transition-colors duration-300">
              <div className="px-6 py-6">
                <div className="flex items-center gap-3 mb-5 pb-3 border-b border-white/[0.06]">
                  <div className="w-7 h-7 rounded-lg bg-green-500/20 flex items-center justify-center text-sm">
                    📝
                  </div>
                  <h2 className="text-xs font-semibold tracking-widest text-white/50">
                    ARIZA TOPSHIRISH
                  </h2>
                </div>
                <div className="flex flex-col gap-4">
                  <div>
                    <div className="text-xs text-white/35 mb-1">
                      So'nggi muddat
                    </div>
                    <div className="text-sm font-medium text-indigo-200">
                      1 Yanvar 2027
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-white/35 mb-1">
                      Ariza to'lovi
                    </div>
                    <div className="text-sm font-medium text-white/75">
                      $75 (bir martalik)
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-white/35 mb-1">Platforma</div>
                    <div className="text-sm font-medium text-indigo-200">
                      Common App orqali
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-white/35 mb-1">
                      To'lov imtiyozi
                    </div>
                    <div className="text-sm font-medium text-white/75">
                      Kam ta'minlanganlarga bepul
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Campus */}
            <div className="rounded-2xl bg-white/[0.03] border border-white/[0.07] hover:border-white/[0.12] transition-colors duration-300">
              <div className="px-6 py-6">
                <div className="flex items-center gap-3 mb-5 pb-3 border-b border-white/[0.06]">
                  <div className="w-7 h-7 rounded-lg bg-blue-500/20 flex items-center justify-center text-sm">
                    🏛️
                  </div>
                  <h2 className="text-xs font-semibold tracking-widest text-white/50">
                    KAMPUS HAYOTI
                  </h2>
                </div>
                <div className="flex flex-col gap-4">
                  <div>
                    <div className="text-xs text-white/35 mb-1">
                      Kampus joylashuvi
                    </div>
                    <div className="text-sm font-medium text-indigo-200">
                      Shahar markazida (Urban)
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-white/35 mb-1">Yotoqxona</div>
                    <div className="text-sm font-medium text-white/75">
                      1-kurs talabalariga kafolatlangan
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-white/35 mb-1">
                      Yashash xarajati
                    </div>
                    <div className="text-sm font-medium text-indigo-200">
                      Yiliga ~$20,000
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-white/35 mb-1">
                      Chet ellik talabalar
                    </div>
                    <div className="text-sm font-medium text-white/75">
                      25% — 160+ mamlakatdan
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Career */}
            <div className="rounded-2xl bg-white/[0.03] border border-white/[0.07] hover:border-white/[0.12] transition-colors duration-300">
              <div className="px-6 py-6">
                <div className="flex items-center gap-3 mb-5 pb-3 border-b border-white/[0.06]">
                  <div className="w-7 h-7 rounded-lg bg-emerald-500/20 flex items-center justify-center text-sm">
                    📈
                  </div>
                  <h2 className="text-xs font-semibold tracking-widest text-white/50">
                    KARYERA
                  </h2>
                </div>
                <div className="text-center py-3">
                  <div className="text-3xl font-bold text-emerald-400">
                    $80,000+
                  </div>
                  <div className="text-xs mt-1.5 text-white/35">
                    Birinchi yildagi o'rtacha yillik maosh
                  </div>
                  <div className="mt-4 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                    <span className="text-emerald-400 font-bold text-lg">
                      95%
                    </span>
                    <div className="text-xs text-white/45 mt-0.5">
                      bitiruvchi 6 oy ichida ish topadi
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://www.harvard.edu"
            target="_blank"
            rel="noreferrer"
            className="px-10 py-4 rounded-2xl font-semibold text-base text-white no-underline bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 transition-all duration-300 border border-purple-500/40"
          >
            Rasmiy saytga o'tish →
          </a>
          <button className="px-10 py-4 rounded-2xl font-semibold text-base text-white/60 bg-white/5 border border-white/10 hover:bg-white/8 hover:text-white/80 transition-all duration-300 cursor-pointer">
            Saqlash ♡
          </button>
        </div>

        <p className="text-center text-xs mt-10 tracking-widest uppercase text-white/15">
          UniSearch · Shift
        </p>
      </div>
    </div>
  );
}