"use client";

import { ArrowUpRightIcon } from "@phosphor-icons/react/ssr";

import { MainNav } from "@/components/layout/header/main-nav";
import { MobileNav } from "@/components/layout/header/mobile-nav";
import { ButtonLink } from "@/components/shared/button-link";
import { Container } from "@/components/shared/container";
import { Logo } from "@/components/shared/logo";
import { mainNav, routes } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { useThreeshold } from "@/hooks/use-threeshold";
import { cn } from "@/lib/utils";

export function Header() {
   const isScrolled = useThreeshold(24);

   return (
      <header
         className="sticky top-0 z-50 h-20 lg:h-24"
      >
         <div
            className={cn(
               "absolute inset-x-0 top-0 border-b border-transparent bg-surface/0 transition-[background-color,border-color,box-shadow] duration-300",
               isScrolled &&
                  "border-line/80 bg-surface/92 shadow-[0_10px_30px_-24px_rgb(13_43_44/0.6)] backdrop-blur-md",
            )}
         >
            <Container
               className={cn(
                  "flex items-center justify-between gap-4 transition-[height] duration-300",
                  isScrolled ? "h-16 lg:h-20" : "h-20 lg:h-24",
               )}
            >
               <Logo />
               <MainNav items={mainNav} className="hidden lg:block" />
               <div className="flex items-center gap-3 xl:gap-5.5">
                  <a
                     href={siteConfig.phone.href}
                     className="hidden text-body-sm text-ink transition-colors hover:text-ocean xl:inline"
                  >
                     {siteConfig.phone.label}
                  </a>
                  <ButtonLink
                     href={routes.booking}
                     size="md"
                     className="hidden sm:inline-flex"
                  >
                     Записаться
                     <ArrowUpRightIcon />
                  </ButtonLink>
                  <MobileNav items={mainNav} className="lg:hidden" />
               </div>
            </Container>
         </div>
      </header>
   );
}
