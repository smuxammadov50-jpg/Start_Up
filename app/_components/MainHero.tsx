"use client";
import Link from "next/link";
import Header from "./Header";
import Footer from "./Footer";

export default function MainHero() {
  return (
    <div className="bg-[#05070f] text-white min-h-[90vh] relative overflow-hidden flex flex-col justify-center">
      {/* Liquid Blurs */}
      <Header />
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-5%] w-[550px] h-[550px] rounded-full bg-purple-600/10 blur-[130px] animate-liquid" />
        <div className="absolute bottom-[10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-indigo-600/10 blur-[140px]" />
      </div>
      <a className="px-8  flex justify-center w-[320px]  mx-auto  mt-9 py-4 rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 font-bold tracking-wide transition-all duration-300 shadow-xl shadow-purple-600/25 hover:shadow-purple-600/40 hover:-translate-y-1 no-underline text-white">
        UniSerch ga hush kelibsiz
      </a>
      <div className="relative z-10 max-w-5xl mx-auto px-5 text-center py-20">
        <span className="px-4 py-1.5 rounded-full text-xs font-semibold bg-white/[0.03] border border-white/[0.08] text-purple-400 tracking-wider uppercase mb-8 inline-block backdrop-blur-md">
          Universittelar haqida to'liq malumot topishinig mumkin✨
        </span>

        <h1 className="text-5xl sm:text-7xl font-black tracking-tight leading-[1.1] mb-8 bg-gradient-to-b from-white via-slate-200 to-slate-500 bg-clip-text text-transparent">
          O'zingizga Mos Keladigan <br />
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Universitetni
          </span>{" "}
          Shu Yerdan Toping
        </h1>

        <p className="text-base sm:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-12 font-light">
          ||Bu sayt nima uchun||
        </p>
        <p className="text-base  mt-5 sm:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-12 font-light">
          Bu saytda siz o'zingizga mos universitetni topishingiz mumkin.
          Universitetlar haqida to'liq ma'lumot, grantlar, kontrakt narxlari va
          talablar bilan tanishishingiz mumkin. Qolaversa bu saytda o'zingiz
          uchun zamonaviy va minimalizm stilidagi dizayndagi portfolioni ham
          yaratishingiz mumkin.
        </p>

        <div className="flex flex-wrap justify-center gap-5">
          <Link
            href="/universities"
            className="px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 font-bold tracking-wide transition-all duration-300 shadow-xl shadow-purple-600/25 hover:shadow-purple-600/40 hover:-translate-y-1 no-underline text-white"
          >
            Universitetlarni ko'rish →
          </Link>
        </div>
      </div>

      {/* INFRASTRUKTURA VA MA'LUMOTLAR BO'LIMI (UZUN LANDING PAGE EFFEKTI) */}
      <section
        id="features"
        className="max-w-7xl mx-auto px-5 py-20 relative z-10 border-t border-white/[0.04] scroll-mt-16 w-full"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 rounded-3xl bg-white/[0.01] border border-white/[0.05] hover:border-indigo-500/30 transition-all duration-300">
            <div className="text-2xl mb-4">📍</div>
            <h3 className="text-lg font-bold mb-2">Hududga qarab topish</h3>
            <p className="text-slate-400 text-sm font-light leading-relaxed">
              O'zingizga mos bo'lgan hududdagi universitetlarni topish
              imkoniyati. Masalan, Yevropa, Osiyo, Amerika va boshqalar.
            </p>
          </div>
          <div className="p-8 rounded-3xl bg-white/[0.01] border border-white/[0.05] hover:border-purple-500/30 transition-all duration-300">
            <div className="text-2xl mb-4">💰</div>
            <h3 className="text-lg font-bold mb-2">Qulay kontrakt narxlari</h3>
            <p className="text-slate-400 text-sm font-light leading-relaxed">
              Hamyonbop kontraktli universitetlarni topishinigiz mumkin.
              Yevropadan AQShdan Osiyodan.
            </p>
          </div>
          <div className="p-8 rounded-3xl bg-white/[0.01] border border-white/[0.05] hover:border-pink-500/30 transition-all duration-300">
            <div className="text-2xl mb-4">📊</div>
            <h3 className="text-lg font-bold mb-2">Tushunarli tizim</h3>
            <p className="text-slate-400 text-sm font-light leading-relaxed">
              Sodda va tushunarli dizayn , ko'proq malumotlarni o'z ichiga olgan
              web sayt.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
