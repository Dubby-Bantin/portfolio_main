import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import { poppins } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Chidubem Desmond | Frontend Developer",
  description:
    "Showcasing my projects, skills, and experience in frontend development.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased dark`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
