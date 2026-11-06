import Link from "next/link";
import { ArrowUpRightIcon, ListIcon } from "@phosphor-icons/react/ssr";

import { buttonVariants } from "@/components/ui/button";
import {
   Sheet,
   SheetClose,
   SheetContent,
   SheetDescription,
   SheetTitle,
   SheetTrigger,
} from "@/components/ui/sheet";
import { routes, type NavLink } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { toTop } from "@/lib/toTop";

type MobileNavProps = {
   items: NavLink[];
   className?: string;
};

/**
 * Мобильное меню. Сам компонент серверный — клиентские только примитивы Sheet из shadcn.
 * Пункты — это ссылки, которые заодно закрывают шторку (SheetClose c render={<Link />}).
 * Base UI помечает такой элемент role="button", поэтому явно возвращаем role="link".
 */
export function MobileNav({ items, className }: MobileNavProps) {
   return (
      <Sheet>
         <SheetTrigger
            aria-label="Открыть меню"
            className={cn(
               buttonVariants({ variant: "outline", size: "icon" }),
               className,
            )}
         >
            <ListIcon />
         </SheetTrigger>

         <SheetContent
            side="right"
            className="gap-0 bg-surface p-6 data-[side=right]:w-full"
         >
            <SheetTitle className="text-title-xs">Меню</SheetTitle>
            <SheetDescription className="sr-only">
               Навигация по сайту клиники
            </SheetDescription>

            <nav aria-label="Мобильная навигация" className="mt-6">
               <ul>
                  {items.map((item) => (
                     <li key={item.label}>
                        <SheetClose
                           onClick={item.href === "/" ? toTop : undefined}
                           nativeButton={false}
                           render={
                              item.href.includes("#") ? (
                                 <a href={item.href} />
                              ) : (
                                 <Link href={item.href} />
                              )
                           }
                           role="link"
                           className="block w-full border-b border-line py-4 text-left text-title-xs font-normal transition-colors hover:text-ocean"
                        >
                           {item.label}
                        </SheetClose>
                     </li>
                  ))}
               </ul>
            </nav>

            <div className="mt-auto flex flex-col gap-4 pt-8">
               <a href={siteConfig.phone.href} className="text-lg font-medium">
                  {siteConfig.phone.label}
               </a>
               <SheetClose
                  nativeButton={false}
                  render={<a href={routes.booking} />}
                  role="link"
                  className={buttonVariants({ className: "w-full" })}
               >
                  Записаться
                  <ArrowUpRightIcon />
               </SheetClose>
            </div>
         </SheetContent>
      </Sheet>
   );
}
