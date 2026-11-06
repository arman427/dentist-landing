import { AvatarGroup } from "@/components/shared/avatar";
import { siteConfig } from "@/config/site";
import { hero } from "@/data/hero";

export function HeroRating() {
   return (
      <div className="flex items-center gap-3.5 text-sm text-ink-soft">
         <AvatarGroup items={hero.ratingAvatars} />
         <p>
            <span className="text-base font-semibold text-ink">
               {siteConfig.rating.value} ★
            </span>{" "}
            на Яндекс Картах
            <br />
            более {siteConfig.rating.count} отзывов пациентов
         </p>
      </div>
   );
}
