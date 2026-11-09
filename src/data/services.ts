import type { StaticImageData } from "next/image";

import clinicImage from "@/assets/images/clinic-consultation.jpg";
import heroImage from "@/assets/images/hero-smile.jpg";
import kovalevaPhoto from "@/assets/images/doctors/kovaleva.jpg";
import implantImage from "@/assets/images/implant-model.jpg";
import veneersImage from "@/assets/images/veneers-shade.jpg";
import { routes } from "@/config/navigation";

export type ServicePrice = {
   name: string;
   price: string;
   note?: string;
};

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
   steps: string[];
   priceItems: ServicePrice[];
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
      steps: [
         "Консультация, 3D-диагностика и составление плана лечения",
         "Установка импланта с контролем заживления",
         "Фиксация абатмента и постоянной коронки",
      ],
      priceItems: [
         { name: "Консультация имплантолога", price: "бесплатно" },
         { name: "Установка импланта", price: "от 32 000 ₽" },
         { name: "Коронка на импланте", price: "от 28 000 ₽" },
         {
            name: "Костная пластика",
            price: "от 18 000 ₽",
            note: "по показаниям",
         },
      ],
      href: routes.service("implantation"),
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
      steps: [
         "Фотопротокол и цифровой дизайн будущей улыбки",
         "Примерка формы и согласование оттенка",
         "Изготовление и бережная фиксация виниров",
      ],
      priceItems: [
         { name: "Профессиональное отбеливание", price: "от 12 000 ₽" },
         { name: "Цифровой дизайн улыбки", price: "от 5 000 ₽" },
         { name: "Керамический винир", price: "от 25 000 ₽" },
         {
            name: "Реставрация композитом",
            price: "от 9 000 ₽",
            note: "за один зуб",
         },
      ],
      href: routes.service("aesthetics"),
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
      steps: [
         "Ортодонтическая диагностика и цифровой расчёт",
         "Выбор системы и установка первого этапа",
         "Регулярные активации и закрепление результата",
      ],
      priceItems: [
         { name: "Диагностика и план лечения", price: "от 6 000 ₽" },
         { name: "Лечение на элайнерах", price: "от 90 000 ₽" },
         { name: "Лечение на брекетах", price: "от 110 000 ₽" },
         {
            name: "Ретейнеры",
            price: "от 8 000 ₽",
            note: "за одну челюсть",
         },
      ],
      href: routes.service("orthodontics"),
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
      steps: [
         "Знакомство с врачом и спокойный адаптационный приём",
         "Осмотр, диагностика и понятный план для родителей",
         "Лечение в комфортном темпе с заботой о ребёнке",
      ],
      priceItems: [
         { name: "Адаптационный приём", price: "от 2 500 ₽" },
         { name: "Лечение молочного зуба", price: "от 4 500 ₽" },
         { name: "Герметизация фиссур", price: "от 3 500 ₽" },
         {
            name: "Профессиональная гигиена",
            price: "от 4 000 ₽",
            note: "детям до 14 лет",
         },
      ],
      href: routes.service("kids"),
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
      steps: [
         "Осмотр и диагностика состояния зубов и дёсен",
         "Профессиональная гигиена или лечение под увеличением",
         "Контрольный осмотр и рекомендации по уходу",
      ],
      priceItems: [
         { name: "Профессиональная гигиена", price: "от 3 500 ₽" },
         { name: "Лечение кариеса", price: "от 6 500 ₽" },
         { name: "Лечение корневого канала", price: "от 12 000 ₽" },
         {
            name: "Реставрация зуба",
            price: "от 9 500 ₽",
            note: "в зависимости от объёма",
         },
      ],
      href: routes.service("therapy"),
   },
];

export function getServiceById(id: string) {
   return services.find((service) => service.id === id);
}
