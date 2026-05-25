import "./globals.css";
import { FavoritesProvider } from "./context/FavoritesContext";

export const metadata = {
  title: "UniSearch - Universitetlar Platformasi",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uz">
      {/* Orqa fonga daxshatli chiroyli qorong'u kosmik effekt beramiz */}
      <body className="bg-[#05070f] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#0d1527] via-[#05070f] to-[#02040a] text-white min-h-screen antialiased">
        <FavoritesProvider>
          <main>{children}</main>
        </FavoritesProvider>
      </body>
    </html>
  );
}