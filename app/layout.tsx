import type { Metadata } from "next";
import { Syne, Space_Grotesk } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/lib/lenis-provider";
import { ToastProvider } from "@/components/ui/toast";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Himalayanape — Explore the World, One Journey at a Time",
  description:
    "Himalayanape is an Indore-based travel agency offering personalized and hassle-free travel experiences, tailored to meet your unique preferences and needs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${syne.variable} ${spaceGrotesk.variable} font-body antialiased bg-bg-primary text-text-primary`}
      >
        <ToastProvider>
          <SmoothScrollProvider>{children}</SmoothScrollProvider>
        </ToastProvider>
      </body>
    </html>
  );
}
