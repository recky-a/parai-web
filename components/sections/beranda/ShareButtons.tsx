// components/sections/ShareButtons.tsx
"use client";

import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  LinkedinShareButton,
  EmailShareButton,
} from "react-share";
import {
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  LinkedinIcon,
  EmailIcon,
} from "react-share";

import { Share2 } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

interface ShareButtonsProps {
  url?: string;
  title?: string;
  className?: string;
}

export function ShareButtons({ url, title, className }: ShareButtonsProps) {
  const shareUrl =
    url ||
    (typeof window !== "undefined"
      ? window.location.href
      : "https://paraibeachresort.com");
  const shareTitle =
    title ||
    (typeof document !== "undefined"
      ? document.title
      : "Kunjungi Parai Beach Resort & Spa!");

  return (
    <div className={className}>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">
            <Share2 className="mr-2 h-4 w-4" /> Bagikan
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-2">
          <div className="flex gap-2">
            <FacebookShareButton url={shareUrl} title={shareTitle}>
              <FacebookIcon size={36} round />
            </FacebookShareButton>
            <TwitterShareButton url={shareUrl} title={shareTitle}>
              <TwitterIcon size={36} round />
            </TwitterShareButton>
            <WhatsappShareButton
              url={shareUrl}
              title={shareTitle}
              separator=" :: "
            >
              <WhatsappIcon size={36} round />
            </WhatsappShareButton>
            <LinkedinShareButton url={shareUrl} title={shareTitle}>
              <LinkedinIcon size={36} round />
            </LinkedinShareButton>
            <EmailShareButton
              url={shareUrl}
              subject={shareTitle}
              body="Lihat website menarik ini:"
            >
              <EmailIcon size={36} round />
            </EmailShareButton>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
