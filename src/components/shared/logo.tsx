import Link from "next/link";
import { ToothIcon } from "@phosphor-icons/react/ssr";

import { IconBox } from "@/components/shared/icon-box";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
   return (
      <Link
         href="/"
         aria-label={`${siteConfig.fullName} — на главную`}
         className={cn("flex items-center gap-3", className)}
      >
         <IconBox variant="ocean" size="md">
            <ToothIcon />
         </IconBox>
         <span className="flex flex-col">
            <span className="text-[1.625rem] leading-[1.2] font-semibold tracking-[-0.02em]">
               {siteConfig.name}
            </span>
            <span className="-mt-0.5 text-xs tracking-[0.02em] text-ink-soft">
               стоматология
            </span>
         </span>
      </Link>
   );
}
