import type { ComponentProps } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const accentVariants = cva(
   "font-accent font-normal tracking-[-0.01em] italic",
   {
      variants: {
         tone: {
            ocean: "text-ocean",
            light: "text-mint-light",
            inherit: "",
         },
      },
      defaultVariants: {
         tone: "ocean",
      },
   },
);

export type AccentProps = ComponentProps<"em"> &
   VariantProps<typeof accentVariants>;

/**
 * Акцентное слово курсивом Playfair Display.
 * @example Улыбка, которой <Accent>хочется</Accent> делиться
 */
export function Accent({ tone, className, ...props }: AccentProps) {
   return (
      <em
         data-slot="accent"
         className={cn(accentVariants({ tone }), className)}
         {...props}
      />
   );
}

export { accentVariants };
