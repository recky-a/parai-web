// app/kontak-kami/page.tsx
"use client";

import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { ShareButtons } from "@/components/sections/beranda/ShareButtons";

export default function KontakKamiPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatusMessage("Mengirim pesan Anda...");
    // Simulasi pengiriman (untuk demo)
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form Data Submitted:", formData);
    setStatusMessage(
      "Pesan Anda telah berhasil dikirim! Kami akan segera menghubungi Anda."
    );
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    setTimeout(() => setStatusMessage(""), 5000);
  };

  return (
    <div className="container mx-auto py-12 md:py-20">
      <header className="text-center mb-12">
        <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-3">
          Hubungi Kami
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Kami senang mendengar dari Anda! Jangan ragu untuk menghubungi kami
          jika ada pertanyaan atau membutuhkan bantuan.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
        {/* Kolom Form Kontak */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl">Kirim Pesan Langsung</CardTitle>
            <CardDescription>
              Isi form di bawah ini dan tim kami akan merespons secepatnya.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nama Lengkap</Label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Alamat Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john.doe@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Nomor Telepon (Opsional)</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+62 812 3456 7890"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Subjek</Label>
                <Input
                  id="subject"
                  placeholder="Pertanyaan tentang reservasi"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Pesan Anda</Label>
                <Textarea
                  id="message"
                  placeholder="Tuliskan pesan Anda di sini..."
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <Button type="submit" size="lg" className="w-full">
                <Send className="mr-2 h-5 w-5" /> Kirim Pesan
              </Button>
              {statusMessage && (
                <p className="text-sm text-center pt-2">{statusMessage}</p>
              )}
            </form>
          </CardContent>
        </Card>

        {/* Kolom Informasi Kontak & Peta */}
        <div className="space-y-8">
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle className="text-xl">Informasi Kontak</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <div className="flex items-start gap-3">
                <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">
                    Alamat Resort
                  </h4>
                  <p>Jl. Pantai Parai Tenggiri, Sungailiat,</p>
                  <p>Kabupaten Bangka, Kepulauan Bangka Belitung, Indonesia</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Telepon</h4>
                  <a href="tel:+6271794888" className="hover:text-primary">
                    +62 717 94888
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Email</h4>
                  <a
                    href="mailto:info@paraibeachresort.com"
                    className="hover:text-primary"
                  >
                    info@paraibeachresort.com
                  </a>
                  <br />
                  <a
                    href="mailto:reservasi@paraibeachresort.com"
                    className="hover:text-primary"
                  >
                    reservasi@paraibeachresort.com
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          <div>
            <h3 className="text-xl font-semibold mb-3">Lokasi Kami di Peta</h3>
            <div className="aspect-video w-full rounded-lg overflow-hidden border shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.8379486762747!2d106.12206658047586!3d-1.8053124934805393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e22f4e5be93c035%3A0x2136aad78d1cacef!2sParai%20Beach%20Resort%20%26%20Spa!5e0!3m2!1sen!2sid!4v1747085562971!5m2!1sen!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Peta Lokasi Parai Beach Resort"
              ></iframe>
            </div>
          </div>
          <div className="pt-4">
            <h3 className="text-lg font-semibold mb-2">Bagikan Halaman Ini:</h3>
            <ShareButtons />
          </div>
        </div>
      </div>
    </div>
  );
}
