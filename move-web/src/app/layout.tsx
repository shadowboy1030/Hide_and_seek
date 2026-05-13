import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";

const display = Bebas_Neue({
  variable: "--font-hs-display",
  subsets: ["latin"],
  weight: "400",
});

const body = Inter({
  variable: "--font-hs-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "HIDE & SEEK — Find Your Own Korea",
  description:
    "Discover the hidden atmosphere of Seoul through local stories, quiet alleys, and unforgettable moments.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-white font-[family-name:var(--font-hs-body)] antialiased">
        {children}
      </body>
    </html>
  );
}
