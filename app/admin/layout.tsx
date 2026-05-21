"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const isLogged = localStorage.getItem("adminLogged");
    if (isLogged !== "true") {
      router.push("/admin/login");
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("adminLogged");
    router.push("/admin/login");
  };

  const menuItems = [
    { name: "🏠 Dashboard", path: "/admin" },
    { name: "➕ Add University", path: "/admin/AddUniversity" },
    { name: "🌍 Add Region", path: "/admin/AddRegion" },
    { name: "📚 See Universities", path: "/admin/SeeUniversities" },
  ];

  // Agar login sahifasida bo'lsa, sidebar ko'rinmasligi kerak
  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  return (
    <div
      className="admin-layout-wrapper"
      style={{
        display: "flex",
        minHeight: "100vh",
        backgroundColor: "#060c1a",
        color: "white",
      }}
    >
      {/* SIDEBAR — Qat'iy o'lcham va joylashuv */}
      <aside
        style={{
          width: "280px",
          minWidth: "280px",
          backgroundColor: "#081021",
          borderRight: "1px solid rgba(255, 255, 255, 0.1)",
          padding: "24px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          position: "fixed",
          height: "100vh",
          top: 0,
          left: 0,
          zIndex: 20,
          boxSizing: "border-box",
        }}
      >
        <div style={{ flexGrow: 1 }}>
          <div
            className="flex items-center gap-3 mb-10 px-2"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "40px",
            }}
          >
            <div
              className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-lg shadow-lg"
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "12px",
                background: "linear-gradient(to top right, #4f46e5, #8b5cf6)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              ⚙️
            </div>
            <div>
              <span
                className="font-bold text-lg tracking-wide block"
                style={{
                  fontWeight: "bold",
                  fontSize: "18px",
                  display: "block",
                  color: "white",
                }}
              >
                UniSearch
              </span>
              <span
                className="text-[10px] text-white/30 uppercase tracking-widest font-semibold"
                style={{
                  fontSize: "10px",
                  color: "rgba(255,255,255,0.3)",
                  textTransform: "uppercase",
                  letterSpacing: "1.5px",
                }}
              >
                Admin Panel
              </span>
            </div>
          </div>

          <nav style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            {menuItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    padding: "14px",
                    borderRadius: "12px",
                    fontSize: "14px",
                    fontWeight: "500",
                    textDecoration: "none",
                    transition: "all 0.2s",
                    backgroundColor: isActive ? "#4f46e5" : "transparent",
                    color: isActive ? "white" : "rgba(255, 255, 255, 0.5)",
                    boxShadow: isActive
                      ? "0 10px 15px -3px rgba(79, 70, 229, 0.4)"
                      : "none",
                  }}
                  className="sidebar-link"
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>

        <button
          onClick={handleLogout}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            padding: "14px",
            color: "#f87171",
            backgroundColor: "transparent",
            border: "1px solid transparent",
            borderRadius: "12px",
            fontSize: "14px",
            fontWeight: "600",
            cursor: "pointer",
            transition: "0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(239, 68, 68, 0.1)";
            e.currentTarget.style.borderColor = "rgba(239, 68, 68, 0.2)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "transparent";
            e.currentTarget.style.borderColor = "transparent";
          }}
        >
          Chiqish (Logout) 🚪
        </button>
      </aside>

      {/* ASOSIY KONTENT MAYDONI — Bootstrap sindira olmaydigan qat'iy chap padding */}
      <main
        style={{
          flex: 1,
          paddingLeft: "320px" /* Sidebar kengligi (280px) + 40px masofa */,
          paddingTop: "40px",
          paddingRight: "40px",
          paddingBottom: "40px",
          minHeight: "100vh",
          boxSizing: "border-box",
        }}
      >
        {children}
      </main>
    </div>
  );
}
