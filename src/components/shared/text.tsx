import type { HTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const textVariants = cva("", {
   variants: {
      size: {
         xs: "text-xs",
         caption: "text-caption",
         sm: "text-sm",
         "body-sm": "text-body-sm",
         base: "text-base leading-[1.6]",
         lead: "text-body-lg",
         lg: "text-lg leading-normal",
      },
      tone: {
         default: "text-ink",
         muted: "text-ink-soft",
         ocean: "text-ocean",
         inverse: "text-white",
         "inverse-muted": "text-white/75",
      },
   },
   defaultVariants: {
      size: "base",
      tone: "muted",
   },
});

type TextTag = "p" | "span" | "div" | "small";

export type TextProps = HTMLAttributes<HTMLElement> &
   VariantProps<typeof textVariants> & {
      as?: TextTag;
   };

/** Наборный текст: размер и тон из шкалы макета. */
export function Text({
   as: Tag = "p",
   size,
   tone,
   className,
   ...props
}: TextProps) {
   return (
      <Tag className={cn(textVariants({ size, tone }), className)} {...props} />
   );
}

export { textVariants };
