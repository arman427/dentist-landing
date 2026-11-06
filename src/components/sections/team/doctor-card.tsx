import Image from "next/image";

import { ButtonLink } from "@/components/shared/button-link";
import { Pill } from "@/components/shared/pill";
import { Text } from "@/components/shared/text";
import { Title } from "@/components/shared/title";
import { routes } from "@/config/navigation";
import type { Doctor } from "@/data/doctors";
import { pluralize } from "@/lib/plural";
import { cn } from "@/lib/utils";

/**
 * Карточка врача. Featured-врач выделен сразу, как в макете: кнопка записи под текстом.
 * У остальных выделение и кнопка поверх фото появляются при наведении/фокусе (только CSS);
 * на сенсорных экранах, где наведения нет, кнопка видна всегда.
 */
export function DoctorCard({ doctor }: { doctor: Doctor }) {
   const { name, role, experience, photo, featured } = doctor;

   const bookingLabel = `Записаться к врачу: ${name}`;

   return (
      <article
         className={cn(
            "group flex h-full flex-col rounded-card border border-line bg-white p-3 transition-[border-color,box-shadow] duration-300 hover:border-ocean hover:shadow-elevated/10",
            featured && "border-ocean shadow-elevated",
         )}
      >
         <div className="relative h-75 overflow-hidden rounded-media bg-mint">
            <Image
               src={photo}
               alt={name}
               fill
               sizes="(min-width: 1280px) 260px, (min-width: 640px) 50vw, 100vw"
               placeholder="blur"
               className="object-cover object-[50%_20%]"
            />
            <Pill
               variant={featured ? "ocean" : "solid"}
               size="sm"
               className="absolute top-3 left-3 group-hover:bg-ocean group-hover:text-white"
            >
               Стаж {experience} {pluralize(experience, ["год", "года", "лет"])}
            </Pill>

            {!featured && (
               <ButtonLink
                  href={routes.booking}
                  size="sm"
                  aria-label={bookingLabel}
                  className="absolute inset-x-3 bottom-3 transition-[opacity,translate,color,background-color,border-color,box-shadow] duration-300 pointer-fine:translate-y-2 pointer-fine:opacity-0 group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:translate-y-0 group-hover:opacity-100"
               >
                  Записаться к врачу
               </ButtonLink>
            )}
         </div>

         <Title as="h3" size="3xs" className="mx-2 mt-4 mb-1">
            {name}
         </Title>
         <Text size="caption" className="mx-2 mb-2.5 leading-[1.45]">
            {role}
         </Text>

         {featured && (
            <ButtonLink
               href={routes.booking}
               size="sm"
               aria-label={bookingLabel}
               className="mb-0.5 w-full"
            >
               Записаться к врачу
            </ButtonLink>
         )}
      </article>
   );
}
