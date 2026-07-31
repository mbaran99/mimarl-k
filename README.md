# Örnek Mimarlık & Tasarım — Web Sitesi

`business-data.json` dosyasından üretilmiş, Next.js (App Router) + Tailwind CSS +
Framer Motion + Lucide Icons ile hazırlanmış tek sayfalık kurumsal site.

## Kurulum

```bash
npm install
npm run dev
```

Tarayıcıda `http://localhost:3000` adresini açın.

## Yapı

- `app/layout.tsx` — Genel `<head>`: dinamik meta etiketleri, OpenGraph/Twitter
  kartları, Schema.org JSON-LD (`InteriorDesignBusiness`), GA4 + GTM script'leri.
- `app/page.tsx` — Sayfa bölümlerini birleştirir.
- `components/` — Header, Hero (animasyonlu kat planı imza öğesi), Services,
  About, Contact, Footer.
- `lib/analytics.ts` — Telefon, WhatsApp, e-posta ve form butonları için tıklama
  olaylarını GTM `dataLayer` ve `gtag`'e gönderen ortak fonksiyon.
- `data/business-data.json` — Tüm işletme bilgisi, hizmetler ve analitik
  kimlikleri buradan okunur; içeriği güncellemek için bu dosyayı düzenlemeniz
  yeterlidir.

## Yapılacaklar (canlıya almadan önce)

1. `data/business-data.json` içindeki `ga4_id` ve `gtm_id` değerlerini gerçek
   Google Analytics 4 / Google Tag Manager kimlikleriyle değiştirin.
2. `app/layout.tsx` içindeki `siteUrl` sabitini gerçek alan adınızla güncelleyin.
3. `public/` klasörüne bir `og-cover.jpg` (1200×630) sosyal paylaşım görseli
   ekleyin.
4. İletişim formu şu an yalnızca istemci tarafında bir onay mesajı gösterir
   (`components/Contact.tsx` içindeki `handleSubmit`); gerçek gönderim için
   kendi form servisinizi (ör. Formspree, Resend, kendi API route'unuz) bağlayın.
5. `npm run build` ile üretime hazır sürümü oluşturup Vercel, Netlify veya
   kendi sunucunuza dağıtın.
