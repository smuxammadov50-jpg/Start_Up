"use client";
import { useState, useEffect, FormEvent } from "react";
import axios from "axios";

export default function AddUniversityPage() {
  const [regions, setRegions] = useState<any[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    slug: "",
    city: "",
    region: "",
    isAccepting: "true",
    foundedYear: "",
    type: "Xususiy",
    tuition: "",
    rankQS: "",
    rankTHE: "",
    acceptanceRate: "",
    employmentRate: "",
    degreeTypes: "Bakalavr · Magistr · Doktoratura",
    duration: "4 yil",
    language: "Ingliz tili",
    popularMajors: "",
    totalStudents: "",
    totalTeachers: "",
    grantPercentage: "",
    needBasedGrant: "Bor",
    meritBasedGrant: "Bor",
    minIELTS: "",
    minTOEFL: "",
    minSAT: "",
    minGPA: "",
    annualApps: "",
    annualEnroll: "",
    appFee: "",
    platform: "Common App",
    locationType: "Urban",
    dormitory: "",
    livingCost: "",
    intlStudents: "",
    deadline1: "",
    deadline2: "",
    deadline3: "",
    resultDate: "",
    avgSalary: "",
    website: "",
    image: "",
  });

  useEffect(() => {
    axios
      .get("http://localhost:4000/regions")
      .then((res) => setRegions(res.data))
      .catch(() => console.log("Regionlarni yuklashda xatolik"));
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:4000/universities", formData);
      alert("Universitet muvaffaqiyatli saqlandi! 🎉");
    } catch {
      alert("Xatolik yuz berdi.");
    }
  };

  return (
    <div
      className="form-container"
      style={{ maxWidth: "900px", margin: "0 auto" }}
    >
      <h1
        style={{
          fontSize: "32px",
          fontWeight: "bold",
          color: "white",
          marginBottom: "4px",
        }}
      >
        ➕ Yangi Universitet Qo'shish
      </h1>
      <p
        style={{
          fontSize: "12px",
          color: "rgba(255,255,255,0.4)",
          textTransform: "uppercase",
          letterSpacing: "1.5px",
          marginBottom: "32px",
        }}
      >
        BARCHA KO'RSATKICHLARNI DB.JSON GA YOZISH
      </p>

      <form onSubmit={handleSubmit} className="responsive-form">
        {/* 1. ASOSIY BLOK */}
        <div className="section-header" style={{ color: "#818cf8" }}>
          🏫 Asosiy Blok
        </div>
        <input
          type="text"
          placeholder="Universitet nomi (Masalan: Harvard University)"
          className="admin-input"
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Slug (Masalan: harvard)"
          className="admin-input"
          onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Shahar (City - Masalan: Cambridge, Massachusetts)"
          className="admin-input"
          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
          required
        />

        <select
          className="admin-input text-white"
          onChange={(e) => setFormData({ ...formData, region: e.target.value })}
          required
          style={{ color: "white" }}
        >
          <option value="">Davlatni tanlang</option>
          {regions.map((reg) => (
            <option
              key={reg.id}
              value={reg.name}
              style={{ backgroundColor: "#060c1a" }}
            >
              {reg.name}
            </option>
          ))}
        </select>

        <select
          className="admin-input text-white"
          onChange={(e) =>
            setFormData({ ...formData, isAccepting: e.target.value })
          }
          style={{ color: "white" }}
        >
          <option value="true">✓ Ariza qabul qilinmoqda</option>
          <option value="false">✕ Qabul yopilgan</option>
        </select>

        <input
          type="text"
          placeholder="Tashkil etilgan yili (Masalan: 1636-yilda tashkil etilgan)"
          className="admin-input"
          onChange={(e) =>
            setFormData({ ...formData, foundedYear: e.target.value })
          }
        />

        <select
          className="admin-input text-white"
          onChange={(e) => setFormData({ ...formData, type: e.target.value })}
          style={{ color: "white" }}
        >
          <option value="Xususiy">Xususiy tadqiqot universiteti</option>
          <option value="Davlat">Davlat universiteti</option>
        </select>

        {/* 2. REYTING VA TO'LOVLAR */}
        <div className="section-header" style={{ color: "#c084fc" }}>
          📊 Reyting va To'lovlar
        </div>
        <input
          type="text"
          placeholder="QS Rank (Masalan: #4)"
          className="admin-input"
          onChange={(e) => setFormData({ ...formData, rankQS: e.target.value })}
        />
        <input
          type="text"
          placeholder="THE Rank (Masalan: #2)"
          className="admin-input"
          onChange={(e) =>
            setFormData({ ...formData, rankTHE: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Yillik to'lov narxi (Masalan: $54K)"
          className="admin-input"
          onChange={(e) =>
            setFormData({ ...formData, tuition: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Qabul foizi (Acceptance Rate - Masalan: 4%)"
          className="admin-input"
          onChange={(e) =>
            setFormData({ ...formData, acceptanceRate: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Ish topish foizi (Masalan: 95%)"
          className="admin-input"
          onChange={(e) =>
            setFormData({ ...formData, employmentRate: e.target.value })
          }
        />
        <div className="empty-slot"></div>

        {/* 3. TA'LIM DASTURLARI VA STATISTIKA */}
        <div className="section-header" style={{ color: "#60a5fa" }}>
          🎓 Ta'lim Dasturlari va Statistika
        </div>
        <input
          type="text"
          placeholder="Diplom turlari"
          className="admin-input"
          value={formData.degreeTypes}
          onChange={(e) =>
            setFormData({ ...formData, degreeTypes: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="O'qish muddati"
          className="admin-input"
          value={formData.duration}
          onChange={(e) =>
            setFormData({ ...formData, duration: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="O'qitish tili"
          className="admin-input"
          value={formData.language}
          onChange={(e) =>
            setFormData({ ...formData, language: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Eng mashhur yo'nalishlar"
          className="admin-input"
          onChange={(e) =>
            setFormData({ ...formData, popularMajors: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Jami talabalar soni"
          className="admin-input"
          onChange={(e) =>
            setFormData({ ...formData, totalStudents: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="O'qituvchilar soni"
          className="admin-input"
          onChange={(e) =>
            setFormData({ ...formData, totalTeachers: e.target.value })
          }
        />

        {/* 4. MOLIYAVIY YORDAM VA GRANTLAR */}
        <div className="section-header" style={{ color: "#2dd4bf" }}>
          💰 Moliyaviy Yordam va Grantlar
        </div>
        <input
          type="text"
          placeholder="To'liq grant mavjudligi foizi (Masalan: 100%)"
          className="admin-input"
          onChange={(e) =>
            setFormData({ ...formData, grantPercentage: e.target.value })
          }
        />
        <select
          className="admin-input text-white"
          onChange={(e) =>
            setFormData({ ...formData, needBasedGrant: e.target.value })
          }
          style={{ color: "white" }}
        >
          <option value="Bor">Ehtiyojga asoslangan grant: Bor</option>
          <option value="Yo'q">Ehtiyojga asoslangan grant: Yo'q</option>
        </select>
        <select
          className="admin-input text-white"
          onChange={(e) =>
            setFormData({ ...formData, meritBasedGrant: e.target.value })
          }
          style={{ color: "white" }}
        >
          <option value="Bor">Yutuqlarga asoslangan grant: Bor</option>
          <option value="Yo'q">Yutuqlarga asoslangan grant: Yo'q</option>
        </select>
        <div className="empty-slot"></div>

        {/* 5. QABUL TALABLARI */}
        <div className="section-header" style={{ color: "#fbbf24" }}>
          📋 Qabul Talablari (Minimal ballar)
        </div>
        <input
          type="text"
          placeholder="Min IELTS (Masalan: 7.5+)"
          className="admin-input"
          onChange={(e) =>
            setFormData({ ...formData, minIELTS: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Min TOEFL (Masalan: 100+)"
          className="admin-input"
          onChange={(e) =>
            setFormData({ ...formData, minTOEFL: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Min SAT (Masalan: 1500+)"
          className="admin-input"
          onChange={(e) => setFormData({ ...formData, minSAT: e.target.value })}
        />
        <input
          type="text"
          placeholder="Min GPA (Masalan: 3.8+)"
          className="admin-input"
          onChange={(e) => setFormData({ ...formData, minGPA: e.target.value })}
        />
        <input
          type="text"
          placeholder="Yillik arizalar soni"
          className="admin-input"
          onChange={(e) =>
            setFormData({ ...formData, annualApps: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Yillik qabul qilinganlar"
          className="admin-input"
          onChange={(e) =>
            setFormData({ ...formData, annualEnroll: e.target.value })
          }
        />

        {/* 6. ARIZA TOPSHIRISH MUDDATLARI */}
        <div className="section-header" style={{ color: "#fb923c" }}>
          ⏳ Ariza Topshirish va Kampus Hayoti
        </div>
        <input
          type="text"
          placeholder="Erta ariza muddati (Early Action)"
          className="admin-input"
          onChange={(e) =>
            setFormData({ ...formData, deadline1: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Oddiy ariza muddati (Regular Decision)"
          className="admin-input"
          onChange={(e) =>
            setFormData({ ...formData, deadline2: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Qabul natijalari e'lon qilinishi"
          className="admin-input"
          onChange={(e) =>
            setFormData({ ...formData, resultDate: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Ariza to'lovi (App Fee)"
          className="admin-input"
          onChange={(e) => setFormData({ ...formData, appFee: e.target.value })}
        />
        <input
          type="text"
          placeholder="Ariza topshirish platformasi"
          className="admin-input"
          value={formData.platform}
          onChange={(e) =>
            setFormData({ ...formData, platform: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Kampus joylashuvi turi"
          className="admin-input"
          value={formData.locationType}
          onChange={(e) =>
            setFormData({ ...formData, locationType: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Yotoqxona ma'lumoti"
          className="admin-input"
          onChange={(e) =>
            setFormData({ ...formData, dormitory: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Yashash xarajati"
          className="admin-input"
          onChange={(e) =>
            setFormData({ ...formData, livingCost: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Chet ellik talabalar foizi"
          className="admin-input"
          onChange={(e) =>
            setFormData({ ...formData, intlStudents: e.target.value })
          }
        />
        <div className="empty-slot"></div>

        {/* 7. KARYERA VA MEDIA */}
        <div className="section-header" style={{ color: "#34d399" }}>
          🖼️ Karyera va Media (Rasm)
        </div>
        <input
          type="text"
          placeholder="Birinchi yildagi o'rtacha maosh"
          className="admin-input"
          onChange={(e) =>
            setFormData({ ...formData, avgSalary: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Rasm URL manzili (Link)"
          className="admin-input"
          onChange={(e) => setFormData({ ...formData, image: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Rasmiy Veb-sayt Linki"
          className="admin-input full-width"
          onChange={(e) =>
            setFormData({ ...formData, website: e.target.value })
          }
          style={{ gridColumn: "span 2" }}
        />

        {/* SAQLASH TUGMASI */}
        <button type="submit" className="submit-btn">
          Saqlash 💾
        </button>
      </form>

      <style jsx>{`
        .responsive-form {
          display: grid !important;
          grid-template-columns: repeat(2, 1fr) !important;
          gap: 20px !important;
          background: rgba(255, 255, 255, 0.02) !important;
          border: 1px solid rgba(255, 255, 255, 0.1) !important;
          padding: 32px !important;
          border-radius: 32px !important;
          box-sizing: border-box;
        }
        .section-header {
          grid-column: span 2 !important;
          font-weight: 600 !important;
          font-size: 14px !important;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05) !important;
          padding-bottom: 4px !important;
          margin-top: 16px !important;
        }
        .admin-input {
          width: 100% !important;
          max-width: 100% !important;
          background: rgba(255, 255, 255, 0.03) !important;
          border: 1px solid rgba(255, 255, 255, 0.08) !important;
          padding: 14px 18px !important;
          border-radius: 14px !important;
          color: white !important;
          outline: none !important;
          font-size: 13px !important;
          transition: all 0.2s;
          box-sizing: border-box;
        }
        .admin-input:focus {
          border-color: #4f46e5 !important;
          background: rgba(255, 255, 255, 0.06) !important;
        }
        .submit-btn {
          grid-column: span 2 !important;
          margin-top: 16px !important;
          padding: 16px !important;
          border-radius: 16px !important;
          font-weight: bold !important;
          background: linear-gradient(to right, #4f46e5, #8b5cf6) !important;
          color: white !important;
          border: none !important;
          cursor: pointer !important;
          box-shadow: 0 10px 15px -3px rgba(79, 70, 229, 0.3) !important;
          transition: 0.2s;
        }
        .submit-btn:hover {
          opacity: 0.9;
        }
        .submit-btn:active {
          transform: scale(0.98);
        }
        @media (max-w: 768px) {
          .responsive-form {
            grid-template-columns: 1fr !important;
          }
          .section-header,
          .submit-btn,
          .full-width {
            grid-column: span 1 !important;
          }
          .empty-slot {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}