export default function AdminDashboard() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 relative overflow-hidden">
      
      {/* Orqa fondagi nafis va yashirin neon nurlar (Yozuvni chiroyli ko'rsatish uchun) */}
      <div className="absolute w-[300px] h-[300px] bg-indigo-600/10 rounded-full blur-[120px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10" />
      <div className="absolute w-[200px] h-[200px] bg-purple-600/10 rounded-full blur-[100px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 animate-pulse" />

      {/* Asosiy Premium Sarlavha */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight uppercase leading-tight sm:leading-tight md:leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-200 to-purple-400 drop-shadow-[0_0_30px_rgba(99,102,241,0.2)]">
        Admin panelga <br />
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
          xush kelibsiz!
        </span>
      </h1>
      
    </div>
  );
}