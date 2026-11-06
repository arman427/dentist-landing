import type { StaticImageData } from "next/image";

import clinicImage from "@/assets/images/clinic-consultation.jpg";
import kovalevaPhoto from "@/assets/images/doctors/kovaleva.jpg";
import heroImage from "@/assets/images/hero-smile.jpg";
import implantImage from "@/assets/images/implant-model.jpg";
import veneersImage from "@/assets/images/veneers-shade.jpg";
import { routes } from "@/config/navigation";

export type Service = {
   id: string;
   title: string;
   tags: string[];
   /** *Слова в звёздочках* выделяются курсивом. */
   description: string;
   price: string;
   image: StaticImageData;
   imageAlt: string;
   doctorIds: string[];
   href: string;
};

export const DEFAULT_SERVICE_ID = "aesthetics";

export const services: Service[] = [
   {
      id: "implantation",
      title: "Имплантация",
      tags: ["Имплант под ключ", "Костная пластика", "Протезирование"],
      description:
         "*Восстановим* зуб под ключ: имплант, абатмент и коронка. Планируем по 3D-снимку, поэтому всё проходит *спокойно* и *без боли*.",
      price: "от 32 000 ₽",
      image: implantImage,
      imageAlt: "Модель челюсти с установленным имплантом",
      doctorIds: ["sokolov", "belov", "morozova"],
      href: routes.booking,
   },
   {
      id: "aesthetics",
      title: "Эстетика и виниры",
      tags: ["Отбеливание", "Виниры", "Цифровой дизайн улыбки"],
      description:
         "*Подберём* идеальный оттенок и форму. Керамические виниры делают улыбку *естественной* и сияющей — уже *за 2 визита*.",
      price: "от 25 000 ₽",
      image: veneersImage,
      imageAlt: "Врач подбирает пациенту оттенок виниров по шкале",
      doctorIds: ["morozova", "belov", "sokolov"],
      href: routes.booking,
   },
   {
      id: "orthodontics",
      title: "Ортодонтия",
      tags: ["Элайнеры", "Брекеты", "Ретейнеры"],
      description:
         "*Выровняем* зубы элайнерами или брекетами. Покажем результат на *цифровой модели* ещё до начала лечения.",
      price: "от 90 000 ₽",
      image: heroImage,
      imageAlt: "Ровная улыбка после ортодонтического лечения",
      doctorIds: ["belov", "morozova", "kovaleva"],
      href: routes.booking,
   },
   {
      id: "kids",
      title: "Детская стоматология",
      tags: ["Молочные зубы", "Герметизация", "Адаптационный приём"],
      description:
         "Лечим *без слёз* и страха: знакомим ребёнка с кабинетом в игре и работаем *бережно* — с мультиками и наклейками.",
      price: "от 2 500 ₽",
      image: kovalevaPhoto,
      imageAlt: "Детский стоматолог Ольга Сергеевна Ковалёва",
      doctorIds: ["kovaleva", "morozova", "belov"],
      href: routes.booking,
   },
   {
      id: "therapy",
      title: "Лечение и гигиена",
      tags: ["Кариес", "Чистка Air Flow", "Лечение каналов"],
      description:
         "*Профессиональная* гигиена и лечение кариеса под микроскопом — чтобы *свои зубы* служили как можно дольше.",
      price: "от 3 500 ₽",
      image: clinicImage,
      imageAlt: "Врач показывает пациенту план лечения на планшете",
      doctorIds: ["sokolov", "kovaleva", "belov"],
      href: routes.booking,
   },
];
