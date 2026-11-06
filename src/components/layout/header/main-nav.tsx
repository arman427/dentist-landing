import { ActiveLink } from "@/components/shared/active-link";
import type { NavLink } from "@/config/navigation";
import { useActiveSection } from "@/hooks/use-active-section";
import { toTop } from "@/lib/toTop";
import { cn } from "@/lib/utils";

type MainNavProps = {
   items: NavLink[];
   className?: string;
};

const mainSectionIds = ["top", "services", "doctors", "reviews", "contacts"];

export function MainNav({ items, className }: MainNavProps) {
   const activeSection = useActiveSection(mainSectionIds);

   return (
      <nav
         aria-label="Основная навигация"
         className={cn(
            "rounded-full border border-line bg-white p-1.5",
            className,
         )}
      >
         <ul className="flex gap-1.5">
            {items.map((item) => (
               <li key={item.label}>
                  <ActiveLink
                     href={item.href}
                     onClick={item.href === "/" ? toTop : undefined}
                     isActive={
                        item.href === "/"
                           ? activeSection === "top"
                           : activeSection !== null &&
                             item.href.endsWith(`#${activeSection}`)
                     }
                     className="block rounded-full px-4.5 py-2.5 text-body-sm text-ink transition-colors hover:bg-mint/60 aria-[current=location]:bg-mint aria-[current=page]:bg-mint"
                  >
                     {item.label}
                  </ActiveLink>
               </li>
            ))}
         </ul>
      </nav>
   );
}
