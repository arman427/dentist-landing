import type { ComponentProps } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const iconCircleVariants = cva(
   "inline-flex shrink-0 items-center justify-center rounded-full border transition-colors duration-200 [&_svg]:shrink-0",
   {
      variants: {
         variant: {
            outline: "border-ink text-ink",
            "outline-inverse": "border-white/50 text-white",
            subtle: "border-line text-ink-soft",
            primary: "border-ocean bg-ocean text-white",
            white: "border-white bg-white text-ocean",
         },
         size: {
            sm: "size-9 [&_svg:not([class*='size-'])]:size-4",
            md: "size-11 [&_svg:not([class*='size-'])]:size-[18px]",
            lg: "size-13 [&_svg:not([class*='size-'])]:size-[18px]",
            xl: "size-14 [&_svg:not([class*='size-'])]:size-6",
         },
      },
      defaultVariants: {
         variant: "outline",
         size: "lg",
      },
   },
);

export type IconCircleProps = ComponentProps<"span"> &
   VariantProps<typeof iconCircleVariants>;

/** Круглая «кнопка» со стрелкой/иконкой. Для ссылок используй iconCircleVariants. */
export function IconCircle({
   variant,
   size,
   className,
   ...props
}: IconCircleProps) {
   return (
      <span
         aria-hidden
         className={cn(iconCircleVariants({ variant, size }), className)}
         {...props}
      />
   );
}

export { iconCircleVariants };
