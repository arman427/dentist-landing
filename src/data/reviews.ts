import type { StaticImageData } from "next/image";

import clinicImage from "@/assets/images/clinic-consultation.jpg";
import dmitryPhoto from "@/assets/images/reviews/dmitry.jpg";
import marinaPhoto from "@/assets/images/reviews/marina.jpg";

export type Review = {
   id: string;
   author: string;
   service: string;
   text: string;
   source: "Яндекс" | "2ГИС";
   rating: number;
   avatar?: StaticImageData;
   /** Мятная карточка */
   highlighted?: boolean;
};

export type FeaturedReview = {
   id: string;
   author: string;
   meta: string;
   /** *Слова в звёздочках* выделяются курсивом. */
   text: string;
   image: StaticImageData;
   imageAlt: string;
};

export type ReviewsPage = {
   featured: FeaturedReview;
   reviews: Review[];
};

export const reviewPages: ReviewsPage[] = [
   {
      featured: {
         id: "marina",
         author: "Марина К.",
         meta: "Виниры · 2 визита",
         text: "*Наконец-то* не стесняюсь улыбаться на фото! Виниры выглядят как свои зубы, а Елена Игоревна объясняла каждый шаг.",
         image: marinaPhoto,
         imageAlt: "Марина, пациентка клиники",
      },
      reviews: [
         {
            id: "dmitry",
            author: "Дмитрий П.",
            service: "Имплантация",
            text: "Всю жизнь боялся стоматологов. Здесь поставили имплант — вообще ничего не почувствовал, через неделю забыл, что что-то делали.",
            source: "Яндекс",
            rating: 5,
            avatar: dmitryPhoto,
         },
         {
            id: "anna",
            author: "Анна С.",
            service: "Детская стоматология",
            text: "Записалась через Telegram за минуту, напомнили о приёме. Ребёнок ушёл довольный и с наклейкой.",
            source: "2ГИС",
            rating: 5,
         },
         {
            id: "igor",
            author: "Игорь В.",
            service: "Протезирование",
            text: "Сразу дали смету на всё лечение, без сюрпризов в конце. Рассрочку оформили прямо в клинике.",
            source: "Яндекс",
            rating: 5,
         },
         {
            id: "ekaterina",
            author: "Екатерина Л.",
            service: "Ортодонтия",
            text: "Элайнеры носила 8 месяцев — результат лучше, чем ожидала. Спасибо Максиму Олеговичу!",
            source: "2ГИС",
            rating: 5,
            highlighted: true,
         },
      ],
   },
   {
      featured: {
         id: "oleg",
         author: "Олег Р.",
         meta: "Лечение и гигиена · 3 визита",
         text: "Показали 3D-снимок и *честно* объяснили, что лечить сейчас, а что может подождать. *Никакого* навязывания услуг.",
         image: clinicImage,
         imageAlt: "Врач обсуждает с пациентом план лечения",
      },
      reviews: [
         {
            id: "svetlana",
            author: "Светлана М.",
            service: "Отбеливание",
            text: "Отбеливание прошло без чувствительности, улыбка стала на несколько тонов светлее. Очень спокойная атмосфера.",
            source: "Яндекс",
            rating: 5,
         },
         {
            id: "artem",
            author: "Артём Г.",
            service: "Лечение каналов",
            text: "Лечили канал под микроскопом — аккуратно и быстро. Врач всё показывал на экране, было совсем не страшно.",
            source: "2ГИС",
            rating: 5,
         },
         {
            id: "natalia",
            author: "Наталья Е.",
            service: "Детская стоматология",
            text: "Дочка шла на приём со слезами, а ушла с улыбкой. Ольга Сергеевна нашла подход за пять минут.",
            source: "Яндекс",
            rating: 5,
         },
         {
            id: "pavel",
            author: "Павел Д.",
            service: "Имплантация",
            text: "Поставили два импланта за один визит. Помогли оформить налоговый вычет — все документы выдали сразу.",
            source: "2ГИС",
            rating: 5,
            highlighted: true,
         },
      ],
   },
];
