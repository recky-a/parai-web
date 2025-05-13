"use client";

import type React from "react";

import { useState, useRef, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Send,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";

export function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<
    "idle" | "success" | "error" | "submitting"
  >("idle");
  const [animation, setAnimation] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Reset message after 5 seconds
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (message) {
      timer = setTimeout(() => {
        setMessage("");
        setStatus("idle");
      }, 5000);
    }
    return () => clearTimeout(timer);
  }, [message]);

  // Trigger animation on mount
  useEffect(() => {
    setAnimation(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    // Simulate API call with timeout
    setTimeout(() => {
      if (email && email.includes("@")) {
        setMessage(
          `Terima kasih! Email ${email} telah didaftarkan untuk newsletter kami.`
        );
        setStatus("success");
        setEmail("");
      } else {
        setMessage("Silakan masukkan alamat email yang valid.");
        setStatus("error");
      }
    }, 800); // Simulate network delay
  };

  const handleDismiss = () => {
    setMessage("");
    setStatus("idle");
  };

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl shadow-lg transition-all duration-500 transform",
        "bg-gradient-to-br from-card to-card/90 backdrop-blur-sm",
        "border border-border/40 hover:border-primary/20",
        "p-6 md:p-8",
        animation ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      )}
    >
      {/* Decorative elements */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-16 -left-16 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl"></div>

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-start justify-between mb-5">
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-2 text-foreground flex items-center gap-2">
              <span className="text-primary">
                <Mail className="h-5 w-5" />
              </span>
              Berlangganan Newsletter Kami
            </h3>
            <p className="text-sm md:text-base text-muted-foreground">
              Dapatkan info terbaru, penawaran spesial, dan berita eksklusif
              langsung ke email Anda.
            </p>
          </div>
          <div className="hidden md:flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary">
            <Sparkles className="h-6 w-6" />
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className={cn(
            "relative transition-all duration-300",
            status === "success"
              ? "opacity-0 h-0 overflow-hidden"
              : "opacity-100"
          )}
        >
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-grow">
              <Input
                ref={inputRef}
                type="email"
                placeholder="Alamat email Anda"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className={cn(
                  "pr-10 h-12 text-base border-border/50 bg-background/80 backdrop-blur-sm",
                  "focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all",
                  "placeholder:text-muted-foreground/70"
                )}
                aria-label="Alamat email untuk newsletter"
                disabled={status === "submitting"}
              />
              <Mail className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground/50" />
            </div>
            <Button
              type="submit"
              className={cn(
                "h-12 px-6 text-base font-medium transition-all duration-300",
                "bg-primary hover:bg-primary/90 text-primary-foreground",
                "shadow-md hover:shadow-lg hover:shadow-primary/20",
                "flex items-center gap-2"
              )}
              disabled={status === "submitting"}
            >
              {status === "submitting" ? (
                <>
                  <span className="animate-pulse">Mendaftarkan...</span>
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  <span>Berlangganan</span>
                </>
              )}
            </Button>
          </div>

          {/* Benefits list */}
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <CheckCircle2 className="h-3.5 w-3.5 text-green-500" />
              <span>Update terbaru setiap minggu</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <CheckCircle2 className="h-3.5 w-3.5 text-green-500" />
              <span>Penawaran eksklusif untuk subscriber</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <CheckCircle2 className="h-3.5 w-3.5 text-green-500" />
              <span>Bisa berhenti berlangganan kapan saja</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <CheckCircle2 className="h-3.5 w-3.5 text-green-500" />
              <span>Kami menjaga privasi email Anda</span>
            </div>
          </div>
        </form>

        {/* Success/Error Message */}
        {message && (
          <div
            className={cn(
              "mt-4 p-4 rounded-lg flex items-start justify-between gap-3 animate-fadeIn transition-all",
              status === "success"
                ? "bg-green-50 dark:bg-green-950/30 text-green-800 dark:text-green-300"
                : status === "error"
                ? "bg-red-50 dark:bg-red-950/30 text-red-800 dark:text-red-300"
                : ""
            )}
          >
            <div className="flex items-start gap-3">
              {status === "success" ? (
                <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
              ) : (
                <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
              )}
              <p>{message}</p>
            </div>
            <button
              type="button"
              onClick={handleDismiss}
              className="text-muted-foreground hover:text-foreground"
              aria-label="Tutup pesan"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        )}

        {/* Success state */}
        {status === "success" && (
          <div className="flex flex-col items-center justify-center py-6 animate-fadeIn">
            <div className="h-16 w-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-4">
              <CheckCircle2 className="h-8 w-8 text-green-600 dark:text-green-400" />
            </div>
            <h4 className="text-lg font-semibold text-center mb-2">
              Pendaftaran Berhasil!
            </h4>
            <p className="text-sm text-muted-foreground text-center max-w-md">
              Terima kasih telah berlangganan newsletter kami. Kami akan
              mengirimkan konten menarik ke email Anda segera.
            </p>
            <Button
              variant="outline"
              size="sm"
              className="mt-4"
              onClick={() => {
                setStatus("idle");
                setTimeout(() => inputRef.current?.focus(), 100);
              }}
            >
              Daftarkan email lain
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
