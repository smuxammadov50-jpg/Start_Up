"use client";
import { useState, useEffect } from "react";
import axios from "axios";

export default function SeeUniversitiesPage() {
  const [unis, setUnis] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUni, setSelectedUni] = useState<any>(null);

  useEffect(() => { fetchUnis(); }, []);

  const fetchUnis = async () => {
    const res = await axios.get("http://localhost:4000/universities");
    setUnis(res.data);
  };

  const handleDelete = async (id: string) => {
    if (confirm("Ushbu universitetni o'chirmoqchimisiz?")) {
      await axios.delete(`http://localhost:4000/universities/${id}`);
      fetchUnis();
    }
  };

  const openEditModal = (uni: any) => {
    setSelectedUni({ ...uni });
    setIsModalOpen(true);
  };

  const handleUpdateUni = async (e: React.FormEvent) => {
    e.preventDefault();
    await axios.put(`http://localhost:4000/universities/${selectedUni.id}`, selectedUni);
    setIsModalOpen(false);
    fetchUnis();
    alert("Ma'lumotlar yangilandi! 🔄");
  };

  // Live Qidiruv (Search filter)
  const filteredUnis = unis.filter(u => u.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="max-w-5xl mx-auto relative">
      <h1 className="text-3xl font-bold mb-1">📚 Universitetlar Ro'yxati</h1>
      <p className="text-xs text-white/40 mb-8 uppercase tracking-widest">Ma'lumotlar bazasini boshqarish</p>

      {/* SEARCH INPUT */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="🔍 Universitet nomi bo'yicha qidirish..."
          className="w-full max-w-md p-3.5 bg-white/5 border border-white/10 rounded-xl text-white outline-none focus:border-indigo-500 text-sm"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>

      {/* JADVAL (TABLE) */}
      <div className="bg-white/[0.02] border border-white/5 rounded-2xl overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-white/10 bg-white/[0.02] text-xs uppercase tracking-wider text-white/40">
              <th className="p-4">Rasm</th>
              <th className="p-4">Universitet Nomi</th>
              <th className="p-4">QS Rank</th>
              <th className="p-4">Shahar / Region</th>
              <th className="p-4 text-right">Amallar</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5 text-sm">
            {filteredUnis.map((uni) => (
              <tr key={uni.id} className="hover:bg-white/[0.01] transition">
                <td className="p-4">
                  <img src={uni.image} alt="" className="w-10 h-10 rounded-lg object-cover" />
                </td>
                <td className="p-4 font-semibold text-white/90">{uni.name}</td>
                <td className="p-4 text-indigo-400 font-bold">{uni.rankQS || "N/A"}</td>
                <td className="p-4 text-white/50">{uni.city}</td>
                <td className="p-4 text-right flex justify-end gap-2 mt-1">
                  <button onClick={() => openEditModal(uni)} className="px-3 py-1.5 bg-indigo-500/10 text-indigo-400 text-xs font-bold rounded-lg hover:bg-indigo-500/20 cursor-pointer">Edit ✏️</button>
                  <button onClick={() => handleDelete(uni.id)} className="px-3 py-1.5 bg-red-500/10 text-red-400 text-xs font-bold rounded-lg hover:bg-red-500/20 cursor-pointer">Delete 🗑️</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* TAHRIRLASH MODAL OYNASI (EDIT MODAL) */}
      {isModalOpen && selectedUni && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-5 z-50">
          <div className="bg-[#081021] border border-white/10 rounded-[28px] max-w-2xl w-full max-h-[85vh] overflow-y-auto p-8 custom-scrollbar">
            <h2 className="text-xl font-bold mb-1 text-white">Universitetni Tahrirlash</h2>
            <p className="text-xs text-white/40 mb-6 uppercase tracking-widest">{selectedUni.name}</p>

            <form onSubmit={handleUpdateUni} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-white/40 block mb-1">Universitet nomi</label>
                <input type="text" className="modal-input" value={selectedUni.name} onChange={e => setSelectedUni({...selectedUni, name: e.target.value})} required />
              </div>
              <div>
                <label className="text-xs text-white/40 block mb-1">Slug</label>
                <input type="text" className="modal-input" value={selectedUni.slug} onChange={e => setSelectedUni({...selectedUni, slug: e.target.value})} required />
              </div>
              <div>
                <label className="text-xs text-white/40 block mb-1">Shahar (City)</label>
                <input type="text" className="modal-input" value={selectedUni.city} onChange={e => setSelectedUni({...selectedUni, city: e.target.value})} required />
              </div>
              <div>
                <label className="text-xs text-white/40 block mb-1">Yillik To'lov</label>
                <input type="text" className="modal-input" value={selectedUni.tuition} onChange={e => setSelectedUni({...selectedUni, tuition: e.target.value})} />
              </div>
              <div>
                <label className="text-xs text-white/40 block mb-1">QS Dunyo Reytingi</label>
                <input type="text" className="modal-input" value={selectedUni.rankQS} onChange={e => setSelectedUni({...selectedUni, rankQS: e.target.value})} />
              </div>
              <div>
                <label className="text-xs text-white/40 block mb-1">THE Reytingi</label>
                <input type="text" className="modal-input" value={selectedUni.rankTHE} onChange={e => setSelectedUni({...selectedUni, rankTHE: e.target.value})} />
              </div>
              <div>
                <label className="text-xs text-white/40 block mb-1">Min IELTS</label>
                <input type="text" className="modal-input" value={selectedUni.minIELTS} onChange={e => setSelectedUni({...selectedUni, minIELTS: e.target.value})} />
              </div>
              <div>
                <label className="text-xs text-white/40 block mb-1">Min SAT</label>
                <input type="text" className="modal-input" value={selectedUni.minSAT} onChange={e => setSelectedUni({...selectedUni, minSAT: e.target.value})} />
              </div>
              <div className="sm:col-span-2">
                <label className="text-xs text-white/40 block mb-1">Rasm URL</label>
                <input type="text" className="modal-input" value={selectedUni.image} onChange={e => setSelectedUni({...selectedUni, image: e.target.value})} required />
              </div>

              <div className="sm:col-span-2 flex gap-3 mt-4">
                <button type="submit" className="flex-1 p-3.5 bg-indigo-600 hover:bg-indigo-500 font-bold rounded-xl text-sm text-white cursor-pointer">
                  O'zgarishlarni Saqlash 💾
                </button>
                <button type="button" onClick={() => setIsModalOpen(false)} className="px-5 py-3.5 bg-white/5 hover:bg-white/10 text-white rounded-xl text-sm font-semibold cursor-pointer">
                  Yopish
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <style jsx>{`
        .modal-input {
          width: 100%;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 12px 16px;
          border-radius: 12px;
          color: white;
          outline: none;
          font-size: 13px;
        }
        .modal-input:focus { border-color: #4f46e5; }
      `}</style>
    </div>
  );
}