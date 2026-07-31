"use client";

import { motion } from "framer-motion";
import { Phone, ArrowDownRight } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import businessData from "@/data/business-data.json";

const { isletme } = businessData;

export default function Hero() {
  const telHref = `tel:${isletme.telefon.replace(/\s/g, "")}`;

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-plaster pt-24">
      {/* zemin ızgarası */}
      <div className="absolute inset-0 bg-blueprint bg-grid opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-b from-plaster/0 via-plaster/20 to-plaster" />

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 gap-14 px-6 md:grid-cols-12 md:px-10">
        {/* Sol: metin */}
        <div className="md:col-span-6 md:pt-8">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow text-xs text-verdigris"
          >
            İç Mimarlık Atölyesi · Kadıköy, İstanbul
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 font-display text-5xl italic leading-[1.05] text-ink sm:text-6xl lg:text-7xl"
          >
            Mekân,
            <br />
            <span className="not-italic text-verdigris">çizgiyle</span>
            <br />
            başlar.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-8 max-w-md font-body text-lg leading-relaxed text-ink/70"
          >
            {isletme.aciklama} İlk eskizden anahtar teslimine, her ölçü
            elle düşünülür.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href={telHref}
              onClick={() => trackEvent("phone_click", { location: "hero" })}
              className="group flex items-center gap-2 rounded-full bg-ink px-6 py-3 font-body text-sm text-plaster transition hover:bg-verdigris"
            >
              <Phone size={16} strokeWidth={1.75} />
              {isletme.telefon}
            </a>
            <a
              href="#hizmetler"
              onClick={() => trackEvent("cta_click", { location: "hero", label: "hizmetler" })}
              className="group flex items-center gap-1 font-body text-sm text-ink/70 transition hover:text-ink"
            >
              Hizmetleri gör
              <ArrowDownRight
                size={16}
                strokeWidth={1.75}
                className="transition group-hover:translate-x-0.5 group-hover:translate-y-0.5"
              />
            </a>
          </motion.div>
        </div>

        {/* Sağ: imza öğesi — çizilen kat planı */}
        <div className="relative flex items-center justify-center md:col-span-6">
          <BlueprintSketch />
        </div>
      </div>
    </section>
  );
}

function BlueprintSketch() {
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => ({
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay: i * 0.18, duration: 1.4, ease: [0.65, 0, 0.35, 1] },
        opacity: { delay: i * 0.18, duration: 0.3 },
      },
    }),
  };

  return (
    <svg
      viewBox="0 0 480 480"
      className="w-full max-w-md text-ink"
      fill="none"
      aria-hidden="true"
    >
      {/* dış cephe */}
      <motion.rect
        x="40" y="40" width="400" height="400"
        stroke="currentColor" strokeWidth="1.5"
        custom={0} variants={draw} initial="hidden" animate="visible"
      />
      {/* iç bölmeler */}
      <motion.path
        d="M40 220 H240 V40" stroke="currentColor" strokeWidth="1.2"
        custom={1} variants={draw} initial="hidden" animate="visible"
      />
      <motion.path
        d="M240 220 V440" stroke="currentColor" strokeWidth="1.2"
        custom={1.4} variants={draw} initial="hidden" animate="visible"
      />
      <motion.path
        d="M240 340 H440" stroke="currentColor" strokeWidth="1.2"
        custom={1.7} variants={draw} initial="hidden" animate="visible"
      />
      {/* kapı yayları */}
      <motion.path
        d="M240 220 A60 60 0 0 1 300 280" stroke="#5B6B5D" strokeWidth="1.2"
        custom={2.2} variants={draw} initial="hidden" animate="visible"
      />
      <motion.path
        d="M140 220 A50 50 0 0 0 90 270" stroke="#5B6B5D" strokeWidth="1.2"
        custom={2.4} variants={draw} initial="hidden" animate="visible"
      />
      {/* mobilya notasyonu */}
      <motion.circle
        cx="360" cy="120" r="34" stroke="#A9804F" strokeWidth="1.2"
        custom={2.8} variants={draw} initial="hidden" animate="visible"
      />
      <motion.rect
        x="90" y="290" width="90" height="46" stroke="#A9804F" strokeWidth="1.2"
        custom={3} variants={draw} initial="hidden" animate="visible"
      />
      {/* ölçü çizgileri */}
      <motion.path
        d="M40 460 H440 M40 455 V465 M440 455 V465" stroke="currentColor" strokeWidth="1"
        custom={3.4} variants={draw} initial="hidden" animate="visible" opacity="0.5"
      />
      <motion.text
        x="240" y="475" textAnchor="middle" fontSize="11"
        fontFamily="var(--font-mono)" fill="currentColor" opacity="0.5"
        initial={{ opacity: 0 }} animate={{ opacity: 0.5 }} transition={{ delay: 1.8 }}
      >
        12.40 m
      </motion.text>
    </svg>
  );
}
