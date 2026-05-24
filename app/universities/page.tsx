"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { ImSpinner3 } from "react-icons/im";
import Header from "../_components/Header";
import Footer from "../_components/Footer";
import { University } from "@/types";

interface Region {
  id: string;
  name: string;
}

export default function UniversitiesPage() {
  const [universities, setUniversities] = useState<University[]>([]);
  const [regions, setRegions] = useState<Region[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState<string>("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      axios.get<University[]>("http://localhost:4000/universities"),
      axios.get<Region[]>("http://localhost:4000/regions"),
    ])
      .then(([uniRes, regRes]) => {
        setUniversities(uniRes.data);
        setRegions(regRes.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Ma'lumot yuklashda xatolik:", err);
        setLoading(false);
      });
  }, []);

  const filteredUniversities = universities.filter((uni) => {
    const matchesRegion =
      selectedRegion === "All" || uni.region === selectedRegion;
    const matchesSearch = uni.name
      .toLowerCase()
      .startsWith(searchTerm.toLowerCase());

    return matchesRegion && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#060c1a] text-white select-none">
      <Header />

      {/* Background Orbs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-200px] left-[-100px] w-[500px] h-[500px] rounded-full opacity-20 bg-indigo-600 blur-[120px]" />
        <div className="absolute top-[300px] right-[-100px] w-[400px] h-[400px] rounded-full opacity-15 bg-purple-600 blur-[120px]" />
      </div>

      <div className="relative max-w-6xl mt-5 mx-auto px-5 py-10">
        {/* Sarlavhalar */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold tracking-tight text-white mb-2">
            Universitetlar
          </h1>
          <p className="text-sm text-white/60 tracking-wide">
            Dunyo bo'ylab eng yaxshi universitetlarni kashf eting
          </p>
        </div>

        {/* Qidiruv inputi */}
        <div className="mb-6 max-w-xl mx-auto">
          <input
            type="text"
            placeholder="🔎Universitet qidiring..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-5 py-3.5 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all duration-200"
          />
        </div>

        {/* 🌍 DINAMIK REGIONLAR FILTRI */}
        <div className="mb-12 max-w-3xl mx-auto flex flex-wrap justify-center gap-2.5">
          <button
            onClick={() => setSelectedRegion("All")}
            className={`px-5 py-2 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer border ${
              selectedRegion === "All"
                ? "bg-indigo-600 border-indigo-500 text-white shadow-lg shadow-indigo-600/20"
                : "bg-white/5 border-white/10 text-white/70 hover:bg-white/10 hover:text-white"
            }`}
          >
            Barchasi ✨
          </button>

          {regions.map((reg) => (
            <button
              key={reg.id}
              onClick={() => setSelectedRegion(reg.name)}
              className={`px-5 py-2 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer border ${
                selectedRegion === reg.name
                  ? "bg-indigo-600 border-indigo-500 text-white shadow-lg shadow-indigo-600/20"
                  : "bg-white/5 border-white/10 text-white/70 hover:bg-white/10 hover:text-white"
              }`}
            >
              {reg.name}
            </button>
          ))}
        </div>

        {/* Yuklanish holati */}
        {loading ? (
          <div className="flex justify-center items-center py-20 text-indigo-400">
            <ImSpinner3 className="animate-spin text-5xl" />
          </div>
        ) : (
          <>
            {/* Cardlar Grid qismi */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredUniversities.map((uni) => (
                <div
                  key={uni.id}
                  className="rounded-[24px] overflow-hidden bg-[#0d1527] border border-white/[0.05] flex flex-col h-full shadow-lg"
                >
                  {/* Rasm qismi */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={
                        uni.image ||
                        "https://images.unsplash.com/photo-1580582932707-520aed937b7b"
                      }
                      alt={uni.name}
                      className="w-full h-full object-cover brightness-[0.9]"
                    />
                    <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white/80 hover:text-red-400 transition-colors cursor-pointer">
                      ❤️
                    </button>
                  </div>

                  {/* Kontent qismi */}
                  <div className="p-6 flex flex-col flex-grow justify-between bg-[#0b1120]">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <h3 className="text-xl font-bold text-white tracking-tight line-clamp-1">
                          {uni.name}
                        </h3>
                        <span className="px-2 py-0.5 text-[10px] uppercase font-semibold tracking-wider bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 rounded-md whitespace-nowrap">
                          {uni.region}
                        </span>
                      </div>
                      <p className="text-sm text-white/40 mb-6 flex items-center gap-1">
                        📍 {uni.city}
                      </p>
                    </div>

                    <div className="border-t border-white/[0.06] pt-4 flex items-center justify-between">
                      <div>
                        <div className="text-xs text-white/30">Yillik narx</div>
                        <div className="text-lg font-bold text-indigo-400">
                          {uni.tuition} $
                        </div>
                      </div>
                      <Link href={`/universities/${uni.id}`}>
                        <button className="py-2.5 px-5 rounded-xl font-medium text-sm text-white bg-[#4f46e5] hover:bg-[#4338ca] transition-all cursor-pointer flex items-center gap-1">
                          Ko'rish →
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Universitet topilmagandagi holat */}
            {filteredUniversities.length === 0 && (
              <p className="text-center text-sm text-white/35 mt-12 tracking-wide">
                Ushbu hududda yoki ushbu nomda hech qanday universitet topilmadi.
              </p>
            )}
          </>
        )}
      </div>
      <Footer />
    </div>
  );
}