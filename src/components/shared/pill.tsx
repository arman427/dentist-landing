import type { HTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const pillVariants = cva(
   "inline-flex w-fit shrink-0 items-center gap-2 rounded-full whitespace-nowrap transition-colors",
   {
      variants: {
         variant: {
            outline: "border border-line bg-white text-ink",
            glass: "border border-white/30 bg-glass text-ink backdrop-blur-glass-sm",
            solid: "bg-white text-ink",
            ocean: "bg-ocean text-white",
            ghost: "border border-line text-ink-soft",
         },
         size: {
            xs: "px-2.5 py-1 text-xs",
            sm: "px-3 py-1.5 text-xs",
            md: "px-4 py-2 text-sm",
            lg: "px-4 py-2.25 text-sm",
         },
      },
      defaultVariants: {
         variant: "outline",
         size: "md",
      },
   },
);

type PillTag = "span" | "li" | "p" | "h2" | "h3";

export type PillProps = HTMLAttributes<HTMLElement> &
   VariantProps<typeof pillVariants> & {
      as?: PillTag;
   };

/** Пилюля: метки разделов, чипы на фото, стаж врача, источник отзыва. */
export function Pill({
   as: Tag = "span",
   variant,
   size,
   className,
   ...props
}: PillProps) {
   return (
      <Tag
         data-slot="pill"
         className={cn(pillVariants({ variant, size }), className)}
         {...props}
      />
   );
}

export { pillVariants };
