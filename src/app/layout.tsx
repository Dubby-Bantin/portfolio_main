import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import { poppins } from "@/lib/fonts";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.cyberdezrealm.com/"),
  title: {
    default: "CyberDezRealm – Front-End Web Developer Portfolio",
    template: `%s | CyberDezRealm`,
  },
  description:
    "CyberDezRealm is the personal portfolio of a skilled front-end web developer specializing in modern web technologies, responsive design, and scalable UI/UX solutions.",
  keywords: [
    "CyberDezRealm",
    "front-end developer portfolio",
    "Next.js developer",
    "React developer",
    "JavaScript developer",
    "Atlanta web developer",
    "remote web developer",
    "UI/UX developer",
    "responsive web design",
    "Tailwind CSS",
    "web performance optimization",
    "clean code practices",
    "SEO-friendly web development",
    "developer portfolio site",
    "modern web developer",
    "front-end engineer",
    "HTML CSS JavaScript",
    "developer for hire",
    "personal web projects",
    "open-source developer",
    "freelance front-end developer",
    "web developer portfolio 2025",
    "digital portfolio",
    "accessible web design",
    "developer based in Georgia",
    "professional portfolio website",
    "developer blog",
    "web development case studies",
    "JavaScript animations",
    "React components",
    "frontend skills showcase",
    "frontend coding projects",
    "custom website development",
    "single-page applications",
    "developer resume",
    "hire a front-end developer",
    "best front-end portfolios",
    "developer tools and stacks",
    "modern UI/UX design",
    "frontend frameworks",
    "website performance tips",
    "tech blog and tutorials",
    "web developer branding",
    "software development",
    "progressive web apps",
    "API integration",
    "developer with design skills",
    "GitHub portfolio",
    "digital resume site",
  ],
  openGraph: {
    description:
      "Explore the portfolio of a front-end web developer focused on building responsive, modern, and user-centric web applications using tools like React, Next.js, and Tailwind CSS.",
    url: "https://www.cyberdezrealm.com",
    type: "website",
    siteName: "CyberDezRealm",
  },
  verification: {
    google: "NMwQ9Im0c3GpjO7EFv7cBgl3FLvhsfm7O49SOVWlG4s",
  },
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
