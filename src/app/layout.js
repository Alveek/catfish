import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "У сома усы",
  description: "Приложение для самостоятельного чтения по словам",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={`${inter.className} bg-slate-50`}>{children}</body>
    </html>
  );
}
