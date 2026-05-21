"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import Header from "../_components/Header";
import Footer from "../_components/Footer";
import { ImSpinner3 } from "react-icons/im"; // Spinner ikonkasini import qildik

interface University {
  id: number;
  name: string;
  city: string;
  image: string;
  rank: string;
  tuition: string;
  slug: string;
}

export default function HomePage() {
  const [universities, setUniversities] = useState<University[]>([]);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [loading, setLoading] = useState(true);

  // db.json dan barcha ma'lumotlarni axios orqali olib kelish
  useEffect(() => {
    axios.get("http://localhost:4000/universities")
      .then((res) => {
        setUniversities(res.data); 
        setLoading(false);
      })
      .catch((err) => {
        console.error("Ma'lumot kelishida xatolik:", err);
        setLoading(false);
      });
  }, []);

  const toggleFavorite = (id: number) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((favId) => favId !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  // YANGILANGAN YUKLANISH (LOADING) EKRANI
  if (loading) {
    return (
      <div className="min-h-screen bg-[#060c1a] flex items-center justify-center text-white">
        <ImSpinner3 className="w-10 h-10 text-indigo-500 animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#060c1a] text-white">
      <Header />

      <main className="max-w-7xl mx-auto px-5 py-10">
        
        <div className="mb-10 text-center sm:text-left">
          <h1 className="text-3xl font-extrabold text-white tracking-tight">Universitetlar</h1>
          <p className="text-sm text-gray-400 mt-2">
            Dunyo bo'ylab eng yaxshi universitetlarni kashf eting
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {universities.map((uni) => {
            const isFavorite = favorites.includes(uni.id);

            return (
              <div key={uni.id} className="rounded-2xl overflow-hidden bg-gray-900/50 border border-gray-800 hover:border-indigo-500/50 transition-all duration-300 flex flex-col justify-between">
                
                <div className="relative h-48 w-full">
                  <img 
                    src={uni.image} 
                    alt={uni.name} 
                    className="w-full h-full object-cover brightness-90"
                  />
                  
                  <span className="absolute top-3 left-3 bg-black/60 px-2.5 py-1 rounded-md text-xs font-bold text-white border border-gray-700">
                    {uni.rank}
                  </span>

                  <button
                    onClick={() => toggleFavorite(uni.id)}
                    className={`absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center border text-lg transition-all ${
                      isFavorite 
                        ? "bg-red-500/20 border-red-500 text-red-500" 
                        : "bg-black/60 border-gray-700 text-gray-400 hover:text-white"
                    }`}
                  >
                    {isFavorite ? "❤️" : "🤍"}
                  </button>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div className="mb-4">
                    <h3 className="text-lg font-bold text-white mb-1 line-clamp-1">{uni.name}</h3>
                    <p className="text-xs text-gray-400 flex items-center gap-1">
                      📍 {uni.city}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                    <div>
                      <span className="text-xs text-gray-500 block">Yillik narx</span>
                      <span className="text-sm font-bold text-indigo-400">{uni.tuition}</span>
                    </div>
                    
                    <Link 
                      href={`/universities/${uni.slug}`} 
                      className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 active:scale-95 text-white text-xs font-semibold rounded-xl no-underline transition-all"
                    >
                      Ko'rish →
                    </Link>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </main>

      <Footer />
    </div>
  );
}