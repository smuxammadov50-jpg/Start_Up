"use client";
import { useState, useEffect, FormEvent } from "react";
import axios from "axios";
import { UniversityFormData } from "@/types"; // Papka yo'nalishini loyihangizga qarab tekshirib oling

export default function AddUniversityPage() {
  const [regions, setRegions] = useState<any[]>([]);
  const [formData, setFormData] = useState<UniversityFormData>({
    name: "",
    slug: "",
    city: "",
    region: "",
    isAccepting: "true",
    foundedYear: "",
    type: "Xususiy",
    tuition: "",
    rankQS: "",
    rankTHE: "",
    acceptanceRate: "",
    employmentRate: "",
    degreeTypes: "Bakalavr · Magistr · Doktoratura",
    duration: "4 yil",
    language: "Ingliz tili",
    popularMajors: "",
    totalStudents: "",
    totalTeachers: "",
    grantPercentage: "",
    needBasedGrant: "Bor",
    meritBasedGrant: "Bor",
    minIELTS: "",
    minTOEFL: "",
    minSAT: "",
    minGPA: "",
    annualApps: "",
    annualEnroll: "",
    appFee: "",
    platform: "Common App",
    locationType: "Urban",
    dormitory: "",
    livingCost: "",
    intlStudents: "",
    deadline1: "",
    deadline2: "",
    deadline3: "",
    resultDate: "",
    avgSalary: "",
    website: "",
    image: "",
  });

  useEffect(() => {
    axios
      .get("http://localhost:4000/regions")
      .then((res) => setRegions(res.data))
      .catch(() => console.log("Regionlarni yuklashda xatolik"));
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:4000/universities", formData);
      alert("Universitet muvaffaqiyatli saqlandi! 🎉");
    } catch {
      alert("Xatolik yuz berdi.");
    }
  };

  return (
    <div className="w-full max-w-[900px] mx-auto px-4 py-8">
      <h1 className="text-[32px] font-bold text-white mb-1">
        ➕ Yangi Universitet Qo'shish
      </h1>
      <p className="text-[12px] text-white/40 uppercase tracking-[1.5px] mb-8">
        BARCHA KO'RSATKICHLARNI DB.JSON GA YOZISH
      </p>

      <form 
        onSubmit={handleSubmit} 
        className="grid grid-cols-1 md:grid-cols-2 gap-5 bg-white/[0.02] border border-white/10 p-8 rounded-[32px] box-border"
      >
        {/* 1. ASOSIY BLOK */}
        <div className="col-span-1 md:col-span-2 font-semibold text-[14px] border-b border-white/[0.05] pb-1 mt-4 text-[#818cf8]">
          🏫 Asosiy Blok
        </div>
        <input
          type="text"
          placeholder="Universitet nomi (Masalan: Harvard University)"
          className="w-full bg-white/[0.03] border border-white/[0.08] py-[14px] px-[18px] rounded-[14px] text-white outline-none text-[13px] transition-all focus:border-[#4f46e5] focus:bg-white/[0.06] box-border"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Slug (Masalan: harvard)"
          className="w-full bg-white/[0.03] border border-white/[0.08] py-[14px] px-[18px] rounded-[14px] text-white outline-none text-[13px] transition-all focus:border-[#4f46e5] focus:bg-white/[0.06] box-border"
          value={formData.slug}
          onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Shahar (City - Masalan: Cambridge, Massachusetts)"
          className="w-full bg-white/[0.03] border border-white/[0.08] py-[14px] px-[18px] rounded-[14px] text-white outline-none text-[13px] transition-all focus:border-[#4f46e5] focus:bg-white/[0.06] box-border"
          value={formData.city}
          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
          required
        />

        <select
          className="w-full bg-white/[0.03] border border-white/[0.08] py-[14px] px-[18px] rounded-[14px] text-white outline-none text-[13px] transition-all focus:border-[#4f46e5] focus:bg-white/[0.06] box-border cursor-pointer"
          value={formData.region}
          onChange={(e) => setFormData({ ...formData, region: e.target.value })}
          required
        >
          <option value="" className="bg-[#060c1a]">Davlatni tanlang</option>
          {regions.map((reg) => (
            <option key={reg.id} value={reg.name} className="bg-[#060c1a]">
              {reg.name}
            </option>
          ))}
        </select>

        <select
          className="w-full bg-white/[0.03] border border-white/[0.08] py-[14px] px-[18px] rounded-[14px] text-white outline-none text-[13px] transition-all focus:border-[#4f46e5] focus:bg-white/[0.06] box-border cursor-pointer"
          value={formData.isAccepting}
          onChange={(e) => setFormData({ ...formData, isAccepting: e.target.value })}
        >
          <option value="true" className="bg-[#060c1a]">✓ Ariza qabul qilinmoqda</option>
          <option value="false" className="bg-[#060c1a]">✕ Qabul yopilgan</option>
        </select>

        <input
          type="text"
          placeholder="Tashkil etilgan yili (Masalan: 1636-yilda tashkil etilgan)"
          className="w-full bg-white/[0.03] border border-white/[0.08] py-[14px] px-[18px] rounded-[14px] text-white outline-none text-[13px] transition-all focus:border-[#4f46e5] focus:bg-white/[0.06] box-border"
          value={formData.foundedYear}
          onChange={(e) => setFormData({ ...formData, foundedYear: e.target.value })}
        />

        <select
          className="w-full bg-white/[0.03] border border-white/[0.08] py-[14px] px-[18px] rounded-[14px] text-white outline-none text-[13px] transition-all focus:border-[#4f46e5] focus:bg-white/[0.06] box-border cursor-pointer"
          value={formData.type}
          onChange={(e) => setFormData({ ...formData, type: e.target.value })}
        >
          <option value="Xususiy" className="bg-[#060c1a]">Xususiy tadqiqot universiteti</option>
          <option value="Davlat" className="bg-[#060c1a]">Davlat universiteti</option>
        </select>

        {/* 2. REYTING VA TO'LOVLAR */}
        <div className="col-span-1 md:col-span-2 font-semibold text-[14px] border-b border-white/[0.05] pb-1 mt-4 text-[#c084fc]">
          📊 Reyting va To'lovlar
        </div>
        <input
          type="text"
          placeholder="QS Rank (Masalan: #4)"
          className="w-full bg-white/[0.03] border border-white/[0.08] py-[14px] px-[18px] rounded-[14px] text-white outline-none text-[13px] transition-all focus:border-[#4f46e5] focus:bg-white/[0.06] box-border"
          value={formData.rankQS}
          onChange={(e) => setFormData({ ...formData, rankQS: e.target.value })}
        />
        <input
          type="text"
          placeholder="THE Rank (Masalan: #2)"
          className="w-full bg-white/[0.03] border border-white/[0.08] py-[14px] px-[18px] rounded-[14px] text-white outline-none text-[13px] transition-all focus:border-[#4f46e5] focus:bg-white/[0.06] box-border"
          value={formData.rankTHE}
          onChange={(e) => setFormData({ ...formData, rankTHE: e.target.value })}
        />
        <input
          type="text"
          placeholder="Yillik to'lov narxi (Masalan: $54K)"
          className="w-full bg-white/[0.03] border border-white/[0.08] py-[14px] px-[18px] rounded-[14px] text-white outline-none text-[13px] transition-all focus:border-[#4f46e5] focus:bg-white/[0.06] box-border"
          value={formData.tuition}
          onChange={(e) => setFormData({ ...formData, tuition: e.target.value })}
        />
        <input
          type="text"
          placeholder="Qabul foizi (Acceptance Rate - Masalan: 4%)"
          className="w-full bg-white/[0.03] border border-white/[0.08] py-[14px] px-[18px] rounded-[14px] text-white outline-none text-[13px] transition-all focus:border-[#4f46e5] focus:bg-white/[0.06] box-border"
          value={formData.acceptanceRate}
          onChange={(e) => setFormData({ ...formData, acceptanceRate: e.target.value })}
        />
        <input
          type="text"
          placeholder="Ish topish foizi (Masalan: 95%)"
          className="w-full bg-white/[0.03] border border-white/[0.08] py-[14px] px-[18px] rounded-[14px] text-white outline-none text-[13px] transition-all focus:border-[#4f46e5] focus:bg-white/[0.06] box-border"
          value={formData.employmentRate}
          onChange={(e) => setFormData({ ...formData, employmentRate: e.target.value })}
        />
        <div className="hidden md:block"></div>

        {/* 3. TA'LIM DASTURLARI VA STATISTIKA */}
        <div className="col-span-1 md:col-span-2 font-semibold text-[14px] border-b border-white/[0.05] pb-1 mt-4 text-[#60a5fa]">
          🎓 Ta'lim Dasturlari va Statistika
        </div>
        <input
          type="text"
          placeholder="Diplom turlari"
          className="w-full bg-white/[0.03] border border-white/[0.08] py-[14px] px-[18px] rounded-[14px] text-white outline-none text-[13px] transition-all focus:border-[#4f46e5] focus:bg-white/[0.06] box-border"
          value={formData.degreeTypes}
          onChange={(e) => setFormData({ ...formData, degreeTypes: e.target.value })}
        />
        <input
          type="text"
          placeholder="O'qish muddati"
          className="w-full bg-white/[0.03] border border-white/[0.08] py-[14px] px-[18px] rounded-[14px] text-white outline-none text-[13px] transition-all focus:border-[#4f46e5] focus:bg-white/[0.06] box-border"
          value={formData.duration}
          onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
        />
        <input
          type="text"
          placeholder="O'qitish tili"
          className="w-full bg-white/[0.03] border border-white/[0.08] py-[14px] px-[18px] rounded-[14px] text-white outline-none text-[13px] transition-all focus:border-[#4f46e5] focus:bg-white/[0.06] box-border"
          value={formData.language}
          onChange={(e) => setFormData({ ...formData, language: e.target.value })}
        />
        <input
          type="text"
          placeholder="Eng mashhur yo'nalishlar"
          className="w-full bg-white/[0.03] border border-white/[0.08] py-[14px] px-[18px] rounded-[14px] text-white outline-none text-[13px] transition-all focus:border-[#4f46e5] focus:bg-white/[0.06] box-border"
          value={formData.popularMajors}
          onChange={(e) => setFormData({ ...formData, popularMajors: e.target.value })}
        />
        <input
          type="text"
          placeholder="Jami talabalar soni"
          className="w-full bg-white/[0.03] border border-white/[0.08] py-[14px] px-[18px] rounded-[14px] text-white outline-none text-[13px] transition-all focus:border-[#4f46e5] focus:bg-white/[0.06] box-border"
          value={formData.totalStudents}
          onChange={(e) => setFormData({ ...formData, totalStudents: e.target.value })}
        />
        <input
          type="text"
          placeholder="O'qituvchilar soni"
          className="w-full bg-white/[0.03] border border-white/[0.08] py-[14px] px-[18px] rounded-[14px] text-white outline-none text-[13px] transition-all focus:border-[#4f46e5] focus:bg-white/[0.06] box-border"
          value={formData.totalTeachers}
          onChange={(e) => setFormData({ ...formData, totalTeachers: e.target.value })}
        />

        {/* 4. MOLIYAVIY YORDAM VA GRANTLAR */}
        <div className="col-span-1 md:col-span-2 font-semibold text-[14px] border-b border-white/[0.05] pb-1 mt-4 text-[#2dd4bf]">
          💰 Moliyaviy Yordam va Grantlar
        </div>
        <input
          type="text"
          placeholder="To'liq grant mavjudligi foizi (Masalan: 100%)"
          className="w-full bg-white/[0.03] border border-white/[0.08] py-[14px] px-[18px] rounded-[14px] text-white outline-none text-[13px] transition-all focus:border-[#4f46e5] focus:bg-white/[0.06] box-border"
          value={formData.grantPercentage}
          onChange={(e) => setFormData({ ...formData, grantPercentage: e.target.value })}
        />
        <select
          className="w-full bg-white/[0.03] border border-white/[0.08] py-[14px] px-[18px] rounded-[14px] text-white outline-none text-[13px] transition-all focus:border-[#4f46e5] focus:bg-white/[0.06] box-border cursor-pointer"
          value={formData.needBasedGrant}
          onChange={(e) => setFormData({ ...formData, needBasedGrant: e.target.value })}
        >
          <option value="Bor" className="bg-[#060c1a]">Ehtiyojga asoslangan grant: Bor</option>
          <option value="Yo'q" className="bg-[#060c1a]">Ehtiyojga asoslangan grant: Yo'q</option>
        </select>
        <select
          className="w-full bg-white/[0.03] border border-white/[0.08] py-[14px] px-[18px] rounded-[14px] text-white outline-none text-[13px] transition-all focus:border-[#4f46e5] focus:bg-white/[0.06] box-border cursor-pointer"
          value={formData.meritBasedGrant}
          onChange={(e) => setFormData({ ...formData, meritBasedGrant: e.target.value })}
        >
          <option value="Bor" className="bg-[#060c1a]">Yutuqlarga asoslangan grant: Bor</option>
          <option value="Yo'q" className="bg-[#060c1a]">Yutuqlarga asoslangan grant: Yo'q</option>
        </select>
        <div className="hidden md:block"></div>

        {/* 5. QABUL TALABLARI */}
        <div className="col-span-1 md:col-span-2 font-semibold text-[14px] border-b border-white/[0.05] pb-1 mt-4 text-[#fbbf24]">
          📋 Qabul Talablari (Minimal ballar)
        </div>
        <input
          type="text"
          placeholder="Min IELTS (Masalan: 7.5+)"
          className="w-full bg-white/[0.03] border border-white/[0.08] py-[14px] px-[18px] rounded-[14px] text-white outline-none text-[13px] transition-all focus:border-[#4f46e5] focus:bg-white/[0.06] box-border"
          value={formData.minIELTS}
          onChange={(e) => setFormData({ ...formData, minIELTS: e.target.value })}
        />
        <input
          type="text"
          placeholder="Min TOEFL (Masalan: 100+)"
          className="w-full bg-white/[0.03] border border-white/[0.08] py-[14px] px-[18px] rounded-[14px] text-white outline-none text-[13px] transition-all focus:border-[#4f46e5] focus:bg-white/[0.06] box-border"
          value={formData.minTOEFL}
          onChange={(e) => setFormData({ ...formData, minTOEFL: e.target.value })}
        />
        <input
          type="text"
          placeholder="Min SAT (Masalan: 1500+)"
          className="w-full bg-white/[0.03] border border-white/[0.08] py-[14px] px-[18px] rounded-[14px] text-white outline-none text-[13px] transition-all focus:border-[#4f46e5] focus:bg-white/[0.06] box-border"
          value={formData.minSAT}
          onChange={(e) => setFormData({ ...formData, minSAT: e.target.value })}
        />
        <input
          type="text"
          placeholder="Min GPA (Masalan: 3.8+)"
          className="w-full bg-white/[0.03] border border-white/[0.08] py-[14px] px-[18px] rounded-[14px] text-white outline-none text-[13px] transition-all focus:border-[#4f46e5] focus:bg-white/[0.06] box-border"
          value={formData.minGPA}
          onChange={(e) => setFormData({ ...formData, minGPA: e.target.value })}
        />
        <input
          type="text"
          placeholder="Yillik arizalar soni"
          className="w-full bg-white/[0.03] border border-white/[0.08] py-[14px] px-[18px] rounded-[14px] text-white outline-none text-[13px] transition-all focus:border-[#4f46e5] focus:bg-white/[0.06] box-border"
          value={formData.annualApps}
          onChange={(e) => setFormData({ ...formData, annualApps: e.target.value })}
        />
        <input
          type="text"
          placeholder="Yillik qabul qilinganlar"
          className="w-full bg-white/[0.03] border border-white/[0.08] py-[14px] px-[18px] rounded-[14px] text-white outline-none text-[13px] transition-all focus:border-[#4f46e5] focus:bg-white/[0.06] box-border"
          value={formData.annualEnroll}
          onChange={(e) => setFormData({ ...formData, annualEnroll: e.target.value })}
        />

        {/* 6. ARIZA TOPSHIRISH MUDDATLARI */}
        <div className="col-span-1 md:col-span-2 font-semibold text-[14px] border-b border-white/[0.05] pb-1 mt-4 text-[#fb923c]">
          ⏳ Ariza Topshirish va Kampus Hayoti
        </div>
        <input
          type="text"
          placeholder="Erta ariza muddati (Early Action)"
          className="w-full bg-white/[0.03] border border-white/[0.08] py-[14px] px-[18px] rounded-[14px] text-white outline-none text-[13px] transition-all focus:border-[#4f46e5] focus:bg-white/[0.06] box-border"
          value={formData.deadline1}
          onChange={(e) => setFormData({ ...formData, deadline1: e.target.value })}
        />
        <input
          type="text"
          placeholder="Oddiy ariza muddati (Regular Decision)"
          className="w-full bg-white/[0.03] border border-white/[0.08] py-[14px] px-[18px] rounded-[14px] text-white outline-none text-[13px] transition-all focus:border-[#4f46e5] focus:bg-white/[0.06] box-border"
          value={formData.deadline2}
          onChange={(e) => setFormData({ ...formData, deadline2: e.target.value })}
        />
        <input
          type="text"
          placeholder="Qabul natijalari e'lon qilinishi"
          className="w-full bg-white/[0.03] border border-white/[0.08] py-[14px] px-[18px] rounded-[14px] text-white outline-none text-[13px] transition-all focus:border-[#4f46e5] focus:bg-white/[0.06] box-border"
          value={formData.resultDate}
          onChange={(e) => setFormData({ ...formData, resultDate: e.target.value })}
        />
        <input
          type="text"
          placeholder="Ariza to'lovi (App Fee)"
          className="w-full bg-white/[0.03] border border-white/[0.08] py-[14px] px-[18px] rounded-[14px] text-white outline-none text-[13px] transition-all focus:border-[#4f46e5] focus:bg-white/[0.06] box-border"
          value={formData.appFee}
          onChange={(e) => setFormData({ ...formData, appFee: e.target.value })}
        />
        <input
          type="text"
          placeholder="Ariza topshirish platformasi"
          className="w-full bg-white/[0.03] border border-white/[0.08] py-[14px] px-[18px] rounded-[14px] text-white outline-none text-[13px] transition-all focus:border-[#4f46e5] focus:bg-white/[0.06] box-border"
          value={formData.platform}
          onChange={(e) => setFormData({ ...formData, platform: e.target.value })}
        />
        <input
          type="text"
          placeholder="Kampus joylashuvi turi"
          className="w-full bg-white/[0.03] border border-white/[0.08] py-[14px] px-[18px] rounded-[14px] text-white outline-none text-[13px] transition-all focus:border-[#4f46e5] focus:bg-white/[0.06] box-border"
          value={formData.locationType}
          onChange={(e) => setFormData({ ...formData, locationType: e.target.value })}
        />
        <input
          type="text"
          placeholder="Yotoqxona ma'lumoti"
          className="w-full bg-white/[0.03] border border-white/[0.08] py-[14px] px-[18px] rounded-[14px] text-white outline-none text-[13px] transition-all focus:border-[#4f46e5] focus:bg-white/[0.06] box-border"
          value={formData.dormitory}
          onChange={(e) => setFormData({ ...formData, dormitory: e.target.value })}
        />
        <input
          type="text"
          placeholder="Yashash xarajati"
          className="w-full bg-white/[0.03] border border-white/[0.08] py-[14px] px-[18px] rounded-[14px] text-white outline-none text-[13px] transition-all focus:border-[#4f46e5] focus:bg-white/[0.06] box-border"
          value={formData.livingCost}
          onChange={(e) => setFormData({ ...formData, livingCost: e.target.value })}
        />
        <input
          type="text"
          placeholder="Chet ellik talabalar foizi"
          className="w-full bg-white/[0.03] border border-white/[0.08] py-[14px] px-[18px] rounded-[14px] text-white outline-none text-[13px] transition-all focus:border-[#4f46e5] focus:bg-white/[0.06] box-border"
          value={formData.intlStudents}
          onChange={(e) => setFormData({ ...formData, intlStudents: e.target.value })}
        />
        <div className="hidden md:block"></div>

        {/* 7. KARYERA VA MEDIA */}
        <div className="col-span-1 md:col-span-2 font-semibold text-[14px] border-b border-white/[0.05] pb-1 mt-4 text-[#34d399]">
          🖼️ Karyera va Media (Rasm)
        </div>
        <input
          type="text"
          placeholder="Birinchi yildagi o'rtacha maosh"
          className="w-full bg-white/[0.03] border border-white/[0.08] py-[14px] px-[18px] rounded-[14px] text-white outline-none text-[13px] transition-all focus:border-[#4f46e5] focus:bg-white/[0.06] box-border"
          value={formData.avgSalary}
          onChange={(e) => setFormData({ ...formData, avgSalary: e.target.value })}
        />
        <input
          type="text"
          placeholder="Rasm URL manzili (Link)"
          className="w-full bg-white/[0.03] border border-white/[0.08] py-[14px] px-[18px] rounded-[14px] text-white outline-none text-[13px] transition-all focus:border-[#4f46e5] focus:bg-white/[0.06] box-border"
          value={formData.image}
          onChange={(e) => setFormData({ ...formData, image: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Rasmiy Veb-sayt Linki"
          className="w-full bg-white/[0.03] border border-white/[0.08] py-[14px] px-[18px] rounded-[14px] text-white outline-none text-[13px] transition-all focus:border-[#4f46e5] focus:bg-white/[0.06] box-border col-span-1 md:col-span-2"
          value={formData.website}
          onChange={(e) => setFormData({ ...formData, website: e.target.value })}
        />

        {/* SAQLASH TUGMASI */}
        <button 
          type="submit" 
          className="col-span-1 md:col-span-2 mt-4 p-4 rounded-[16px] font-bold bg-gradient-to-r from-[#4f46e5] to-[#8b5cf6] text-white border-none cursor-pointer shadow-[0_10px_15px_-3px_rgba(79,70,229,0.3)] transition-all hover:opacity-90 active:scale-[0.98]"
        >
          Saqlash 💾
        </button>
      </form>
    </div>
  );
}