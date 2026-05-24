import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

export const metadata = {
  title: "UniSearch - Xalqaro Universitetlar Platformasi",
  description: "Dunyo bo'ylab eng yaxshi universitetlarni kashf eting",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uz">
      <body className="bg-[#05070f] text-white min-h-screen flex flex-col justify-between">
        <div>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}