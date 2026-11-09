import { MinusIcon, PlusIcon } from "@phosphor-icons/react/ssr";

import { IconCircle } from "@/components/shared/icon-circle";
import type { Service } from "@/data/services";

const fade =
   "transition-[opacity,rotate] duration-300 ease-accordion motion-reduce:transition-none";

/** Заголовок пункта. Открытое состояние — через group-aria-expanded (без JS). */
export function ServiceTitle({
   service,
   index,
}: {
   service: Service;
   index: number;
}) {
   return (
      <span className="block text-title-md transition-colors duration-300 group-hover/service:text-ocean group-aria-expanded/service:text-ocean">
         {service.title}
         <sup className="-top-[1.1em] ml-2 text-sm tracking-normal text-ink-soft">
            {String(index + 1).padStart(2, "0")}
         </sup>
      </span>
   );
}

/**
 * Иконка позиционируется от пункта (не от кнопки), поэтому во время раскрытия
 * плавно съезжает к центру «заголовок + теги», как в макете.
 */
export function ServiceIcon() {
   return (
      <IconCircle
         variant="subtle"
         size="sm"
         className="pointer-events-none absolute top-1/2 right-0 -translate-y-1/2 duration-300 group-first/item:-mt-3.25 max-xl:top-[calc(--spacing(6.5)+0.5lh)] max-xl:text-title-md max-xl:group-first/item:-mt-6.5 group-data-open/item:border-ocean group-data-open/item:bg-ocean group-data-open/item:text-white"
      >
         <PlusIcon
            className={`absolute ${fade} group-data-open/item:rotate-90 group-data-open/item:opacity-0`}
         />
         <MinusIcon
            className={`absolute opacity-0 ${fade} group-data-open/item:rotate-0 group-data-open/item:opacity-100`}
         />
      </IconCircle>
   );
}
