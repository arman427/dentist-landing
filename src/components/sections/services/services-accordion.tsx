"use client";

import { useRef, useState, type ReactNode } from "react";

import {
   Accordion,
   AccordionContent,
   AccordionItem,
   AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

export type ServicesAccordionItem = {
   id: string;
   title: ReactNode;
   icon: ReactNode;
   tags: ReactNode;
   panel: ReactNode;
};

const DESKTOP = "(min-width: 80rem)"; // xl
const ANIMATION_MS = 350;

/**
 * Клиентская «оболочка»: хранит открытый пункт, всё содержимое приходит с сервера.
 * На десктопе справа показывается панель выбранного пункта; все пункты можно закрыть.
 */
export function ServicesAccordion({
   items,
   defaultValue,
}: {
   items: ServicesAccordionItem[];
   defaultValue: string;
}) {
   const [value, setValue] = useState<string[]>(
      defaultValue ? [defaultValue] : [],
   );
   const frame = useRef(0);

   // На мобильных панели большие: пока верхний пункт схлопывается, держим нажатый
   // заголовок на месте, чтобы страница не «уезжала» из-под пальца.
   function keepInView(id: string) {
      if (window.matchMedia(DESKTOP).matches) return;
      const trigger = document.getElementById(`service-trigger-${id}`);
      if (!trigger) return;

      const top = trigger.getBoundingClientRect().top;
      const end = performance.now() + ANIMATION_MS;
      cancelAnimationFrame(frame.current);

      const tick = () => {
         const shift = trigger.getBoundingClientRect().top - top;
         if (shift) window.scrollBy({ top: shift, behavior: "instant" });
         if (performance.now() < end)
            frame.current = requestAnimationFrame(tick);
      };
      frame.current = requestAnimationFrame(tick);
   }

   return (
      <div className="grid gap-8 [overflow-anchor:none] lg:gap-4 xl:grid-cols-[1fr_400px_420px]">
         <Accordion
            value={value}
            onValueChange={(next) => {
               const id = next[0] as string | undefined;
               if (id) keepInView(id);
               setValue(next as string[]);
            }}
            className="xl:self-start"
         >
            {items.map((item) => (
               <AccordionItem
                  key={item.id}
                  value={item.id}
                  className="group/item relative border-b border-line text-ink"
               >
                  <AccordionTrigger
                     id={`service-trigger-${item.id}`}
                     icon={item.icon}
                     className="group/service py-6.5 pr-15 font-normal group-first/item:pt-0 data-panel-open:pb-0"
                  >
                     {item.title}
                  </AccordionTrigger>
                  <AccordionContent
                     hiddenUntilFound
                     className="pt-1.5 pb-6.5 text-sm"
                  >
                     <span className="block text-ink-soft xl:pr-15">
                        {item.tags}
                     </span>
                     <div className="mt-6 grid gap-4 text-base md:grid-cols-[400fr_420fr] xl:hidden">
                        {item.panel}
                     </div>
                  </AccordionContent>
               </AccordionItem>
            ))}
         </Accordion>

         {/* Десктоп: панели лежат в одной ячейке и сменяются плавным затуханием. */}
         <div className="grid max-xl:hidden xl:col-span-2">
            {items.map((item) => (
               <div
                  key={item.id}
                  aria-hidden={item.id !== value[0]}
                  className={cn(
                     "col-start-1 row-start-1 grid grid-cols-[400fr_420fr] gap-4 text-base transition-[opacity,visibility,translate] duration-500 ease-accordion motion-reduce:transition-none",
                     item.id === value[0]
                        ? "visible opacity-100"
                        : "invisible translate-y-2 opacity-0",
                  )}
               >
                  {item.panel}
               </div>
            ))}
         </div>
      </div>
   );
}
