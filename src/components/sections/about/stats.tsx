import type { Stat } from "@/data/stats";
import { cn } from "@/lib/utils";

type StatsProps = {
   items: Stat[];
   className?: string;
};

export function Stats({ items, className }: StatsProps) {
   return (
      <ul
         className={cn(
            "grid grid-cols-2 gap-x-4 gap-y-8 lg:grid-cols-4",
            className,
         )}
      >
         {items.map((stat) => (
            <li key={stat.label} className="border-t border-line pt-5.5">
               <p className="text-metric text-ocean">
                  {stat.value}
                  <sup className="-top-[0.9em] text-[0.43em] tracking-[-0.02em]">
                     {stat.suffix}
                  </sup>
               </p>
               <p className="mt-1 text-body-sm text-ink-soft">{stat.label}</p>
            </li>
         ))}
      </ul>
   );
}
