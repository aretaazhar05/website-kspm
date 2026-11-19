"use client";

import { useEffect, useState } from "react";
import { Check, Link2, MessageCircle } from "lucide-react";

interface ShareButtonsProps {
  title: string;
  slug: string;
}

export function ShareButtons({ title, slug }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  const [shareUrl, setShareUrl] = useState(
    `https://kspmunipi.vercel.app/artikel/${slug}`,
  );

  useEffect(() => {
    setShareUrl(window.location.href);
  }, []);

  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(
    `${title} — ${shareUrl}`,
  )}`;

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="mr-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400">
        Bagikan
      </span>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 rounded-full border border-navy-200 bg-white px-3.5 py-2 text-[12px] font-semibold text-navy-800 transition hover:border-royal-300 hover:text-royal-700"
      >
        <MessageCircle className="h-3.5 w-3.5" />
        WhatsApp
      </a>
      <button
        type="button"
        onClick={copyLink}
        className="inline-flex items-center gap-1.5 rounded-full border border-navy-200 bg-white px-3.5 py-2 text-[12px] font-semibold text-navy-800 transition hover:border-royal-300 hover:text-royal-700"
      >
        {copied ? (
          <>
            <Check className="h-3.5 w-3.5 text-emerald-600" />
            Tautan disalin
          </>
        ) : (
          <>
            <Link2 className="h-3.5 w-3.5" />
            Salin tautan
          </>
        )}
      </button>
    </div>
  );
}
