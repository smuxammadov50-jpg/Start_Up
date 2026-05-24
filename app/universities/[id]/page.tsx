"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";
import { ImSpinner3 } from "react-icons/im";
import Link from "next/link";

interface UniversityDetails {
  id: string;
  name: string;
  slug: string;
  city: string;
  region: string;
  isAccepting: string;
  foundedYear: string;
  type: string;
  tuition: string;
  rankQS: string;
  rankTHE: string;
  acceptanceRate: string;
  employmentRate: string;
  degreeTypes: string;
  duration: string;
  language: string;
  popularMajors: string;
  totalStudents: string;
  totalTeachers: string;
  grantPercentage: string;
  needBasedGrant: string;
  meritBasedGrant: string;
  minIELTS: string;
  minTOEFL: string;
  minSAT: string;
  minGPA: string;
  annualApps: string;
  annualEnroll: string;
  appFee: string;
  platform: string;
  locationType: string;
  dormitory: string;
  livingCost: string;
  intlStudents: string;
  deadline1: string;
  deadline2: string;
  deadline3?: string;
  resultDate: string;
  avgSalary: string;
  website: string;
  image: string;
}

export default function ViewUniversity() {
  const { id } = useParams();
  const router = useRouter();
  const [university, setUniversity] = useState<UniversityDetails | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      // Dynamic ID va Port 4000 orqali chaqirish
      axios
        .get(`http://localhost:4000/universities/${id}`)
        .then((res) => {
          setUniversity(res.data);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Tafsilotlarni yuklashda xatolik:", err);
          setLoading(false);
        });
    }
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#060c1a] flex items-center justify-center text-indigo-400">
        <ImSpinner3 className="animate-spin text-5xl" />
      </div>
    );
  }

  if (!university) {
    return (
      <div className="min-h-screen bg-[#060c1a] text-white flex flex-col items-center justify-center gap-4">
        <p className="text-white/40">Universitet topilmadi.</p>
        <Link href={"/universities/"} >
        
        <button  className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-xs">
          Orqaga qaytish
        </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#060c1a] text-white select-none">
      {/* Background Orbs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-200px] left-[-100px] w-[500px] h-[500px] rounded-full opacity-20 bg-indigo-600 blur-[120px]" />
        <div className="absolute top-[300px] right-[-100px] w-[400px] h-[400px] rounded-full opacity-15 bg-purple-600 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-5 py-10">
        {/* ORQAGA QAYTISH TUGMASI */}
        <div className="mb-6">
          <button 
            onClick={() => router.back()}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white/60 text-xs font-medium hover:bg-white/10 hover:text-white/90 transition-all duration-200 cursor-pointer"
          >
            ‹ Orqaga qaytish
          </button>
        </div>

        {/* HERO BANNER */}
        <div className="relative rounded-[32px] overflow-hidden mb-10 border border-white/[0.05]">
          <img
            src={university.image}
            alt={university.name}
            className="w-full h-[380px] object-cover brightness-[0.35]"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 via-transparent to-[#060c1a]/90" />

          <div className="absolute inset-0 p-10 flex flex-col justify-end">
            <div className="flex items-end justify-between flex-wrap gap-4">
              <div>
                <div className="flex items-center gap-3 mb-4 flex-wrap">
                  <span className="px-4 py-1.5 rounded-full text-xs font-medium bg-indigo-500/25 border border-indigo-400/40 text-indigo-300">
                    📍 {university.city}
                  </span>
                  <span className={`px-4 py-1.5 rounded-full text-xs font-medium border ${
                    university.isAccepting === "true" 
                      ? "bg-green-500/20 border-green-400/35 text-green-300" 
                      : "bg-red-500/20 border-red-400/35 text-red-300"
                  }`}>
                    {university.isAccepting === "true" ? "✓ Ariza qabul qilinmoqda" : "✕ Qabul yopilgan"}
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight text-white">
                  {university.name}
                </h1>
                <p className="mt-3 text-sm tracking-wide text-white/50">
                  {university.foundedYear}-yilda tashkil etilgan · {university.type} Universiteti · {university.region}
                </p>
              </div>
              <div className="text-right">
                <div className="text-4xl font-bold text-indigo-300">{university.tuition}</div>
                <div className="text-[10px] tracking-widest uppercase mt-1 text-white/40">
                  YILLIK O'QISH NARXI
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 TA ASOSIY REYTING CARDLAR */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          <div className="rounded-2xl p-5 bg-white/5 border border-white/10">
            <div className="text-xl mb-2">🏆</div>
            <div className="text-2xl font-bold text-indigo-100">#{university.rankQS}</div>
            <div className="text-sm font-medium text-white/70">Dunyo reytingi</div>
            <div className="text-xs mt-1 text-white/35">QS World University Rankings — eng obro'li xalqaro reytingda</div>
          </div>
          <div className="rounded-2xl p-5 bg-white/5 border border-white/10">
            <div className="text-xl mb-2">🎖️</div>
            <div className="text-2xl font-bold text-indigo-100">#{university.rankTHE}</div>
            <div className="text-sm font-medium text-white/70">THE reytingi</div>
            <div className="text-xs mt-1 text-white/35">Times Higher Education — ilmiy tadqiqotlar bo'yicha o'rni</div>
          </div>
          <div className="rounded-2xl p-5 bg-white/5 border border-white/10">
            <div className="text-xl mb-2">🎯</div>
            <div className="text-2xl font-bold text-indigo-100">{university.acceptanceRate}%</div>
            <div className="text-sm font-medium text-white/70">Qabul foizi</div>
            <div className="text-xs mt-1 text-white/35">100 ariza bersangiz atigi o'rtacha shuncha kishi qabul qilinadi</div>
          </div>
          <div className="rounded-2xl p-5 bg-white/5 border border-white/10">
            <div className="text-xl mb-2">💼</div>
            <div className="text-2xl font-bold text-indigo-100">{university.employmentRate}%</div>
            <div className="text-sm font-medium text-white/70">Ish topish</div>
            <div className="text-xs mt-1 text-white/35">Bitiruvchilarning ma'lum foizi 6 oy ichida ish topadi</div>
          </div>
        </div>

        {/* MA'LUMOTLAR SETI (GRID) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* CHAP USTUN */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* Ta'lim dasturlari */}
            <div className="rounded-2xl bg-white/[0.03] border border-white/[0.07] p-6">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/[0.06]">
                <div className="w-8 h-8 rounded-xl bg-indigo-500/20 flex items-center justify-center text-base">🎓</div>
                <div>
                  <h2 className="text-sm font-semibold text-white/80">Ta'lim dasturlari</h2>
                  <p className="text-xs text-white/35">Universitetda mavjud yo'nalishlar</p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5">
                <div>
                  <div className="text-xs text-white/35 mb-1">Diplom turlari</div>
                  <div className="text-sm font-medium text-indigo-200">{university.degreeTypes}</div>
                </div>
                <div>
                  <div className="text-xs text-white/35 mb-1">O'qish muddati</div>
                  <div className="text-sm font-medium text-white/75">{university.duration}</div>
                </div>
                <div>
                  <div className="text-xs text-white/35 mb-1">Eng mashhur yo'nalishlar</div>
                  <div className="text-sm font-medium text-indigo-200">{university.popularMajors}</div>
                </div>
                <div>
                  <div className="text-xs text-white/35 mb-1">O'qitish tili</div>
                  <div className="text-sm font-medium text-white/75">{university.language}</div>
                </div>
                <div>
                  <div className="text-xs text-white/35 mb-1">Jami talabalar soni</div>
                  <div className="text-sm font-medium text-indigo-200">{university.totalStudents} nafar</div>
                </div>
                <div>
                  <div className="text-xs text-white/35 mb-1">O'qituvchilar soni</div>
                  <div className="text-sm font-medium text-white/75">{university.totalTeachers}++ professor</div>
                </div>
              </div>
            </div>

            {/* Qabul talablari */}
            <div className="rounded-2xl bg-white/[0.03] border border-white/[0.07] p-6">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/[0.06]">
                <div className="w-8 h-8 rounded-xl bg-purple-500/20 flex items-center justify-center text-base">📋</div>
                <div>
                  <h2 className="text-sm font-semibold text-white/80">Qabul talablari</h2>
                  <p className="text-xs text-white/35">Ariza topshirish uchun minimal ball va hujjatlar</p>
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="rounded-xl p-4 text-center bg-white/[0.04] border border-white/[0.07]">
                  <div className="text-xl font-bold text-indigo-400">{university.minIELTS}+</div>
                  <div className="text-xs mt-1 font-medium text-white/60">IELTS</div>
                </div>
                <div className="rounded-xl p-4 text-center bg-white/[0.04] border border-white/[0.07]">
                  <div className="text-xl font-bold text-violet-400">{university.minTOEFL}+</div>
                  <div className="text-xs mt-1 font-medium text-white/60">TOEFL</div>
                </div>
                <div className="rounded-xl p-4 text-center bg-white/[0.04] border border-white/[0.07]">
                  <div className="text-xl font-bold text-purple-400">{university.minSAT}+</div>
                  <div className="text-xs mt-1 font-medium text-white/60">SAT</div>
                </div>
                <div className="rounded-xl p-4 text-center bg-white/[0.04] border border-white/[0.07]">
                  <div className="text-xl font-bold text-emerald-400">{university.minGPA}</div>
                  <div className="text-xs mt-1 font-medium text-white/60">GPA</div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 mt-3">
                <div className="rounded-xl p-4 flex justify-between items-center bg-white/[0.04] border border-white/[0.07]">
                  <span className="text-xs text-white/40">Yillik arizalar:</span>
                  <span className="text-sm font-bold text-blue-400">{university.annualApps}</span>
                </div>
                <div className="rounded-xl p-4 flex justify-between items-center bg-white/[0.04] border border-white/[0.07]">
                  <span className="text-xs text-white/40">Yillik qabul:</span>
                  <span className="text-sm font-bold text-pink-400">{university.annualEnroll}</span>
                </div>
              </div>
            </div>

            {/* Muddatlar */}
            <div className="rounded-2xl bg-white/[0.03] border border-white/[0.07] p-6">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/[0.06]">
                <div className="w-8 h-8 rounded-xl bg-blue-500/20 flex items-center justify-center text-base">📅</div>
                <div>
                  <h2 className="text-sm font-semibold text-white/80">Ariza topshirish muddatlari</h2>
                  <p className="text-xs text-white/35">Belgilangan muhim sanalar</p>
                </div>
              </div>
              <div className="relative pl-7 border-l border-indigo-500/30 flex flex-col gap-5">
                <div className="relative">
                  <div className="absolute w-3 h-3 rounded-full bg-indigo-500 border-2 border-[#060c1a] left-[-1.6rem] top-[0.15rem]" />
                  <div className="text-xs font-semibold text-indigo-400 tracking-wide">1-Muddat (Deadline)</div>
                  <div className="text-sm font-medium text-white/80 mt-0.5">{university.deadline1}</div>
                </div>
                <div className="relative">
                  <div className="absolute w-3 h-3 rounded-full bg-indigo-500 border-2 border-[#060c1a] left-[-1.6rem] top-[0.15rem]" />
                  <div className="text-xs font-semibold text-indigo-400 tracking-wide">2-Muddat (Deadline)</div>
                  <div className="text-sm font-medium text-white/80 mt-0.5">{university.deadline2}</div>
                </div>
                <div className="relative">
                  <div className="absolute w-3 h-3 rounded-full bg-indigo-500 border-2 border-[#060c1a] left-[-1.6rem] top-[0.15rem]" />
                  <div className="text-xs font-semibold text-indigo-400 tracking-wide">Natijalar chiqish sanasi</div>
                  <div className="text-sm font-medium text-white/80 mt-0.5">{university.resultDate}</div>
                </div>
              </div>
            </div>
          </div>

          {/* O'NG DASHBOARD USTUN */}
          <div className="flex flex-col gap-6">
            {/* Moliyaviy Yordam (Grant) */}
            <div className="rounded-2xl p-6 relative overflow-hidden bg-gradient-to-br from-indigo-950/80 to-purple-950/60 border border-indigo-500/30">
              <div className="text-2xl mb-3">💰</div>
              <div className="text-sm font-medium text-indigo-300">Moliyaviy yordam</div>
              <div className="text-4xl font-bold mt-1 text-white">{university.grantPercentage}%</div>
              <p className="text-xs mt-2 text-white/40 leading-relaxed mb-4">
                To'liq grant mavjud — oilangizning daromadiga qarab o'qish pulini to'liq qoplaydi.
              </p>
              <div className="text-xs flex flex-col gap-2 border-t border-white/10 pt-3">
                <div className="flex justify-between"><span>Ehtiyojga asoslangan grant:</span> <span className="text-green-400 font-bold">{university.needBasedGrant}</span></div>
                <div className="flex justify-between"><span>Yutuqlarga asoslangan grant:</span> <span className="text-green-400 font-bold">{university.meritBasedGrant}</span></div>
              </div>
            </div>

            {/* Ariza topshirish info */}
            <div className="rounded-2xl bg-white/[0.03] border border-white/[0.07] p-6">
              <div className="flex items-center gap-3 mb-5 pb-3 border-b border-white/[0.06]">
                <div className="w-7 h-7 rounded-lg bg-green-500/20 flex items-center justify-center text-sm">📝</div>
                <h2 className="text-xs font-semibold tracking-widest text-white/50">ARIZA DETAILS</h2>
              </div>
              <div className="flex flex-col gap-4">
                <div>
                  <div className="text-xs text-white/35 mb-1">Ariza to'lovi shakli</div>
                  <div className="text-sm font-medium text-indigo-200">{university.appFee}</div>
                </div>
                <div>
                  <div className="text-xs text-white/35 mb-1">Platforma</div>
                  <div className="text-sm font-medium text-white/75">{university.platform}</div>
                </div>
              </div>
            </div>

            {/* Kampus Hayoti */}
            <div className="rounded-2xl bg-white/[0.03] border border-white/[0.07] p-6">
              <div className="flex items-center gap-3 mb-5 pb-3 border-b border-white/[0.06]">
                <div className="w-7 h-7 rounded-lg bg-blue-500/20 flex items-center justify-center text-sm">🏛️</div>
                <h2 className="text-xs font-semibold tracking-widest text-white/50">KAMPUS VA JAMOAT</h2>
              </div>
              <div className="flex flex-col gap-4">
                <div>
                  <div className="text-xs text-white/35 mb-1">Joylashuv turi (Location)</div>
                  <div className="text-sm font-medium text-indigo-200">{university.locationType}</div>
                </div>
                <div>
                  <div className="text-xs text-white/35 mb-1">Yotoqxona imkoniyati</div>
                  <div className="text-sm font-medium text-white/75">{university.dormitory}</div>
                </div>
                <div>
                  <div className="text-xs text-white/35 mb-1">Yashash xarajati ko'rsatkichi</div>
                  <div className="text-sm font-medium text-indigo-200">{university.livingCost}</div>
                </div>
                <div>
                  <div className="text-xs text-white/35 mb-1">O'rtacha oylik maosh (Bitiruvchilar)</div>
                  <div className="text-sm font-medium text-emerald-400">${university.avgSalary}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PASTKI TUGMALAR */}
        
      </div>
    </div>
  );
}