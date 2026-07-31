"use client";

import { Phone, MessageCircle } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import businessData from "@/data/business-data.json";

const { isletme } = businessData;

export default function Header() {
  const telHref = `tel:${isletme.telefon.replace(/\s/g, "")}`;
  const waHref = `https://wa.me/${isletme.whatsapp.replace(/[^\d]/g, "")}`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-ink/10 bg-plaster/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <a href="#" className="font-display text-lg italic tracking-tight text-ink">
          {isletme.adi}
        </a>

        <nav className="hidden items-center gap-8 font-body text-sm text-ink/70 md:flex">
          <a href="#hizmetler" className="transition hover:text-ink">
            Hizmetler
          </a>
          <a href="#atolye" className="transition hover:text-ink">
            Atölye
          </a>
          <a href="#iletisim" className="transition hover:text-ink">
            İletişim
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("whatsapp_click", { location: "header" })}
            className="hidden items-center gap-2 rounded-full border border-ink/15 px-4 py-2 text-sm text-ink/80 transition hover:border-verdigris hover:text-verdigris sm:flex"
          >
            <MessageCircle size={16} strokeWidth={1.75} />
            WhatsApp
          </a>
          <a
            href={telHref}
            onClick={() => trackEvent("phone_click", { location: "header" })}
            className="flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-sm text-plaster transition hover:bg-verdigris"
          >
            <Phone size={16} strokeWidth={1.75} />
            <span className="hidden sm:inline">Ara</span>
          </a>
        </div>
      </div>
    </header>
  );
}
