import { ArrowUpRightIcon } from "@phosphor-icons/react/ssr";

import { Title } from "@/components/shared/title";
import { hero } from "@/data/hero";
import { cn } from "@/lib/utils";

/**
 * Карточка-ссылка на запись. Слоты — декоративные (реального расписания нет),
 * поэтому скрыты от скринридеров, а вся карточка ведёт к форме записи.
 */
export function BookingCard() {
   const { label, status, title, slots, highlighted, href } = hero.booking;

   return (
      <a
         href={href}
         className="group/booking block w-full rounded-card border border-white/75 bg-glass p-5.5 backdrop-blur-glass transition-colors duration-300 hover:border-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:w-82.5"
      >
         <span className="flex justify-between text-caption text-ink-soft">
            <span>{label}</span>
            <span>● {status}</span>
         </span>
         <Title
            as="span"
            size="2xs"
            className="mt-1.5 mb-3.5 flex items-center justify-between gap-3 transition-colors group-hover/booking:text-ocean"
         >
            {title}
            <ArrowUpRightIcon
               aria-hidden
               className="size-4.5 shrink-0 transition-transform duration-300 group-hover/booking:translate-x-0.5 group-hover/booking:-translate-y-0.5"
            />
         </Title>
         <span aria-hidden className="flex flex-wrap gap-2">
            {slots.map((slot) => (
               <span
                  key={slot}
                  className={cn(
                     "inline-flex h-8.5 items-center rounded-chip px-3 text-sm transition-colors",
                     slot === highlighted
                        ? "bg-ocean text-white"
                        : "bg-white text-ink",
                  )}
               >
                  {slot}
               </span>
            ))}
         </span>
      </a>
   );
}
