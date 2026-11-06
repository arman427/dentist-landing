import type { StaticImageData } from "next/image";

import belovPhoto from "@/assets/images/doctors/belov.jpg";
import kovalevaPhoto from "@/assets/images/doctors/kovaleva.jpg";
import morozovaPhoto from "@/assets/images/doctors/morozova.jpg";
import sokolovPhoto from "@/assets/images/doctors/sokolov.jpg";

export type Doctor = {
   id: string;
   name: string;
   role: string;
   /** Стаж в годах */
   experience: number;
   photo: StaticImageData;
   /** Выделенная карточка (как в макете). */
   featured?: boolean;
};

/** Всего врачей в клинике — для «(18 специалистов)» и «+14». */
export const TEAM_SIZE = 18;

export const doctors: Doctor[] = [
   {
      id: "sokolov",
      name: "Соколов Андрей Викторович",
      role: "Главный врач, хирург-имплантолог",
      experience: 24,
      photo: sokolovPhoto,
   },
   {
      id: "morozova",
      name: "Морозова Елена Игоревна",
      role: "Стоматолог-эстетист, виниры",
      experience: 9,
      photo: morozovaPhoto,
      featured: true,
   },
   {
      id: "belov",
      name: "Белов Максим Олегович",
      role: "Ортодонт, элайнеры и брекеты",
      experience: 11,
      photo: belovPhoto,
   },
   {
      id: "kovaleva",
      name: "Ковалёва Ольга Сергеевна",
      role: "Детский стоматолог",
      experience: 17,
      photo: kovalevaPhoto,
   },
];

export function getDoctorsByIds(ids: string[]) {
   return ids.flatMap((id) => doctors.find((doctor) => doctor.id === id) ?? []);
}
