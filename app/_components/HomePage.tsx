"use client";
import { useState } from "react";
import Link from "next/link";
import Header from "./Header";
import Footer from "./Footer";

const universities = [
  {
    id: 1,
    name: "Harvard University",
    city: "Cambridge, AQSh",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b",
    rank: "#4",
    tuition: "$54K",
    slug: "harvard",
  },
  {
    id: 2,
    name: "MIT",
    city: "Cambridge, AQSh",
    image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d",
    rank: "#1",
    tuition: "$57K",
    slug: "mit",
  },
  {
    id: 3,
    name: "Oxford University",
    city: "Oxford, Buyuk Britaniya",
    image: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b",
    rank: "#3",
    tuition: "$35K",
    slug: "oxford",
  },
  {
    id: 4,
    name: "Stanford University",
    city: "Palo Alto, AQSh",
    image: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3",
    rank: "#2",
    tuition: "$56K",
    slug: "stanford",
  },
  {
    id: 5,
    name: "Cambridge University",
    city: "Cambridge, Buyuk Britaniya",
    image: "https://images.unsplash.com/photo-1526129318478-62ed807ebdf9",
    rank: "#5",
    tuition: "$33K",
    slug: "cambridge",
  },
  {
    id: 6,
    name: "Tokyo University",
    city: "Tokio, Yaponiya",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf",
    rank: "#28",
    tuition: "$5K",
    slug: "tokyo",
  },
];

const navItems = [
  {
    label: "Bosh sahifa",
    href: "/",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path
          d="M3 7.5L9 2.5L15 7.5V15.5H11.5V11.5H6.5V15.5H3V7.5Z"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "Universitetlar",
    href: "/universities",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path
          d="M9 2L16 6V7H2V6L9 2Z"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
        <path
          d="M4 7V13M7 7V13M11 7V13M14 7V13"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <path
          d="M2 13H16"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    label: "Saqlanganlar",
    href: "/favorites",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path
          d="M9 14.5C9 14.5 2.5 10 2.5 6C2.5 4.067 4.067 2.5 6 2.5C7.213 2.5 8.277 3.12 9 4.07C9.723 3.12 10.787 2.5 12 2.5C13.933 2.5 15.5 4.067 15.5 6C15.5 10 9 14.5 9 14.5Z"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function HomePage() {
  const [favorites, setFavorites] = useState<number[]>([]);
  const [activeNav, setActiveNav] = useState("/");

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id],
    );
  };

  return (
    <div className="min-h-screen bg-[#060c1a] text-white">
      {/* Orbs */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-200px] left-[-100px] w-[500px] h-[500px] rounded-full opacity-20 bg-indigo-600 blur-[120px]" />
        <div className="absolute top-[40%] right-[-100px] w-[400px] h-[400px] rounded-full opacity-10 bg-purple-600 blur-[120px]" />
      </div>

      <div className="relative z-10">
        <Header />

        <div className="max-w-7xl mx-auto px-5 py-8 flex gap-7">
          {/* SIDEBAR */}
          <aside className="w-56 shrink-0">
            <div className="sticky top-24">
              {/* Logo area in sidebar */}
              <div className="mb-6 px-3">
                <p className="text-xs font-semibold tracking-widest text-white/30 uppercase">
                  Navigate
                </p>
              </div>

              <nav className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setActiveNav(item.href)}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 no-underline ${
                      activeNav === item.href
                        ? "bg-indigo-500/20 text-white border border-indigo-500/30"
                        : "text-white/50 hover:text-white hover:bg-white/[0.05]"
                    }`}
                  >
                    <span
                      className={
                        activeNav === item.href
                          ? "text-indigo-400"
                          : "text-white/40"
                      }
                    >
                      {item.icon}
                    </span>
                    {item.label}
                  </Link>
                ))}
              </nav>

              {/* Sidebar stat box */}
              <div className="mt-8 p-4 rounded-2xl bg-gradient-to-br from-indigo-950/60 to-purple-950/40 border border-indigo-500/20">
                <div className="text-xs text-white/40 mb-3 font-medium tracking-wide">
                  Statistika
                </div>
                <div className="flex flex-col gap-2.5">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-white/40">
                      Universitetlar
                    </span>
                    <span className="text-sm font-bold text-indigo-300">
                      1,000+
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-white/40">Mamlakatlar</span>
                    <span className="text-sm font-bold text-indigo-300">
                      80+
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-white/40">Saqlanganlar</span>
                    <span className="text-sm font-bold text-purple-300">
                      {favorites.length}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* MAIN CONTENT */}
          <main className="flex-1 min-w-0">
            {/* Page title */}
            <div className="mb-7">
              <h1 className="text-2xl font-bold text-white">Universitetlar</h1>
              <p className="text-sm text-white/40 mt-1">
                Dunyo bo'ylab eng yaxshi universitetlarni kashf eting
              </p>
            </div>

            {/* University Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {universities.map((uni) => (
                <div
                  key={uni.id}
                  className="rounded-2xl overflow-hidden bg-white/[0.03] border border-white/[0.07] hover:border-white/[0.14] transition-all duration-300 group"
                >
                  {/* Card image */}
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={uni.image}
                      alt={uni.name}
                      className="w-full h-full object-cover brightness-75 group-hover:brightness-90 group-hover:scale-105 transition-all duration-500"
                    />
                    {/* Rank badge */}
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-black/50 border border-white/20 text-xs font-bold text-white">
                      {uni.rank}
                    </div>
                    {/* Favorite button */}
                    <button
                      onClick={() => toggleFavorite(uni.id)}
                      className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer"
                      style={{
                        background: favorites.includes(uni.id)
                          ? "rgba(239,68,68,0.25)"
                          : "rgba(0,0,0,0.45)",
                        border: favorites.includes(uni.id)
                          ? "1px solid rgba(239,68,68,0.5)"
                          : "1px solid rgba(255,255,255,0.2)",
                      }}
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill={favorites.includes(uni.id) ? "#ef4444" : "none"}
                        className="transition-all duration-200"
                      >
                        <path
                          d="M7 12C7 12 1.5 8 1.5 4.5C1.5 2.843 2.843 1.5 4.5 1.5C5.574 1.5 6.5 2.098 7 3C7.5 2.098 8.426 1.5 9.5 1.5C11.157 1.5 12.5 2.843 12.5 4.5C12.5 8 7 12 7 12Z"
                          stroke={
                            favorites.includes(uni.id)
                              ? "#ef4444"
                              : "rgba(255,255,255,0.7)"
                          }
                          strokeWidth="1.3"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                    {/* gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d1224]/80 via-transparent to-transparent" />
                  </div>

                  {/* Card body */}
                  <div className="p-4">
                    <div className="mb-3">
                      <h3 className="text-base font-semibold text-white leading-tight">
                        {uni.name}
                      </h3>
                      <p className="text-xs text-white/45 mt-1 flex items-center gap-1">
                        <svg
                          width="11"
                          height="11"
                          viewBox="0 0 11 11"
                          fill="none"
                        >
                          <path
                            d="M5.5 1C3.567 1 2 2.567 2 4.5C2 7 5.5 10.5 5.5 10.5C5.5 10.5 9 7 9 4.5C9 2.567 7.433 1 5.5 1ZM5.5 6C4.672 6 4 5.328 4 4.5C4 3.672 4.672 3 5.5 3C6.328 3 7 3.672 7 4.5C7 5.328 6.328 6 5.5 6Z"
                            fill="currentColor"
                          />
                        </svg>
                        {uni.city}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-white/[0.06]">
                      <div>
                        <span className="text-xs text-white/30">
                          Yillik narx
                        </span>
                        <div className="text-sm font-bold text-indigo-300">
                          {uni.tuition}
                        </div>
                      </div>
                      <Link
                        href={`/universities/${uni.slug}`}
                        className="px-4 py-2 rounded-xl text-xs font-semibold text-white no-underline bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 transition-all duration-200"
                      >
                        Ko'rish →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>

        <Footer />
      </div>
    </div>
  );
}
