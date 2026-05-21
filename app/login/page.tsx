"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await axios.get("http://localhost:4000/admin");
      const data = res.data;

      let adminLogin = "";
      let adminPassword = "";

      if (Array.isArray(data) && data.length > 0) {
        adminLogin = data[0].login;
        adminPassword = data[0].password;
      } else if (data && data.login) {
        adminLogin = data.login;
        adminPassword = data.password;
      }

      if (email.trim() === adminLogin && password === adminPassword) {
        localStorage.setItem("adminLogged", "true");
        router.push("/admin/AddUniversity"); // Yo'nalishni aniq yozdik
      } else {
        setError("Login yoki parol noto'g'ri!");
      }
    } catch (err) {
      setError("json-server yoqilmagan! (Port: 4000)");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <div className="login-header">
          <div className="login-logo">⚙️</div>
          <h1 className="login-title">Tizimga <span>Kirish</span></h1>
          <p className="login-subtitle">Admin Panel</p>
        </div>

        {error && <div className="login-error">{error}</div>}

        <form onSubmit={handleLogin} className="login-form">
          <input
            type="email"
            placeholder="Admin Email"
            className="custom-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          
          <input
            type="password"
            placeholder="Parol"
            className="custom-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" disabled={loading} className="custom-button">
            {loading ? "Kirilmoqda..." : "Kirish →"}
          </button>
        </form>
      </div>

      <style jsx>{`
        .login-wrapper {
          min-height: screen;
          height: 100vh;
          background-color: #060c1a !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          padding: 16px !important;
          box-sizing: border-box;
          font-family: sans-serif;
        }
        .login-card {
          width: 100% !important;
          max-width: 320px !important; /* Kenglik qat'iy belgilandi */
          background: rgba(255, 255, 255, 0.03) !important;
          border: 1px solid rgba(255, 255, 255, 0.1) !important;
          padding: 24px !important;
          border-radius: 20px !important;
          box-shadow: 0 10px 25px rgba(0,0,0,0.3) !important;
          backdrop-filter: blur(12px);
        }
        .login-header {
          text-align: center !important;
          margin-bottom: 20px !important;
        }
        .login-logo {
          width: 44px;
          height: 44px;
          background: linear-gradient(135deg, #4f46e5, #8b5cf6);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          margin: 0 auto 10px auto;
        }
        .login-title {
          font-size: 20px !important;
          font-weight: 700 !important;
          color: white !important;
          margin: 0 !important;
        }
        .login-title span {
          color: #818cf8 !important;
        }
        .login-subtitle {
          font-size: 9px !important;
          color: rgba(255,255,255,0.4) !important;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          margin-top: 4px !important;
        }
        .login-error {
          background: rgba(239, 68, 68, 0.1) !important;
          border: 1px solid rgba(239, 68, 68, 0.2) !important;
          color: #f87171 !important;
          font-size: 11px !important;
          padding: 8px !important;
          border-radius: 8px !important;
          text-align: center !important;
          margin-bottom: 12px !important;
        }
        .login-form {
          display: flex !important;
          flex-direction: column !important;
          gap: 12px !important;
        }
        .custom-input {
          width: 100% !important;
          max-width: 100% !important;
          padding: 11px 14px !important;
          background: rgba(255, 255, 255, 0.05) !important;
          border: 1px solid rgba(255, 255, 255, 0.1) !important;
          border-radius: 10px !important;
          color: white !important;
          font-size: 13px !important;
          outline: none !important;
          transition: all 0.2s;
        }
        .custom-input:focus {
          border-color: #6366f1 !important;
          background: rgba(255, 255, 255, 0.08) !important;
        }
        .custom-button {
          width: 100% !important;
          padding: 11px !important;
          background: #4f46e5 !important;
          color: white !important;
          border: none !important;
          border-radius: 10px !important;
          font-size: 13px !important;
          font-weight: 600 !important;
          cursor: pointer !important;
          transition: all 0.2s;
        }
        .custom-button:hover {
          background: #4338ca !important;
        }
        .custom-button:disabled {
          opacity: 0.5 !important;
          cursor: not-allowed !important;
        }
      `}</style>
    </div>
  );
}