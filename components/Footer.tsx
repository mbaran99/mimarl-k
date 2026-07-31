import businessData from "@/data/business-data.json";

const { isletme } = businessData;

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-plaster px-6 py-10 md:px-10">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 font-body text-xs text-ink/50 sm:flex-row sm:items-center">
        <span>
          © {new Date().getFullYear()} {isletme.adi}. Tüm hakları saklıdır.
        </span>
        <span>{isletme.adres}</span>
      </div>
    </footer>
  );
}
