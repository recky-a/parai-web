"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Hotel, Menu } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { navLinks } from "@/lib/data";
import { ModeToggle } from "../mode-toggle";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) setIsOpen(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  // --- Desktop Link Styles ---
  const desktopLinkBaseClasses =
    "relative group text-sm font-medium transition-colors duration-200 ease-in-out px-3 pt-2 pb-3 rounded-md outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"; // Added pb-3 for underline space

  const desktopAfterUnderlineClasses =
    "after:content-[''] after:absolute after:left-0 after:bottom-[2px] " + // Sits 2px from the bottom of the padding box
    "after:w-full after:h-[2.5px] after:bg-primary " +
    "after:transition-transform after:duration-300 after:ease-out";

  const desktopActiveLinkClasses = `text-primary font-semibold ${desktopAfterUnderlineClasses} after:scale-x-100 after:origin-left`;

  const desktopInactiveLinkClasses = `text-muted-foreground hover:text-primary focus-visible:text-primary ${desktopAfterUnderlineClasses} after:scale-x-0 group-hover:after:scale-x-100 after:origin-left`;

  // --- Mobile Link Styles ---
  const mobileLinkBaseClasses =
    "relative group block text-lg font-medium transition-colors duration-200 ease-in-out p-3 rounded-md outline-none focus-visible:ring-1 focus-visible:ring-ring "; // Use block for full-width tap area

  const mobileAfterUnderlineClasses =
    "after:content-[''] after:absolute after:left-[15%] after:bottom-[4px] " + // Indented underline, 4px from bottom
    "after:w-[70%] after:h-[2px] after:bg-primary " +
    "after:transition-transform after:duration-300 after:ease-out";

  const mobileActiveLinkClasses = `text-primary font-semibold ${mobileAfterUnderlineClasses} after:scale-x-100 after:origin-center`;

  const mobileInactiveLinkClasses = `text-foreground hover:text-primary focus-visible:text-primary ${mobileAfterUnderlineClasses} after:scale-x-0 group-hover:after:scale-x-100 after:origin-center`;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center space-x-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-background focus-visible:ring-offset-2 rounded-md p-1"
          onClick={() => setIsOpen(false)}
        >
          <Hotel className="h-8 w-8 text-primary transition-transform duration-300 group-hover:rotate-[-12deg] group-hover:scale-110" />
          <span className="text-xl font-bold sm:inline-block group-hover:text-primary transition-colors">
            Parai Resort
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-x-1 lg:gap-x-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`${desktopLinkBaseClasses} ${
                  isActive
                    ? desktopActiveLinkClasses
                    : desktopInactiveLinkClasses
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Button
            asChild
            size="lg"
            className="ml-4 shadow-md hover:shadow-lg transition-all duration-300 ease-out hover:scale-[1.03] bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            <Link href="/booking">Booking Sekarang</Link>
          </Button>
          <div className="ml-3">
            <ModeToggle />
          </div>
        </nav>

        {/* Mobile Navigation Trigger */}
        <div className="md:hidden flex items-center gap-x-2">
          <ModeToggle />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full text-muted-foreground hover:text-primary hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-background focus-visible:ring-offset-2"
                aria-label="Buka Menu"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] sm:w-[360px] bg-background p-0 flex flex-col"
              // Optional: remove overlay for a cleaner look if preferred:
              // overlayClassName="bg-transparent"
            >
              <SheetHeader className="p-6 border-b">
                <SheetTitle className="flex items-center space-x-2">
                  <Hotel className="h-7 w-7 text-primary" />
                  <span className="text-lg font-bold">Parai Resort</span>
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col space-y-2 p-4 flex-grow">
                {" "}
                {/* Reduced space-y and p for denser menu if many items */}
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <SheetClose asChild key={link.href}>
                      <Link
                        href={link.href}
                        className={`${mobileLinkBaseClasses} ${
                          isActive
                            ? mobileActiveLinkClasses
                            : mobileInactiveLinkClasses
                        }`}
                      >
                        {link.label}
                      </Link>
                    </SheetClose>
                  );
                })}
              </nav>
              <div className="p-6 border-t mt-auto">
                <SheetClose asChild>
                  <Button asChild className="w-full" size="lg">
                    <Link href="/booking">Booking Sekarang</Link>
                  </Button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
