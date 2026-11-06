import { ArrowUpRightIcon } from "@phosphor-icons/react/ssr";

import { IconCircle } from "@/components/shared/icon-circle";
import { Text } from "@/components/shared/text";
import { Title } from "@/components/shared/title";
import { hero } from "@/data/hero";

export function OfferCard() {
   const { label, title, price, href } = hero.offer;

   return (
      <a
         href={href}
         className="group block w-full rounded-card bg-white px-5.5 pt-6.25 pb-5 sm:w-62.5"
      >
         <Text size="caption">{label}</Text>
         <Title as="p" size="xs" className="mt-1.5 mb-4">
            {title}
         </Title>
         <div className="flex items-center justify-between">
            <span className="text-lg font-semibold text-ocean">{price}</span>
            <IconCircle
               size="md"
               className="group-hover:bg-ink group-hover:text-white"
            >
               <ArrowUpRightIcon />
            </IconCircle>
         </div>
      </a>
   );
}
