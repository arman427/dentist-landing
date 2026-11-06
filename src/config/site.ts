export const siteConfig = {
   name: "Бриз",
   fullName: "Стоматология «Бриз»",
   title: "Стоматология «Бриз» в Волгограде — имплантация, виниры, брекеты",
   description:
      "Лечим, восстанавливаем и делаем зубы красивыми — бережно, без боли и с честной сметой. Имплантация, виниры, ортодонтия и детская стоматология в Волгограде.",
   url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://briz-dent.ru",
   phone: { label: "+7 (900) 123-45-67", href: "tel:+79001234567" },
   email: "hello@briz-dent.ru",
   address: {
      street: "ул. Набережная, 12",
      city: "Волгоград",
      postalCode: "400066",
      mapUrl: `https://yandex.ru/maps/?text=${encodeURIComponent("Волгоград, ул. Набережная, 12")}`,
   },
   hours: { label: "Ежедневно 9:00 – 21:00", opens: "09:00", closes: "21:00" },
   social: {
      telegram: "https://t.me/briz_dent",
      vk: "https://vk.com/briz_dent",
   },
   rating: { value: "4.9", count: "1 200" },
   license: "...",
   /** Статично, чтобы страница целиком пререндерилась (без new Date()). */
   copyrightYear: 2026,
} as const;

// Л041-01021-34/00000000
