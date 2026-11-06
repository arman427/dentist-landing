import Image from "next/image";
import { TelegramLogoIcon } from "@phosphor-icons/react/ssr";

import { BookingCard } from "@/components/sections/hero/booking-card";
import { OfferCard } from "@/components/sections/hero/offer-card";
import { iconCircleVariants } from "@/components/shared/icon-circle";
import { Pill } from "@/components/shared/pill";
import { siteConfig } from "@/config/site";
import { hero } from "@/data/hero";

export function HeroMedia() {
   return (
      <div
         data-hero-reveal
         data-hero-media
         className="relative min-h-170 overflow-hidden rounded-tile sm:min-h-180 xl:min-h-0"
      >
         <Image
            src={hero.image.src}
            alt={hero.image.alt}
            fill
            sizes="(min-width: 1280px) 50vw, 100vw"
            placeholder="blur"
            loading="eager"
            fetchPriority="high"
            data-hero-media-image
            className="object-cover object-[50%_30%]"
         />

         <ul
            data-hero-item
            className="absolute top-6 left-6 flex max-w-[calc(100%-7rem)] flex-wrap gap-2"
         >
            {hero.tags.map((tag) => (
               <Pill key={tag} as="li" variant="glass" size="lg">
                  {tag}
               </Pill>
            ))}
         </ul>

         <a
            href={siteConfig.social.telegram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Записаться в Telegram"
            data-hero-item
            className={iconCircleVariants({
               variant: "white",
               size: "xl",
               className: "absolute top-6 right-6 hover:bg-mint",
            })}
         >
            <TelegramLogoIcon />
         </a>

         <div
            className="absolute inset-x-4 bottom-4 flex flex-col gap-3 sm:inset-x-6 sm:bottom-6 sm:flex-row sm:items-end sm:justify-between"
         >
            <BookingCard />
            <OfferCard />
         </div>
      </div>
   );
}
