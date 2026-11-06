export type NavLink = {
   label: string;
   href: string;
};

export type NavGroup = {
   title: string;
   links: NavLink[];
};

/**
 * Ключевые адреса. /doctors, /privacy, /licenses, /careers — пока заглушки (<PageStub />):
 * наполни страницы в src/app/… или поменяй ссылки здесь.
 */
export const routes = {
   booking: "/#contacts",
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
         { label: "Врачи", href: "/#doctors" },
         { label: "Лицензии", href: routes.licenses },
         { label: "Вакансии", href: routes.careers },
      ],
   },
   {
      title: "Услуги",
      links: [
         { label: "Имплантация", href: "/#services" },
         { label: "Виниры", href: "/#services" },
         { label: "Ортодонтия", href: "/#services" },
         { label: "Детская стоматология", href: "/#services" },
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
