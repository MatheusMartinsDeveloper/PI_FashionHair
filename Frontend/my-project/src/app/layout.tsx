import "./styles/globals.css";
import type { Metadata } from "next";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Carol Fashion Hair",
  description: "Salão de Beleza Carol Fashion Hair - Beleza, Bem-Estar e Cuidados",
  keywords: ["salão de beleza", "corte de cabelo", "penteados", "maquiagem", "manicure", "pedicure"],
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png"
  }
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="pt-br">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}