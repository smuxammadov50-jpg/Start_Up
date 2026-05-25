"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { useFavorites } from "../context/FavoritesContext";
import Link from "next/link";
import Footer from "../_components/Footer";
import Header from "../_components/Header";

interface University {
  id: string;
  name: string;
  city: string;
  region: string;
  tuition: string;
  image?: string;
}

interface Region {
  id: string;
  name: string;
}

export default function UniversitiesPage() {
  const [universities, setUniversities] = useState<University[]>([]);
  const [regions, setRegions] = useState<Region[]>([]);
  
  // Qidiruv va Filtr holatlari
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("All");

  const { toggleFavorite, isFavorite } = useFavorites();

  // db.json dan ma'lumotlarni olish
  useEffect(() => {
    axios
      .get("http://localhost:4000/universities")
      .then((res) => setUniversities(res.data))
      .catch((err) => console.error("Universitetlarni yuklashda xatolik:", err));

    axios
      .get("http://localhost:4000/regions")
      .then((res) => setRegions(res.data))
      .catch((err) => console.error("Regionlarni yuklashda xatolik:", err));
  }, []);

  // Filterlash mantiqi (Search va Region bo'yicha)
  const filteredUniversities = universities.filter((uni) => {
    const matchesSearch = uni.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRegion = selectedRegion === "All" || uni.region === selectedRegion;
    return matchesSearch && matchesRegion;
  });

  return (
    <div className="min-h-screen bg-[#05070f] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#0d1527] via-[#05070f] to-[#02040a] text-white flex flex-col justify-between">
      <Header />
      
      {/* ASOSIY KONTENT */}
      <div className="max-w-7xl mx-auto w-full px-5 py-10 flex-grow">
        
        {/* BILIMLAR MARKAZI MATNLARI */}
        <div className="text-center my-10">
          <h1 className="text-4xl font-extrabold text-white tracking-tight mb-3">
            Universitetlar
          </h1>
          <p className="text-sm text-white/50 max-w-md mx-auto">
            Dunyo bo'ylab eng yaxshi universitetlarni kashf eting
          </p>
        </div>

        {/* SEARCH INPUT */}
        <div className="max-w-xl mx-auto mb-6 relative">
          <input
            type="text"
            placeholder="🔍 Universitet qidiring..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#11192e]/60 border border-white/[0.08] focus:border-indigo-500/50 rounded-2xl px-5 py-3.5 text-sm text-white placeholder-white/30 outline-none transition-all shadow-inner"
          />
        </div>

        {/* REGION BUTTONLAR RO'YXATI */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-8 scrollbar-none">
          <button
            onClick={() => setSelectedRegion("All")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border outline-none cursor-pointer ${
              selectedRegion === "All"
                ? "bg-indigo-600 border-indigo-500 text-white shadow-[0_0_15px_rgba(99,102,241,0.3)]"
                : "bg-[#0d1527]/50 border-white/[0.05] text-white/60 hover:text-white"
            }`}
          >
            Harchasi ✨
          </button>
          {regions.map((reg) => (
            <button
              key={reg.id}
              onClick={() => setSelectedRegion(reg.name)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border outline-none cursor-pointer ${
                selectedRegion === reg.name
                  ? "bg-indigo-600 border-indigo-500 text-white shadow-[0_0_15px_rgba(99,102,241,0.3)]"
                  : "bg-[#0d1527]/50 border-white/[0.05] text-white/60 hover:text-white"
              }`}
            >
              {reg.name}
            </button>
          ))}
        </div>

        {/* UNIVERSITETLAR SETKASI (GRID) */}
        {filteredUniversities.length === 0 ? (
          <div className="text-center py-20 border border-dashed border-white/10 rounded-[32px] bg-white/[0.01]">
            <span className="text-4xl block mb-2">🔍</span>
            <p className="text-white/40 text-sm">Mos keladigan universitet topilmadi.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredUniversities.map((uni) => {
              const favorite = isFavorite(uni.id);

              return (
                <div
                  key={uni.id}
                  className="rounded-[32px] overflow-hidden bg-[#0a101f] border border-white/[0.04] hover:border-white/[0.1] transition-all duration-300 flex flex-col h-full shadow-2xl group"
                >
                  {/* RASM VA PREMIUM YURAKCHA */}
                  <div className="relative h-56 overflow-hidden m-2 rounded-[26px]">
                    <img
                      src={uni.image || "https://images.unsplash.com/photo-1580582932707-520aed937b7b"}
                      alt={uni.name}
                      className="w-full h-full object-cover brightness-[0.85] group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* O'NG TEPADA: YURAKCHA TUGMASI */}
                    <button 
                      onClick={() => toggleFavorite(uni)}
                      className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/30 backdrop-blur-md flex items-center justify-center border border-white/10 text-lg transition-all duration-200 hover:scale-110 active:scale-90 cursor-pointer shadow-lg outline-none"
                    >
                      {favorite ? "❤️" : "🤍"}
                    </button>
                  </div>

                  {/* KONTENT QISMI */}
                  <div className="p-6 flex flex-col flex-grow justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <h3 className="text-lg font-bold text-white tracking-tight line-clamp-2 transition-colors">
                          {uni.name}
                        </h3>
                        <span className="px-2 py-0.5 text-[9px] uppercase font-bold tracking-widest bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 rounded-md whitespace-nowrap">
                          {uni.region}
                        </span>
                      </div>
                      <p className="text-xs text-white/40 mb-6 flex items-center gap-1">
                        📍 {uni.city}
                      </p>
                    </div>

                    {/* PASTI: NARX VA "KO'RISH →" TUGMASI (Aynan rasmda ko'rsatilgan qism) */}
                    <div className="border-t border-white/[0.05] pt-4 flex items-center justify-between">
                      <div>
                        <div className="text-[10px] text-white/30 font-medium mb-0.5">Yillik narx</div>
                        <div className="text-base font-extrabold text-indigo-400 tracking-wide">
                          {uni.tuition} $
                        </div>
                      </div>

                      {/* RASMDAGI "Ko'rish →" INTERFAOL BUTTONI */}
                      <Link
                        href={`/universities/${uni.id}`}
                        className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition-all duration-200 shadow-lg shadow-indigo-600/10 hover:shadow-indigo-500/20 active:scale-95 no-underline flex items-center justify-center"
                      >
                        Ko'rish →
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}