"use client";
import { useFavorites } from "../context/FavoritesContext";
import Link from "next/link";

export default function FavoritesPage() {
  const { favorites, toggleFavorite } = useFavorites();

  return (
    <div className="max-w-7xl mx-auto px-5 py-10 min-h-[75vh]">
      <h1 className="text-3xl font-extrabold text-white tracking-tight mb-2">❤️ Saqlanganlar</h1>
      <p className="text-sm text-white/40 mb-8">O'zingizga ma'qul kelgan universitetlar ro'yxati</p>

      {favorites.length === 0 ? (
        /* Bo'sh holatdagi chiroyli blok */
        <div className="text-center py-20 border border-dashed border-white/10 rounded-[32px] bg-white/[0.01] backdrop-blur-sm">
          <span className="text-5xl block mb-4 animate-pulse">🤍</span>
          <h2 className="text-xl font-semibold text-white/80 mb-2">Hozircha hech narsa saqlanmagan</h2>
          <p className="text-sm text-white/40 mb-6">Universitetlar bo'limidan o'zingizga yoqqanini qo'shishingiz mumkin.</p>
          <Link 
            href="/universities" 
            className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2.5 rounded-xl font-semibold text-sm no-underline hover:opacity-90 active:scale-95 transition-all shadow-lg shadow-indigo-600/20"
          >
            Universitetlarni ko'rish
          </Link>
        </div>
      ) : (
        /* Saqlanganlar ro'yxati */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {favorites.map((uni) => (
            <div
              key={uni.id}
              className="rounded-[24px] overflow-hidden bg-[#0d1527] border border-white/[0.05] flex flex-col h-full shadow-xl group animate-fade-in"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={uni.image || "https://images.unsplash.com/photo-1580582932707-520aed937b7b"}
                  alt={uni.name}
                  className="w-full h-full object-cover brightness-[0.85]"
                />
                
                {/* QIZIL YURAKCHA - Bosilsa silliq o'chib ketadi */}
                <button 
                  onClick={() => toggleFavorite(uni)}
                  className="absolute top-4 right-4 w-11 h-11 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center border border-white/10 text-xl transition-all duration-200 hover:scale-110 active:scale-90 cursor-pointer shadow-lg outline-none"
                >
                  ❤️
                </button>
              </div>

              <div className="p-6 flex flex-col flex-grow justify-between bg-[#0b1120]">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h3 className="text-xl font-bold text-white tracking-tight line-clamp-1">
                      {uni.name}
                    </h3>
                    <span className="px-2.5 py-0.5 text-[10px] uppercase font-bold tracking-wider bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 rounded-md whitespace-nowrap">
                      {uni.region}
                    </span>
                  </div>
                  <p className="text-sm text-white/40 mb-6 flex items-center gap-1">
                    📍 {uni.city}
                  </p>
                </div>

                <div className="border-t border-white/[0.06] pt-4 flex items-center justify-between">
                  <div>
                    <div className="text-xs text-white/30 font-medium">Yillik shartnoma</div>
                    <div className="text-lg font-extrabold text-indigo-400 tracking-wide">
                      {uni.tuition} $
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}