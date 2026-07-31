"use client";

import { motion } from "framer-motion";
import businessData from "@/data/business-data.json";

const { isletme } = businessData;

const ilkeler = [
  {
    no: "01",
    baslik: "Işığı önce oku",
    metin: "Her mekân, gün ışığının rotasına göre kurgulanır; yapay ışık son katmandır.",
  },
  {
    no: "02",
    baslik: "Malzemeye sadakat",
    metin: "Taş, ahşap ve pirinç kendi doğal karakterini korur; taklit yüzeyler kullanılmaz.",
  },
  {
    no: "03",
    baslik: "Tek elden takip",
    metin: "Konsept tasarımdan şantiye denetimine aynı ekip, aynı sorumlulukla ilerler.",
  },
];

export default function About() {
  return (
    <section id="atolye" className="relative overflow-hidden bg-ink px-6 py-28 text-plaster md:px-10">
      <div className="absolute inset-0 bg-blueprint bg-grid opacity-[0.04]" />
      <div className="relative mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="eyebrow text-xs text-brass">Atölye</p>
            <h2 className="mt-4 font-display text-4xl italic leading-tight sm:text-5xl">
              {isletme.unvan}
            </h2>
            <p className="mt-6 max-w-sm font-body text-base leading-relaxed text-plaster/65">
              {isletme.adi}, {isletme.adres} merkezli; lüks konut ve ticari
              projelerde konseptten uygulamaya bütünsel bir süreç yürütür.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-10 border-t border-plaster/15 pt-10 md:col-span-7 md:grid-cols-3 md:border-t-0 md:border-l md:pl-14 md:pt-0">
            {ilkeler.map((ilke, i) => (
              <motion.div
                key={ilke.no}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
              >
                <span className="font-mono text-xs text-brass">{ilke.no}</span>
                <h3 className="mt-4 font-display text-xl italic">{ilke.baslik}</h3>
                <p className="mt-3 font-body text-sm leading-relaxed text-plaster/60">
                  {ilke.metin}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
