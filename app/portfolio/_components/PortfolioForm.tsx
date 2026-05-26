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
    startupName: "",
    startupDesc: "",
    skills: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.age || !formData.job) {
      alert("Iltimos, asosiy majburiy maydonlarni to'ldiring!");
      return;
    }
    onSubmit(formData);
    setFormData({ name: "", age: "", phone: "", image: "", job: "", company: "", startupName: "", startupDesc: "", skills: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-[#0b1120] border border-white/[0.05] rounded-[32px] p-8 shadow-2xl max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
        Yangi raqamli portfolio anketasi
      </h2>

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

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        <div>
          <label className="block text-xs text-white/40 font-bold uppercase tracking-wider mb-2">Kasbingiz / Kelajakdagi kasb *</label>
          <input
            type="text"
            required
            placeholder="Full Stack Developer"
            value={formData.job}
            onChange={(e) => setFormData({ ...formData, job: e.target.value })}
            className="w-full bg-[#05070f] border border-white/[0.08] focus:border-indigo-500/50 rounded-xl px-4 py-3 text-sm text-white outline-none transition-all"
          />
        </div>
        <div>
          <label className="block text-xs text-white/40 font-bold uppercase tracking-wider mb-2">Kompaniya yoki Universitet</label>
          <input
            type="text"
            placeholder="MIT University"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            className="w-full bg-[#05070f] border border-white/[0.08] focus:border-indigo-500/50 rounded-xl px-4 py-3 text-sm text-white outline-none transition-all"
          />
        </div>
      </div>

      <div className="border-t border-white/[0.05] my-6 pt-5">
        <h3 className="text-sm font-semibold text-white/70 mb-4">🚀 Start-up loyiha (Ixtiyoriy)</h3>
        <div className="mb-5">
          <label className="block text-xs text-white/40 font-bold uppercase tracking-wider mb-2">Start-up nomi</label>
          <input
            type="text"
            placeholder="UniSearch System"
            value={formData.startupName}
            onChange={(e) => setFormData({ ...formData, startupName: e.target.value })}
            className="w-full bg-[#05070f] border border-white/[0.08] focus:border-indigo-500/50 rounded-xl px-4 py-3 text-sm text-white outline-none transition-all"
          />
        </div>
        <div className="mb-5">
          <label className="block text-xs text-white/40 font-bold uppercase tracking-wider mb-2">Start-up nima haqida?</label>
          <textarea
            placeholder="Platforma talabalarga xalqaro universitetlarni oson topishda yordam beradi..."
            rows={3}
            value={formData.startupDesc}
            onChange={(e) => setFormData({ ...formData, startupDesc: e.target.value })}
            className="w-full bg-[#05070f] border border-white/[0.08] focus:border-indigo-500/50 rounded-xl px-4 py-3 text-sm text-white outline-none transition-all resize-none"
          />
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-xs text-white/40 font-bold uppercase tracking-wider mb-2">Texnologiyalar / Ko'nikmalar (Vergül bilan ajrating)</label>
        <input
          type="text"
          placeholder="React, Next.js, Node.js, Tailwind CSS"
          value={formData.skills}
          onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
          className="w-full bg-[#05070f] border border-white/[0.08] focus:border-indigo-500/50 rounded-xl px-4 py-3 text-sm text-white outline-none transition-all"
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