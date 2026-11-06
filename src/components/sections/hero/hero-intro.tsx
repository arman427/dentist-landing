import { ArrowUpRightIcon, TelegramLogoIcon } from "@phosphor-icons/react/ssr";

import { HeroRating } from "@/components/sections/hero/hero-rating";
import { Accent } from "@/components/shared/accent";
import { ButtonLink } from "@/components/shared/button-link";
import { Pill } from "@/components/shared/pill";
import { StatusDot } from "@/components/shared/status-dot";
import { Text } from "@/components/shared/text";
import { Title } from "@/components/shared/title";
import { routes } from "@/config/navigation";
import { siteConfig } from "@/config/site";

export function HeroIntro() {
   return (
      <div
         data-hero-reveal
         data-hero-intro
         className="flex min-h-0 flex-col justify-between gap-10 overflow-hidden rounded-tile bg-mint px-6 pt-8 pb-8 sm:px-12 sm:pt-10 sm:pb-9"
      >
         <div>
            <Pill data-hero-item>
               <StatusDot />
               Принимаем сегодня — без очередей
            </Pill>

            <Title
               id="hero-title"
               size="display"
               className="mt-6.5"
               data-hero-item
            >
               Улыбка, которой
               <br />
               <Accent className="text-[1.09em]">хочется</Accent> делиться
            </Title>

            <Text size="lead" className="mt-5 max-w-135" data-hero-item>
               Лечим, восстанавливаем и делаем зубы красивыми — бережно, без
               боли и с честной сметой до начала лечения.
            </Text>

            <div className="mt-7 flex flex-wrap gap-3" data-hero-item>
               <ButtonLink href={routes.booking}>
                  Записаться на консультацию
                  <ArrowUpRightIcon />
               </ButtonLink>
               <ButtonLink
                  href={siteConfig.social.telegram}
                  external
                  variant="outline"
               >
                  <TelegramLogoIcon />
                  Запись в Telegram
               </ButtonLink>
            </div>
         </div>

         <div data-hero-item>
            <HeroRating />
         </div>
      </div>
   );
}
