import Link from "next/link";

import type { NavLink } from "@/config/navigation";
import { toTop } from "@/lib/toTop";
import { cn } from "@/lib/utils";
import {
   NavigationMenu,
   NavigationMenuContent,
   NavigationMenuItem,
   NavigationMenuLink,
   NavigationMenuList,
   NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { SERVICES } from "@/data/services";

type MainNavProps = {
   items: NavLink[];
   className?: string;
};

export function MainNav({ items, className }: MainNavProps) {
   return (
      <NavigationMenu
         aria-label="Основная навигация"
         align="center"
         className={cn("rounded-full p-1.5", className)}
      >
         <NavigationMenuList className="flex gap-1.5">
            {items.map((item) =>
               item.label === "Услуги" ? (
                  <NavigationMenuItem key={item.label}>
                     <NavigationMenuTrigger>Услуги</NavigationMenuTrigger>
                     <NavigationMenuContent className="grid h-auto w-[min(70rem,calc(100vw-2rem))] grid-cols-4">
                        {SERVICES.map((item) => (
                           <NavigationMenuLink
                              key={item.title}
                              href={item.href}
                              className="flex-col gap-0"
                           >
                              <h4 className="text-[14px] font-semibold text-ocean">
                                 {item.title}
                              </h4>
                              <p className="text-[12px] leading-5 text-ink-soft">
                                 {item.description}
                              </p>
                           </NavigationMenuLink>
                        ))}
                     </NavigationMenuContent>
                  </NavigationMenuItem>
               ) : (
                  <li key={item.label}>
                     <Link
                        href={item.href}
                        onClick={item.href === "/" ? toTop : undefined}
                        className="block rounded-full px-4.5 py-2.5 text-body-sm text-ink/80 transition-colors hover:text-ink"
                     >
                        {item.label}
                     </Link>
                  </li>
               ),
            )}
         </NavigationMenuList>
      </NavigationMenu>
   );
}
