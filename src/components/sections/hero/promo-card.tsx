import { ArrowUpRightIcon } from "@phosphor-icons/react/ssr";

import { Accent } from "@/components/shared/accent";
import { IconCircle } from "@/components/shared/icon-circle";
import { Title } from "@/components/shared/title";
import { hero } from "@/data/hero";

export function PromoCard() {
   return (
      <a
         data-hero-reveal
         href={hero.promo.href}
         className="group relative flex min-h-62.5 flex-col justify-between gap-8 overflow-hidden rounded-tile bg-ocean px-8.5 py-8 text-white"
      >
         {/* декоративные «волны» */}
         <span
            aria-hidden
            className="pointer-events-none absolute -top-15 -right-10 size-65 rounded-full border border-white/14"
         />
         <span
            aria-hidden
            className="pointer-events-none absolute -top-27.5 -right-22.5 size-90 rounded-full border border-white/14"
         />

         <Title as="p" size="sm" tone="inverse" className="relative">
            Консультация
            <br />и 3D-снимок —
            <br />
            <Accent tone="light">бесплатно</Accent>
         </Title>

         <div className="relative flex items-end justify-between gap-4 text-sm text-white/72">
            <span>{hero.promo.note}</span>
            <IconCircle
               variant="outline-inverse"
               className="group-hover:border-white group-hover:bg-white group-hover:text-ocean"
            >
               <ArrowUpRightIcon />
            </IconCircle>
         </div>
      </a>
   );
}
