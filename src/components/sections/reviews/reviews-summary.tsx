import { siteConfig } from "@/config/site";

export function ReviewsSummary() {
   return (
      <div className="flex items-center gap-5.5">
         <p className="flex items-baseline gap-1">
            <span className="text-metric-sm text-ink">
               {siteConfig.rating.value}
            </span>
            <span className="text-sm text-ink-soft">/ 5</span>
         </p>
         <p className="text-sm text-ink-soft">
            {siteConfig.rating.count}+ отзывов
            <br />
            на Яндекс и 2ГИС
         </p>
      </div>
   );
}
