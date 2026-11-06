import Link from "next/link";

import { SocialLinks } from "@/components/layout/footer/social-links";
import { footerNav } from "@/config/navigation";
import { cn } from "@/lib/utils";

const headingClassName = "mb-3.5 text-xs tracking-label text-ocean uppercase";

export function FooterNav({ className }: { className?: string }) {
   return (
      <div
         className={cn(
            "grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-0",
            className,
         )}
      >
         {footerNav.map((group) => (
            <nav key={group.title} aria-label={group.title}>
               <p className={headingClassName}>{group.title}</p>
               <ul className="space-y-2.5 text-body-sm">
                  {group.links.map((link) => (
                     <li key={link.label}>
                        {link.href.includes("#") ? (
                           <a
                              href={link.href}
                              className="transition-colors hover:text-ocean"
                           >
                              {link.label}
                           </a>
                        ) : (
                           <Link
                              href={link.href}
                              className="transition-colors hover:text-ocean"
                           >
                              {link.label}
                           </Link>
                        )}
                     </li>
                  ))}
               </ul>
            </nav>
         ))}
         <div>
            <p className={headingClassName}>Мы в сети</p>
            <SocialLinks />
         </div>
      </div>
   );
}
