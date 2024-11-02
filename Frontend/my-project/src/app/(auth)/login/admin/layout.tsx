import "../../../styles/globals.css";
import "primeicons/primeicons.css";
import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "Carol Fashion Hair",
  description:
    "Salão de Beleza Carol Fashion Hair - Beleza, Bem-Estar e Cuidados",
  keywords: [
    "salão de beleza",
    "corte de cabelo",
    "penteados",
    "maquiagem",
    "manicure",
    "pedicure",
  ],
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode; }) {
  return (
    <ClerkProvider>
      <html lang="pt-br">
        <body>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}