import type { ComponentProps } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const iconBoxVariants = cva(
   "inline-flex shrink-0 items-center justify-center rounded-icon [&_svg]:shrink-0",
   {
      variants: {
         variant: {
            mint: "bg-mint text-ocean",
            ocean: "bg-ocean text-white",
         },
         size: {
            md: "size-11 [&_svg:not([class*='size-'])]:size-6",
            lg: "size-11.5 [&_svg:not([class*='size-'])]:size-5",
         },
      },
      defaultVariants: {
         variant: "mint",
         size: "lg",
      },
   },
);

export type IconBoxProps = ComponentProps<"span"> &
   VariantProps<typeof iconBoxVariants>;

/** Квадратная плитка с иконкой: логотип, карточки преимуществ. */
export function IconBox({ variant, size, className, ...props }: IconBoxProps) {
   return (
      <span
         aria-hidden
         className={cn(iconBoxVariants({ variant, size }), className)}
         {...props}
      />
   );
}

export { iconBoxVariants };
