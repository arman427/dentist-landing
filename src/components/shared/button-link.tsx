import type { ComponentProps } from "react";
import Link from "next/link";
import type { VariantProps } from "class-variance-authority";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type ButtonLinkProps = Omit<ComponentProps<typeof Link>, "href"> & {
       href: string;
    } &
   VariantProps<typeof buttonVariants> & {
      /** Открыть во внешней вкладке (Telegram, VK…). */
      external?: boolean;
   };

/**
 * Ссылка в виде кнопки shadcn — без клиентского JS.
 * @example <ButtonLink href="#contacts">Записаться <ArrowUpRightIcon /></ButtonLink>
 */
export function ButtonLink({
   variant,
   size,
   external,
   className,
   ...props
 }: ButtonLinkProps) {
   const isAnchor = external || props.href.toString().includes("#");
   const linkProps = {
      "data-slot": "button",
      className: cn(buttonVariants({ variant, size }), className),
      ...(external && { target: "_blank", rel: "noopener noreferrer" }),
      ...props,
   };

   if (isAnchor) {
      return <a {...linkProps} />;
   }

   return (
      <Link
         {...linkProps}
      />
   );
}
