import heroImage from "@/assets/images/hero-smile.jpg";
import implantImage from "@/assets/images/implant-model.jpg";
import dmitryPhoto from "@/assets/images/reviews/dmitry.jpg";
import marinaPhoto from "@/assets/images/reviews/marina.jpg";
import { routes } from "@/config/navigation";

export const hero = {
   image: {
      src: heroImage,
      alt: "Пациентка клиники «Бриз» с красивой улыбкой",
   },
   implantImage: {
      src: implantImage,
      alt: "Модель челюсти с установленным имплантом",
   },
   tags: ["Имплантация", "Виниры", "Брекеты"],
   ratingAvatars: [
      { name: "Марина К.", src: marinaPhoto },
      { name: "Дмитрий П.", src: dmitryPhoto },
      { name: "Анна С.", src: heroImage },
   ],
   booking: {
      label: "Онлайн-запись",
      status: "24/7",
      title: "Выберите удобное время",
      // Декоративные «окна»: реального расписания нет, это иллюстрация.
      slots: ["14:30", "16:00", "17:30", "19:00"],
      highlighted: "16:00",
      href: routes.booking,
   },
   offer: {
      label: "Имплантация под ключ",
      title: "Новый зуб за\u00a01\u00a0визит",
      price: "от 32 000 ₽",
      href: "/#services",
   },
   promo: {
      note: "При записи на сайте до 30 ноября",
      href: routes.booking,
   },
};
