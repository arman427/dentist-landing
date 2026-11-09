export type NavLink = {
   label: string;
   href: string;
};

export type NavGroup = {
   title: string;
   links: NavLink[];
};

/** Ключевые адреса страниц и действий клиники. */
export const routes = {
   booking: "/#contacts",
   service: (serviceId: string) => `/services/${serviceId}`,
   doctors: "/doctors",
   privacy: "/privacy",
   licenses: "/licenses",
   careers: "/careers",
} as const;

export const mainNav: NavLink[] = [
   { label: "Главная", href: "/" },
   { label: "Услуги", href: "/#services" },
   { label: "Врачи", href: "/#doctors" },
   { label: "Отзывы", href: "/#reviews" },
   { label: "Контакты", href: "/#contacts" },
];

export const footerNav: NavGroup[] = [
   {
      title: "Клиника",
      links: [
         { label: "О нас", href: "/#about" },
         { label: "Врачи", href: routes.doctors },
         { label: "Лицензии", href: routes.licenses },
         { label: "Вакансии", href: routes.careers },
      ],
   },
   {
      title: "Услуги",
      links: [
         { label: "Имплантация", href: routes.service("implantation") },
         { label: "Виниры", href: routes.service("aesthetics") },
         { label: "Ортодонтия", href: routes.service("orthodontics") },
         { label: "Детская стоматология", href: routes.service("kids") },
      ],
   },
   {
      title: "Пациентам",
      links: [
         { label: "Цены", href: "/#services" },
         { label: "Рассрочка", href: "/#features" },
         { label: "Налоговый вычет", href: "/#features" },
         { label: "Отзывы", href: "/#reviews" },
      ],
   },
];
