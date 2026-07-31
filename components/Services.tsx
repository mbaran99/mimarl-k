"use client";

import { motion } from "framer-motion";
import { PenTool, HardHat, ArrowUpRight } from "lucide-react";
import businessData from "@/data/business-data.json";
import { trackEvent } from "@/lib/analytics";

const { hizmetler, isletme } = businessData;

const icons = [PenTool, HardHat];

export default function Services() {
  const telHref = `tel:${isletme.telefon.replace(/\s/g, "")}`;

  return (
    <section id="hizmetler" className="border-t border-ink/10 bg-plaster px-6 py-28 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow text-xs text-verdigris">Hizmetler</p>
            <h2 className="mt-4 max-w-xl font-display text-4xl italic leading-tight text-ink sm:text-5xl">
              Eskizden anahtara,
              <br /> iki temel süreç.
            </h2>
          </div>
          <p className="max-w-sm font-body text-sm leading-relaxed text-ink/60">
            Her proje, mekânın kullanıcısını ve ışığını okuyarak başlar;
            uygulamada zanaatkâr işçilikle tamamlanır.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-ink/10 bg-ink/10 md:grid-cols-2">
          {hizmetler.map((hizmet, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.div
                key={hizmet.baslik}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative flex flex-col justify-between bg-plaster p-10 md:p-12"
              >
                <div>
                  <span className="font-mono text-xs text-ink/40">
                    0{index + 1}
                  </span>
                  <div className="mt-6 flex items-center gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full border border-ink/15 text-verdigris transition group-hover:border-verdigris">
                      <Icon size={20} strokeWidth={1.5} />
                    </span>
                    <h3 className="font-display text-2xl italic text-ink">
                      {hizmet.baslik}
                    </h3>
                  </div>
                  <p className="mt-6 max-w-sm font-body text-base leading-relaxed text-ink/65">
                    {hizmet.detay}
                  </p>
                </div>

                <a
                  href={telHref}
                  onClick={() =>
                    trackEvent("phone_click", {
                      location: "services",
                      service: hizmet.baslik,
                    })
                  }
                  className="mt-10 inline-flex w-fit items-center gap-1 border-b border-ink/20 pb-1 font-body text-sm text-ink/80 transition hover:border-verdigris hover:text-verdigris"
                >
                  Bu hizmeti konuşalım
                  <ArrowUpRight size={14} strokeWidth={1.75} />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
