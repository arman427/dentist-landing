import { ArrowUpRightIcon, PlusIcon } from "@phosphor-icons/react/ssr";

import { IconCircle } from "@/components/shared/icon-circle";
import type { Service } from "@/data/services";

type ServiceTabProps = {
   service: Service;
   index: number;
};

/** Содержимое вкладки. Активное состояние — через group-data-active (без JS). */
export function ServiceTab({ service, index }: ServiceTabProps) {
   return (
      <>
         <span className="min-w-0">
            <span className="block text-title-md transition-colors group-hover/service:text-ocean group-data-active/service:text-ocean">
               {service.title}
               <sup className="-top-[1.1em] ml-2 text-sm tracking-normal text-ink-soft">
                  {String(index + 1).padStart(2, "0")}
               </sup>
            </span>
            <span className="mt-1.5 hidden text-sm text-ink-soft group-data-active/service:block">
               {service.tags.join(" · ")}
            </span>
         </span>
         <IconCircle
            variant="subtle"
            size="sm"
            className="group-data-active/service:border-ocean group-data-active/service:bg-ocean group-data-active/service:text-white"
         >
            <PlusIcon className="group-data-active/service:hidden" />
            <ArrowUpRightIcon className="hidden group-data-active/service:block" />
         </IconCircle>
      </>
   );
}
