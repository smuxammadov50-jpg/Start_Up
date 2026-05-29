"use client";
import { useState, useEffect } from "react";
import PortfolioForm from "./_components/PortfolioForm";
import PortfolioCard from "./_components/PortfolioCard";
import Footer from "../_components/Footer";
import Link from "next/link";

export interface PortfolioData {
  id: string;
  name: string;
  age: string;
  phone: string;
  image: string;
  job: string;
  company: string; 
  address: string;     // Yangi: Yashash manzili
  interests: string;   // Yangi: Qiziqishlar
  projects: string;    // Yangi: Tadbirlar/Loyihalar
}

export default function PortfolioPage() {
  const [activeTab, setActiveTab] = useState<"create" | "building">("create");
  const [portfolios, setPortfolios] = useState<PortfolioData[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("user_portfolios");
    if (saved) setPortfolios(JSON.parse(saved));
  }, []);

  const handleCreate = (newData: Omit<PortfolioData, "id">) => {
    if (portfolios.length >= 2) {
      alert("Xatolik: Maksimum 2 tagacha portfolio yaratishingiz mumkin!");
      return;
    }
    const created: PortfolioData = { ...newData, id: Date.now().toString() };
    const updated = [...portfolios, created];
    setPortfolios(updated);
    localStorage.setItem("user_portfolios", JSON.stringify(updated));
    setActiveTab("building");
  };

  const handleDelete = (id: string) => {
    const updated = portfolios.filter((p) => p.id !== id);
    setPortfolios(updated);
    localStorage.setItem("user_portfolios", JSON.stringify(updated));
  };

  return (
    <div className="min-h-screen bg-[#05070f] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#0d1527] via-[#05070f] to-[#02040a] text-white flex flex-col justify-between">
      
      <div className="max-w-5xl mx-auto w-full px-5 py-10 flex-grow">
        <Link href={"/"}>
          <button className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-xs cursor-pointer hover:bg-white/10 transition-all mb-6">
            Orqaga qaytish
          </button>
        </Link> 

        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab("create")}
            className={`px-6 py-3 rounded-2xl text-sm font-bold tracking-wide transition-all border outline-none cursor-pointer ${
              activeTab === "create"
                ? "bg-gradient-to-r from-indigo-600 to-purple-600 border-indigo-500 text-white shadow-[0_0_20px_rgba(99,102,241,0.3)]"
                : "bg-[#0d1527]/60 border-white/[0.05] text-white/50 hover:text-white"
            }`}
          >
            ✨ Create New Portfolio ({portfolios.length}/2)
          </button>
          <button
            onClick={() => setActiveTab("building")}
            className={`px-6 py-3 rounded-2xl text-sm font-bold tracking-wide transition-all border outline-none cursor-pointer ${
              activeTab === "building"
                ? "bg-gradient-to-r from-indigo-600 to-purple-600 border-indigo-500 text-white shadow-[0_0_20px_rgba(99,102,241,0.3)]"
                : "bg-[#0d1527]/60 border-white/[0.05] text-white/50 hover:text-white"
            }`}
          >
            🛠️ Building Portfolio ({portfolios.length})
          </button>
        </div>

        {activeTab === "create" ? (
          portfolios.length >= 2 ? (
            <div className="text-center py-16 border border-dashed border-red-500/20 rounded-[32px] bg-red-500/[0.02]">
              <span className="text-5xl block mb-4">🚫</span>
              <h3 className="text-xl font-bold text-red-400">Limitga erishildi</h3>
              <p className="text-sm text-white/40 mt-1">Siz allaqachon 2 ta portfolio yaratgansiz. Yangisini ochish uchun oldingisini o'chiring.</p>
            </div>
          ) : (
            <PortfolioForm onSubmit={handleCreate} />
          )
        ) : portfolios.length === 0 ? (
          <div className="text-center py-20 border border-dashed border-white/10 rounded-[32px] bg-white/[0.01]">
            <h3 className="text-lg font-semibold text-white/80">Portfoliolar mavjud emas</h3>
          </div>
        ) : (
          <div className="flex flex-col gap-12">
            {portfolios.map((portfolio, index) => (
              <PortfolioCard 
                key={portfolio.id} 
                data={portfolio} 
                index={index + 1} 
                onDelete={handleDelete} 
              />
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}