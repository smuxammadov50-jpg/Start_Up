"use client";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { PortfolioData } from "../page";

interface CardProps {
  data: PortfolioData;
  index: number;
  onDelete: (id: string) => void;
}

export default function PortfolioCard({ data, index, onDelete }: CardProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    contentRef,
    documentTitle: `${data.name}_Portfolio`,
  });

  return (
    <div className="bg-[#0b1120] border border-white/[0.05] rounded-[32px] p-6 shadow-xl relative group">
      
      <div className="flex items-center justify-between border-b border-white/[0.05] pb-4 mb-6">
        <span className="text-xs font-bold text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 rounded-md">
          PORTFOLIO #{index}
        </span>
        <div className="flex items-center gap-2">
          <button
            onClick={() => handlePrint()}
            className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold transition-all flex items-center gap-1 cursor-pointer outline-none shadow-lg shadow-emerald-600/10"
          >
            🖨️ Print Portfolio
          </button>
          <button
            onClick={() => onDelete(data.id)}
            className="px-4 py-2 bg-red-600/10 hover:bg-red-600 text-red-400 hover:text-white border border-red-500/20 rounded-xl text-xs font-bold transition-all cursor-pointer outline-none"
          >
            🗑️ O'chirish
          </button>
        </div>
      </div>

      <div 
        ref={contentRef} 
        className="p-8 rounded-2xl bg-[#05070f] border border-white/[0.04] flex flex-col md:flex-row gap-8 items-start relative print:bg-white print:text-black print:p-6 print:border-none"
      >
        {/* AVATAR / RASM */}
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden bg-white/5 border border-white/10 shrink-0 mx-auto md:mx-0 print:border-black/20">
          <img
            src={data.image || "https://images.unsplash.com/photo-1534528741775-53994a69daeb"}
            alt={data.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* FOYDALANUVChI MA'LUMOTLARI */}
        <div className="flex-grow w-full text-center md:text-left">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
            <h2 className="text-2xl font-black text-white tracking-tight print:text-black">
              {data.name}
            </h2>
            <span className="text-xs px-2.5 py-0.5 font-bold tracking-wider bg-purple-500/10 text-purple-400 border border-purple-500/20 rounded-md md:self-start w-fit mx-auto md:mx-0 print:text-purple-700 print:border-purple-300">
              {data.age} yosh
            </span>
          </div>

          <p className="text-md font-bold text-indigo-400 mb-1 print:text-indigo-700">{data.job}</p>
          <p className="text-xs text-white/50 mb-4 print:text-black/60">🏢 {data.company || "Mustaqil izlanuvchi"}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-white/[0.05] pt-4 print:border-black/10">
            <div>
              <span className="text-[10px] text-white/30 uppercase font-bold tracking-wider block mb-1 print:text-black/40">Aloqa va Manzil</span>
              <span className="text-sm text-white/80 print:text-black font-medium block">{data.phone || "Kiritilmagan"}</span>
              <span className="text-xs text-white/40 print:text-black/60 block mt-0.5">📍 {data.address || "Manzil kiritilmagan"}</span>
            </div>
            
            {data.interests && (
              <div>
                <span className="text-[10px] text-white/30 uppercase font-bold tracking-wider block mb-1 print:text-black/40">Qiziqishlar / Hobbi</span>
                <div className="flex flex-wrap gap-1 justify-center md:justify-start">
                  {data.interests.split(",").map((interest, idx) => (
                    <span key={idx} className="bg-white/5 border border-white/10 text-white/70 text-[10px] px-2 py-0.5 rounded print:bg-black/5 print:text-black print:border-black/10">
                      {interest.trim()}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* TADBIRLAR VA PROYEKTLAR BLOKI */}
          {data.projects && (
            <div className="mt-5 p-4 rounded-xl bg-purple-600/5 border border-purple-500/10 print:bg-black/[0.02] print:border-black/10 text-left">
              <h4 className="text-xs font-bold text-purple-400 uppercase tracking-widest mb-1 print:text-purple-700">
                ⭐ Erishilgan yutuqlar va Tadbirlar
              </h4>
              <p className="text-xs text-white/60 leading-relaxed print:text-black/80">
                {data.projects}
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}