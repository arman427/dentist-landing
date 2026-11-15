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

const additionalServices: Service[] = [
   {
      id: "prosthetics",
      title: "Протезирование",
      tags: ["Коронки", "Протезы", "Восстановление зубов"],
      description:
         "Восстановим функцию и эстетику улыбки с помощью точных цифровых протоколов и *естественных* материалов.",
      price: "от 18 000 ₽",
      image: clinicImage,
      imageAlt: "Врач обсуждает с пациентом план протезирования",
      doctorIds: ["sokolov", "belov", "morozova"],
      steps: [
         "Диагностика, фотопротокол и согласование плана",
         "Подготовка зубов и примерка будущей конструкции",
         "Фиксация протеза и контроль результата",
      ],
      priceItems: [
         { name: "Коронка из диоксида циркония", price: "от 32 000 ₽" },
         { name: "Керамическая коронка", price: "от 28 000 ₽" },
         { name: "Съёмный протез", price: "от 45 000 ₽" },
      ],
      href: routes.service("prosthetics"),
   },
   {
      id: "surgery",
      title: "Хирургия и удаление",
      tags: ["Удаление зубов", "Пластика", "Имплантация"],
      description:
         "Проведём хирургическое лечение *бережно* и предсказуемо, с подробной диагностикой и вниманием к восстановлению.",
      price: "от 4 500 ₽",
      image: implantImage,
      imageAlt: "Модель челюсти для планирования хирургического лечения",
      doctorIds: ["sokolov", "belov", "morozova"],
      steps: [
         "Осмотр, 3D-диагностика и обсуждение вариантов",
         "Атравматичное вмешательство с анестезией",
         "Контроль заживления и рекомендации по восстановлению",
      ],
      priceItems: [
         { name: "Простое удаление зуба", price: "от 4 500 ₽" },
         { name: "Сложное удаление", price: "от 8 000 ₽" },
         { name: "Удаление зуба мудрости", price: "от 12 000 ₽" },
      ],
      href: routes.service("surgery"),
   },
   {
      id: "periodontics",
      title: "Пародонтология",
      tags: ["Лечение дёсен", "Профилактика", "Шинирование"],
      description:
         "Вернём дёснам здоровье и укрепим зубы с помощью комплексного лечения, которое помогает сохранить *свою улыбку*.",
      price: "от 3 500 ₽",
      image: clinicImage,
      imageAlt: "Врач проводит консультацию по здоровью дёсен",
      doctorIds: ["kovaleva", "sokolov", "belov"],
      steps: [
         "Диагностика состояния дёсен и определение причины",
         "Профессиональная очистка и лечение воспаления",
         "Поддерживающий план ухода и контрольные визиты",
      ],
      priceItems: [
         { name: "Комплексная диагностика", price: "от 3 500 ₽" },
         { name: "Лечение воспаления дёсен", price: "от 7 000 ₽" },
         { name: "Шинирование зубов", price: "от 12 000 ₽" },
      ],
      href: routes.service("periodontics"),
   },
   {
      id: "diagnostics",
      title: "Диагностика и 3D-КТ",
      tags: ["3D-снимок", "План лечения", "Консультация"],
      description:
         "Получим полную картину состояния зубов и челюстей, чтобы составить *точный* и понятный план лечения.",
      price: "от 2 500 ₽",
      image: heroImage,
      imageAlt: "Цифровая модель улыбки на экране",
      doctorIds: ["belov", "sokolov", "morozova"],
      steps: [
         "Сбор жалоб и клинический осмотр",
         "3D-снимок и цифровой анализ",
         "Разбор результатов и подробный план лечения",
      ],
      priceItems: [
         { name: "Прицельный снимок", price: "от 800 ₽" },
         { name: "Компьютерная томография", price: "от 2 500 ₽" },
         { name: "Комплексная консультация", price: "от 3 000 ₽" },
      ],
      href: routes.service("diagnostics"),
   },
   {
      id: "microscope",
      title: "Лечение под микроскопом",
      tags: ["Каналы", "Перелечивание", "Сложные случаи"],
      description:
         "Работаем с увеличением, чтобы сохранить даже сложный зуб и выполнить лечение *максимально точно*.",
      price: "от 12 000 ₽",
      image: clinicImage,
      imageAlt: "Стоматологическое лечение с увеличением",
      doctorIds: ["sokolov", "belov", "kovaleva"],
      steps: [
         "Диагностика и оценка состояния каналов",
         "Точное лечение под операционным микроскопом",
         "Восстановление зуба и контрольный снимок",
      ],
      priceItems: [
         { name: "Лечение одноканального зуба", price: "от 12 000 ₽" },
         { name: "Перелечивание каналов", price: "от 18 000 ₽" },
         { name: "Восстановление зуба", price: "от 9 500 ₽" },
      ],
      href: routes.service("microscope"),
   },
   {
      id: "sedation",
      title: "Лечение во сне (Седация)",
      tags: ["Без стресса", "Седация", "Комфортное лечение"],
      description:
         "Поможем пройти необходимое лечение спокойно: врач подберёт безопасный формат седации и будет рядом на каждом этапе.",
      price: "от 12 000 ₽",
      image: heroImage,
      imageAlt: "Спокойная атмосфера стоматологического кабинета",
      doctorIds: ["sokolov", "kovaleva", "belov"],
      steps: [
         "Консультация и оценка состояния здоровья",
         "Подбор метода седации и проведение лечения",
         "Наблюдение после процедуры и рекомендации",
      ],
      priceItems: [
         { name: "Седация на 30 минут", price: "от 12 000 ₽" },
         { name: "Седация на 60 минут", price: "от 20 000 ₽" },
         { name: "Анестезиологическое сопровождение", price: "от 8 000 ₽" },
      ],
      href: routes.service("sedation"),
   },
   {
      id: "gnathology",
      title: "Гнатология",
      tags: ["ВНЧС", "Прикус", "Каппы"],
      description:
         "Разберёмся с причиной дискомфорта в челюсти и подберём лечение, которое возвращает *свободу движения* и комфорт.",
      price: "от 5 000 ₽",
      image: heroImage,
      imageAlt: "Цифровая диагностика прикуса",
      doctorIds: ["belov", "morozova", "sokolov"],
      steps: [
         "Функциональная диагностика и анализ прикуса",
         "Составление индивидуального плана коррекции",
         "Контроль динамики и настройка лечения",
      ],
      priceItems: [
         { name: "Консультация гнатолога", price: "от 5 000 ₽" },
         { name: "Диагностика ВНЧС", price: "от 8 000 ₽" },
         { name: "Индивидуальная каппа", price: "от 15 000 ₽" },
      ],
      href: routes.service("gnathology"),
   },
   {
      id: "restoration",
      title: "Реставрация зубов",
      tags: ["Сколы", "Форма зубов", "Эстетика"],
      description:
         "Восстановим форму и оттенок зубов, чтобы улыбка выглядела *естественно* уже после одного визита.",
      price: "от 9 500 ₽",
      image: veneersImage,
      imageAlt: "Естественная эстетика улыбки после реставрации",
      doctorIds: ["morozova", "belov", "sokolov"],
      steps: [
         "Подбор оттенка и планирование формы",
         "Бережная реставрация с учётом прикуса",
         "Полировка и рекомендации по уходу",
      ],
      priceItems: [
         { name: "Реставрация одного зуба", price: "от 9 500 ₽" },
         { name: "Восстановление скола", price: "от 7 000 ₽" },
         { name: "Эстетическая коррекция формы", price: "от 12 000 ₽" },
      ],
      href: routes.service("restoration"),
   },
   {
      id: "emergency",
      title: "Неотложная помощь",
      tags: ["Острая боль", "Приём сегодня", "Помощь 24/7"],
      description:
         "Поможем справиться с острой зубной болью и быстро определим, какое лечение нужно именно сейчас.",
      price: "от 2 500 ₽",
      image: clinicImage,
      imageAlt: "Врач проводит срочную консультацию пациента",
      doctorIds: ["sokolov", "kovaleva", "belov"],
      steps: [
         "Быстрый осмотр и диагностика причины боли",
         "Неотложная помощь и снятие острых симптомов",
         "План дальнейшего лечения и запись на удобное время",
      ],
      priceItems: [
         { name: "Неотложная консультация", price: "от 2 500 ₽" },
         { name: "Временная пломба", price: "от 3 500 ₽" },
         { name: "Остановка воспаления", price: "от 6 000 ₽" },
      ],
      href: routes.service("emergency"),
   },
];

services.push(...additionalServices);

export function getServiceById(id: string) {
   return services.find((service) => service.id === id);
}

export type SERVICES = {
   title: string;
   href: string;
   description: string;
};

export const SERVICES: SERVICES[] = [
   {
      title: "Имплантация",
      href: "/services/implantation",
      description: "Восстановление утраченных зубов с пожизненной гарантией.",
   },
   {
      title: "Эстетика и виниры",
      href: "/services/aesthetics",
      description: "Керамические виниры, отбеливание и цифровой дизайн улыбки.",
   },
   {
      title: "Ортодонтия",
      href: "/services/orthodontics",
      description: "Исправление прикуса на современных брекетах и элайнерах.",
   },
   {
      title: "Детская стоматология",
      href: "/services/kids",
      description: "Бережное лечение молочных и постоянных зубов без слёз.",
   },
   {
      title: "Лечение и гигиена",
      href: "/services/therapy",
      description: "Безболезненное лечение кариеса и профгигиена AirFlow.",
   },
   {
      title: "Протезирование",
      href: "/services/prosthetics",
      description: "Установка циркониевых, керамических коронок и протезов.",
   },
   {
      title: "Хирургия и удаление",
      href: "/services/surgery",
      description: "Атравматичное удаление зубов любой сложности и пластика.",
   },
   {
      title: "Пародонтология",
      href: "/services/periodontics",
      description: "Комплексное лечение дёсен и укрепление подвижных зубов.",
   },
   {
      title: "Диагностика и 3D-КТ",
      href: "/services/diagnostics",
      description: "Компьютерная томография челюстей и точный план лечения.",
   },
   {
      title: "Лечение под микроскопом",
      href: "/services/microscope",
      description: "Высокоточное лечение и перелечивание сложных каналов.",
   },
   {
      title: "Лечение во сне (Седация)",
      href: "/services/sedation",
      description: "Проведение любых процедур во сне без стресса и боли.",
   },
   {
      title: "Гнатология",
      href: "/services/gnathology",
      description: "Диагностика и лечение дисфункции челюстного сустава.",
   },
   {
      title: "Реставрация зубов",
      href: "/services/restoration",
      description: "Эстетическое восстановление формы и сколов за 1 визит.",
   },
   {
      title: "Неотложная помощь",
      href: "/services/emergency",
      description: "Экстренный приём при острой зубной боли в день обращения.",
   },
];
