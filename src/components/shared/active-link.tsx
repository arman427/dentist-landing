"use client";

import type { ComponentProps } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type ActiveLinkProps = Omit<ComponentProps<"a">, "href"> & {
   href: string;
   isActive?: boolean;
};

/**
 * Link с aria-current="page" для текущей страницы.
 * Клиентский только ради usePathname — само меню остаётся серверным.
 */
export function ActiveLink({ href, isActive, ...props }: ActiveLinkProps) {
   const pathname = usePathname();
   const isAnchor = href.includes("#");

   if (isAnchor) {
      return (
         <a
            href={href}
            aria-current={isActive ? "location" : undefined}
            {...props}
         />
      );
   }

   return (
      <Link
         href={href}
         aria-current={(isActive ?? pathname === href) ? "page" : undefined}
         {...props}
      />
   );
}
