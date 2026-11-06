import { ArrowRightIcon } from "@phosphor-icons/react/ssr";

import { ButtonLink } from "@/components/shared/button-link";
import { Text } from "@/components/shared/text";
import { routes } from "@/config/navigation";
import { pluralize } from "@/lib/plural";

export function TeamMoreCard({ count }: { count: number }) {
   return (
      <div className="flex h-full flex-col justify-between gap-8 rounded-card bg-mint p-7">
         <p className="text-metric-lg text-ocean">+{count}</p>
         <Text>
            {pluralize(count, ["врач", "врача", "врачей"])} разных направлений —
            подберём специалиста под вашу задачу
         </Text>
         <ButtonLink href={routes.doctors} variant="outline" className="w-full">
            Все врачи
            <ArrowRightIcon />
         </ButtonLink>
      </div>
   );
}
