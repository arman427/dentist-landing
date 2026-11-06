import { HeroImplant } from "@/components/sections/hero/hero-implant";
import { HeroIntro } from "@/components/sections/hero/hero-intro";
import { HeroMedia } from "@/components/sections/hero/hero-media";
import { HeroMotion } from "@/components/sections/hero/hero-motion";
import { PromoCard } from "@/components/sections/hero/promo-card";
import { Section } from "@/components/shared/section";

export function Hero() {
   return (
      <HeroMotion>
         <Section id="top" spaced={false} aria-labelledby="hero-title">
            <div className="grid gap-4 xl:h-200 xl:grid-cols-2">
               <div className="grid min-h-0 gap-4 xl:grid-rows-[minmax(0,1fr)_250px]">
                  <HeroIntro />
                  <div className="grid gap-4 sm:grid-cols-[250px_1fr]">
                     <HeroImplant className="hidden sm:block" />
                     <PromoCard />
                  </div>
               </div>
               <HeroMedia />
            </div>
         </Section>
      </HeroMotion>
   );
}
