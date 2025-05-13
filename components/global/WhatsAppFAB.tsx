"use client";

import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react"; // Atau ikon WhatsApp jika Anda punya

export function WhatsAppFAB() {
  const phoneNumber = "6281234567890"; // GANTI DENGAN NOMOR WHATSAPP SEBENARNYA
  const message =
    "Halo, saya tertarik dengan Parai Beach Resort & Spa dan ingin bertanya lebih lanjut.";

  const handleClick = () => {
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <Button
      size="lg"
      className="fixed bottom-6 right-6 rounded-full shadow-lg p-4 h-16 w-16 z-50 bg-green-500 hover:bg-green-600 text-white"
      onClick={handleClick}
      aria-label="Chat via WhatsApp"
    >
      <MessageCircle className="h-8 w-8" /> {/* Atau <WhatsAppIcon /> */}
    </Button>
  );
}
