"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

export interface University {
  id: string;
  name: string;
  city: string;
  region: string;
  tuition: string;
  image?: string;
}

interface ContextType {
  favorites: University[];
  toggleFavorite: (uni: University) => void;
  isFavorite: (id: string) => boolean;
}

const FavoritesContext = createContext<ContextType | undefined>(undefined);

export function FavoritesProvider({ children }: { children: React.ReactNode }) {
  // Server va Client urushmasligi uchun boshlang'ich qiymat doim bo'sh massiv bo'ladi
  const [favorites, setFavorites] = useState<University[]>([]);

  // Sahifa brauzerda to'liq yuklangandan keyingina localStorage'dan o'qiymiz
  useEffect(() => {
    const saved = localStorage.getItem("uni_favorites");
    if (saved) {
      try {
        setFavorites(JSON.parse(saved));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  // Har safar o'zgarganda xotirani yangilash
  const toggleFavorite = (uni: University) => {
    setFavorites((prev) => {
      const updated = prev.some((item) => item.id === uni.id)
        ? prev.filter((item) => item.id !== uni.id)
        : [...prev, uni];
      localStorage.setItem("uni_favorites", JSON.stringify(updated));
      return updated;
    });
  };

  const isFavorite = (id: string) => favorites.some((item) => item.id === id);

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) throw new Error("Provider topilmadi!");
  return context;
};