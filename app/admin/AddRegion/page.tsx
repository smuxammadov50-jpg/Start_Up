"use client";
import { useState, useEffect } from "react";
import axios from "axios";

export default function AddRegionPage() {
  const [regions, setRegions] = useState<any[]>([]);
  const [newRegion, setNewRegion] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editingName, setEditingName] = useState("");

  useEffect(() => { fetchRegions(); }, []);

  const fetchRegions = async () => {
    const res = await axios.get("http://localhost:4000/regions");
    setRegions(res.data);
  };

  const handleAddRegion = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newRegion.trim()) return;
    await axios.post("http://localhost:4000/regions", { name: newRegion });
    setNewRegion("");
    fetchRegions();
  };

  const handleDelete = async (id: string) => {
    if (confirm("Ushbu regionni o'chirmoqchimisiz?")) {
      await axios.delete(`http://localhost:4000/regions/${id}`);
      fetchRegions();
    }
  };

  const handleSaveEdit = async (id: string) => {
    await axios.put(`http://localhost:4000/regions/${id}`, { name: editingName });
    setEditingId(null);
    fetchRegions();
  };

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-1">🌍 Regionlarni Boshqarish</h1>
      <p className="text-xs text-white/40 mb-8 uppercase tracking-widest">Yangi hudud kiritish va tahrirlash</p>

      <form onSubmit={handleAddRegion} className="flex gap-3 mb-10 bg-white/[0.02] border border-white/10 p-5 rounded-2xl">
        <input
          type="text"
          placeholder="Yangi region nomi (Masalan: USA, Canada)"
          className="flex-1 p-3.5 bg-white/5 border border-white/10 rounded-xl text-white outline-none focus:border-indigo-500 text-sm"
          value={newRegion}
          onChange={e => setNewRegion(e.target.value)}
          required
        />
        <button type="submit" className="px-6 py-3.5 bg-indigo-600 hover:bg-indigo-500 font-bold rounded-xl transition cursor-pointer">
          Qo'shish ➕
        </button>
      </form>

      <div className="bg-white/[0.02] border border-white/5 rounded-2xl overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-white/10 bg-white/[0.02] text-xs uppercase tracking-wider text-white/40">
              <th className="p-4">Region nomi</th>
              <th className="p-4 text-right">Amallar (Actions)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5 text-sm">
            {regions.map((reg) => (
              <tr key={reg.id} className="hover:bg-white/[0.01] transition">
                <td className="p-4">
                  {editingId === reg.id ? (
                    <input
                      type="text"
                      className="p-1.5 bg-white/10 border border-indigo-500 rounded text-white outline-none text-sm"
                      value={editingName}
                      onChange={e => setEditingName(e.target.value)}
                    />
                  ) : (
                    reg.name
                  )}
                </td>
                <td className="p-4 text-right flex justify-end gap-2">
                  {editingId === reg.id ? (
                    <>
                      <button onClick={() => handleSaveEdit(reg.id)} className="px-3 py-1.5 bg-green-600 text-xs font-semibold rounded-lg hover:bg-green-500">Save</button>
                      <button onClick={() => setEditingId(null)} className="px-3 py-1.5 bg-white/10 text-xs font-semibold rounded-lg hover:bg-white/20">Cancel</button>
                    </>
                  ) : (
                    <>
                      <button onClick={() => { setEditingId(reg.id); setEditingName(reg.name); }} className="px-3 py-1.5 bg-indigo-500/10 text-indigo-400 text-xs font-semibold rounded-lg hover:bg-indigo-500/20">Edit ✏️</button>
                      <button onClick={() => handleDelete(reg.id)} className="px-3 py-1.5 bg-red-500/10 text-red-400 text-xs font-semibold rounded-lg hover:bg-red-500/20">Delete 🗑️</button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}