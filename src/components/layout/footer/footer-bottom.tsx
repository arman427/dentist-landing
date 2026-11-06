import Link from "next/link";

import { routes } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function FooterBottom({ className }: { className?: string }) {
   return (
      <div
         className={cn(
            "flex flex-col gap-3 text-sm text-ink-soft md:flex-row md:items-center md:justify-between",
            className,
         )}
      >
         <p>
            © {siteConfig.copyrightYear}, стоматология «{siteConfig.name}»
         </p>
         <p className="flex flex-col gap-1 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-3">
            <Link
               href={routes.privacy}
               className="transition-colors hover:text-ink"
            >
               Политика конфиденциальности
            </Link>
            <span aria-hidden className="max-sm:hidden">
               ·
            </span>
            <span>Лицензия № {siteConfig.license}</span>
         </p>
      </div>
   );
}
