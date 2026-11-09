import { Text } from "@/components/shared/text";
import type { ServicePrice } from "@/data/services";
import { cn } from "@/lib/utils";

type ServicePricesProps = {
   items: ServicePrice[];
   className?: string;
};

/** Адаптивный прайс услуги: на мобильном каждая позиция остаётся читаемой строкой. */
export function ServicePrices({ items, className }: ServicePricesProps) {
   return (
      <div className={cn("overflow-hidden rounded-panel bg-mint", className)}>
         <dl className="divide-y divide-mint-deep">
            {items.map((item) => (
               <div
                  key={item.name}
                  className="grid gap-2 px-6 py-5 sm:grid-cols-[1fr_auto] sm:items-center sm:gap-6 sm:px-8"
               >
                  <div>
                     <dt className="font-medium text-ink">{item.name}</dt>
                     {item.note && (
                        <Text size="caption" className="mt-1">
                           {item.note}
                        </Text>
                     )}
                  </div>
                  <dd className="text-title-3xs font-medium text-ocean">
                     {item.price}
                  </dd>
               </div>
            ))}
         </dl>
      </div>
   );
}
