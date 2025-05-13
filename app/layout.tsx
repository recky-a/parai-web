import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider"; // Buat komponen ini
import { Navbar } from "@/components/global/Navbar";
import { Footer } from "@/components/global/Footer";
import { WhatsAppFAB } from "@/components/global/WhatsAppFAB";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Parai Beach Resort & Spa - Surga Tropis di Bangka",
  description:
    "Demo website Parai Beach Resort & Spa. Nikmati keindahan pantai, fasilitas mewah, dan layanan terbaik kami.",
  keywords:
    "Parai Beach Resort, Resort Bangka, Hotel Sungailiat, Pantai Parai, Spa Bangka",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
          <WhatsAppFAB />
        </ThemeProvider>
      </body>
    </html>
  );
}
