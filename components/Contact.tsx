"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import businessData from "@/data/business-data.json";

const { isletme } = businessData;

export default function Contact() {
  const [gonderildi, setGonderildi] = useState(false);

  const telHref = `tel:${isletme.telefon.replace(/\s/g, "")}`;
  const waHref = `https://wa.me/${isletme.whatsapp.replace(/[^\d]/g, "")}`;
  const mailHref = `mailto:${isletme.eposta}`;

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    trackEvent("form_submit", {
      location: "iletisim",
      has_message: Boolean(form.get("mesaj")),
    });
    setGonderildi(true);
  }

  return (
    <section id="iletisim" className="border-t border-ink/10 bg-plaster px-6 py-28 md:px-10">
      <div className="mx-auto max-w-7xl">
        <p className="eyebrow text-xs text-verdigris">İletişim</p>
        <h2 className="mt-4 max-w-xl font-display text-4xl italic leading-tight text-ink sm:text-5xl">
          Projenizi anlatın,
          <br /> ölçüyü birlikte alalım.
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-16 md:grid-cols-12">
          <div className="flex flex-col gap-6 md:col-span-5">
            <ContactRow
              icon={Phone}
              label="Telefon"
              value={isletme.telefon}
              href={telHref}
              onClick={() => trackEvent("phone_click", { location: "iletisim" })}
            />
            <ContactRow
              icon={MessageCircle}
              label="WhatsApp"
              value={isletme.whatsapp}
              href={waHref}
              external
              onClick={() => trackEvent("whatsapp_click", { location: "iletisim" })}
            />
            <ContactRow
              icon={Mail}
              label="E-posta"
              value={isletme.eposta}
              href={mailHref}
              onClick={() => trackEvent("email_click", { location: "iletisim" })}
            />
            <ContactRow
              icon={MapPin}
              label="Adres"
              value={isletme.adres}
            />
          </div>

          <div className="md:col-span-7">
            {gonderildi ? (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex h-full min-h-[320px] flex-col items-start justify-center rounded-3xl border border-verdigris/30 bg-verdigris/5 p-10"
              >
                <p className="font-display text-2xl italic text-ink">
                  Mesajınız alındı.
                </p>
                <p className="mt-3 max-w-sm font-body text-sm text-ink/60">
                  Ekibimiz en kısa sürede sizinle {isletme.telefon} veya
                  e-posta üzerinden iletişime geçecek.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 gap-6 rounded-3xl border border-ink/10 p-10 sm:grid-cols-2"
              >
                <Field label="Ad Soyad" name="ad" placeholder="Adınız Soyadınız" required />
                <Field label="Telefon" name="telefon" placeholder="05xx xxx xx xx" required />
                <Field
                  label="E-posta"
                  name="eposta"
                  type="email"
                  placeholder="ornek@eposta.com"
                  className="sm:col-span-2"
                />
                <div className="sm:col-span-2">
                  <label className="font-mono text-xs uppercase tracking-widest2 text-ink/50">
                    Proje Notu
                  </label>
                  <textarea
                    name="mesaj"
                    rows={4}
                    placeholder="Mekân tipi, metrekare ve hedeflediğiniz teslim tarihi..."
                    className="mt-2 w-full resize-none border-b border-ink/20 bg-transparent py-2 font-body text-ink placeholder:text-ink/30 focus:border-verdigris focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-ink px-6 py-3 font-body text-sm text-plaster transition hover:bg-verdigris sm:col-span-2"
                >
                  Notu Gönder
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
  className = "",
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  className?: string;
}) {
  return (
    <div className={className}>
      <label className="font-mono text-xs uppercase tracking-widest2 text-ink/50">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full border-b border-ink/20 bg-transparent py-2 font-body text-ink placeholder:text-ink/30 focus:border-verdigris focus:outline-none"
      />
    </div>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
  external,
  onClick,
}: {
  icon: typeof Phone;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
  onClick?: () => void;
}) {
  const content = (
    <div className="flex items-center gap-4 border-b border-ink/10 py-5">
      <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-ink/15 text-verdigris">
        <Icon size={18} strokeWidth={1.5} />
      </span>
      <div>
        <p className="font-mono text-xs uppercase tracking-widest2 text-ink/40">
          {label}
        </p>
        <p className="mt-1 font-body text-base text-ink">{value}</p>
      </div>
    </div>
  );

  if (!href) return content;

  return (
    <a
      href={href}
      onClick={onClick}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group transition hover:opacity-70"
    >
      {content}
    </a>
  );
}
