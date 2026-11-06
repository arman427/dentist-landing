import type { Icon } from "@phosphor-icons/react";
import {
   ClockIcon,
   CreditCardIcon,
   FileTextIcon,
   ShieldCheckIcon,
} from "@phosphor-icons/react/ssr";

export type Feature = {
   icon: Icon;
   title: string;
   description: string;
};

export const features: Feature[] = [
   {
      icon: ShieldCheckIcon,
      title: "Гарантия до 10 лет",
      description: "на импланты и коронки",
   },
   {
      icon: CreditCardIcon,
      title: "Рассрочка 0%",
      description: "без первого взноса",
   },
   {
      icon: FileTextIcon,
      title: "Налоговый вычет",
      description: "поможем оформить документы",
   },
   {
      icon: ClockIcon,
      title: "Без выходных",
      description: "ежедневно с 9:00 до 21:00",
   },
];
