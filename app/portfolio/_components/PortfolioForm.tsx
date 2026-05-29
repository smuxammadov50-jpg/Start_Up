"use client";
import { useState } from "react";

interface FormProps {
  onSubmit: (data: any) => void;
}

export default function PortfolioForm({ onSubmit }: FormProps) {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    phone: "",
    image: "",
    job: "",
    company: "",
    address: "",
    interests: "",
    projects: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.age || !formData.job) {
      alert("Iltimos, asosiy majburiy maydonlarni to'ldiring!");
      return;
    }
    onSubmit(formData);
    setFormData({ name: "", age: "", phone: "", image: "", job: "", company: "", address: "", interests: "", projects: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-[#0b1120] border border-white/[0.05] rounded-[32px] p-8 shadow-2xl max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
        Yangi raqamli portfolio anketasi
      </h2>

      {/* ISMI VA YOSHI */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        <div>
          <label className="block text-xs text-white/40 font-bold uppercase tracking-wider mb-2">To'liq ismingiz *</label>
          <input
            type="text"
            required
            placeholder="John Doe"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full bg-[#05070f] border border-white/[0.08] focus:border-indigo-500/50 rounded-xl px-4 py-3 text-sm text-white outline-none transition-all"
          />
        </div>
        <div>
          <label className="block text-xs text-white/40 font-bold uppercase tracking-wider mb-2">Yoshingiz *</label>
          <input
            type="number"
            required
            placeholder="22"
            value={formData.age}
            onChange={(e) => setFormData({ ...formData, age: e.target.value })}
            className="w-full bg-[#05070f] border border-white/[0.08] focus:border-indigo-500/50 rounded-xl px-4 py-3 text-sm text-white outline-none transition-all"
          />
        </div>
      </div>

      {/* TELEFON VA RASM */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        <div>
          <label className="block text-xs text-white/40 font-bold uppercase tracking-wider mb-2">Telefon raqam</label>
          <input
            type="text"
            placeholder="+998 90 123 45 67"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full bg-[#05070f] border border-white/[0.08] focus:border-indigo-500/50 rounded-xl px-4 py-3 text-sm text-white outline-none transition-all"
          />
        </div>
        <div>
          <label className="block text-xs text-white/40 font-bold uppercase tracking-wider mb-2">Rasm URL manzili</label>
          <input
            type="text"
            placeholder="https://images.unsplash.com/..."
            value={formData.image}
            onChange={(e) => setFormData({ ...formData, image: e.target.value })}
            className="w-full bg-[#05070f] border border-white/[0.08] focus:border-indigo-500/50 rounded-xl px-4 py-3 text-sm text-white outline-none transition-all"
          />
        </div>
      </div>

      {/* KASBI VA JOYI */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        <div>
          <label className="block text-xs text-white/40 font-bold uppercase tracking-wider mb-2">Kasbingiz / Yo'nalishingiz *</label>
          <input
            type="text"
            required
            placeholder="Talaba / Grafik Dizayner"
            value={formData.job}
            onChange={(e) => setFormData({ ...formData, job: e.target.value })}
            className="w-full bg-[#05070f] border border-white/[0.08] focus:border-indigo-500/50 rounded-xl px-4 py-3 text-sm text-white outline-none transition-all"
          />
        </div>
        <div>
          <label className="block text-xs text-white/40 font-bold uppercase tracking-wider mb-2">Kompaniya yoki Universitet</label>
          <input
            type="text"
            placeholder="O'zbekiston Milliy Universiteti"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            className="w-full bg-[#05070f] border border-white/[0.08] focus:border-indigo-500/50 rounded-xl px-4 py-3 text-sm text-white outline-none transition-all"
          />
        </div>
      </div>

      {/* YASHASh MANZILI */}
      <div className="mb-5">
        <label className="block text-xs text-white/40 font-bold uppercase tracking-wider mb-2">Yashash manzili (Viloyat, Shahar)</label>
        <input
          type="text"
          placeholder="Toshkent shahri, Chilonzor tumani"
          value={formData.address}
          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
          className="w-full bg-[#05070f] border border-white/[0.08] focus:border-indigo-500/50 rounded-xl px-4 py-3 text-sm text-white outline-none transition-all"
        />
      </div>

      {/* QIZIQIShLAR (VERGUL BILAN) */}
      <div className="mb-5">
        <label className="block text-xs text-white/40 font-bold uppercase tracking-wider mb-2">Nimalarga qiziqasiz? (Vergül bilan ajrating)</label>
        <input
          type="text"
          placeholder="Kitob mutolaasi, Suzish, Shaxmat, Sayohat"
          value={formData.interests}
          onChange={(e) => setFormData({ ...formData, interests: e.target.value })}
          className="w-full bg-[#05070f] border border-white/[0.08] focus:border-indigo-500/50 rounded-xl px-4 py-3 text-sm text-white outline-none transition-all"
        />
      </div>

      {/* TADBIRLAR VA PROYEKTLAR */}
      <div className="mb-6">
        <label className="block text-xs text-white/40 font-bold uppercase tracking-wider mb-2">Ishtirok etgan tadbirlaringiz yoki loyihalaringiz</label>
        <textarea
          placeholder="Yaqinda universitetlararo o'tkazilgan 'UniHack' tanlovida 2-o'rinni oldim..."
          rows={3}
          value={formData.projects}
          onChange={(e) => setFormData({ ...formData, projects: e.target.value })}
          className="w-full bg-[#05070f] border border-white/[0.08] focus:border-indigo-500/50 rounded-xl px-4 py-3 text-sm text-white outline-none transition-all resize-none"
        />
      </div>

      <button
        type="submit"
        className="w-full py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold text-sm tracking-wide shadow-lg shadow-indigo-600/20 hover:opacity-95 active:scale-[0.99] transition-all cursor-pointer outline-none"
      >
        Yaratish (Create ✨)
      </button>
    </form>
  );
}