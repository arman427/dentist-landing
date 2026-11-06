import type { HTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const titleVariants = cva("", {
   variants: {
      size: {
         display: "text-display font-medium",
         xl: "text-title-xl font-normal",
         lg: "text-title-lg font-normal",
         md: "text-title-md font-normal",
         sm: "text-title-sm font-normal",
         xs: "text-title-xs font-medium",
         "2xs": "text-title-2xs font-medium",
         "3xs": "text-title-3xs font-medium",
      },
      tone: {
         default: "text-ink",
         ocean: "text-ocean",
         inverse: "text-white",
      },
   },
   defaultVariants: {
      size: "lg",
      tone: "default",
   },
});

type TitleSize = NonNullable<VariantProps<typeof titleVariants>["size"]>;
type TitleTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";

/** Тег по умолчанию для каждого размера — можно переопределить через `as`. */
const defaultTag: Record<TitleSize, TitleTag> = {
   display: "h1",
   xl: "h2",
   lg: "h2",
   md: "h3",
   sm: "h3",
   xs: "h4",
   "2xs": "h4",
   "3xs": "h4",
};

export type TitleProps = HTMLAttributes<HTMLElement> &
   VariantProps<typeof titleVariants> & {
      as?: TitleTag;
   };

/**
 * Заголовок из типографической шкалы макета.
 * @example <Title size="lg">Наши <Accent>врачи</Accent></Title>
 */
export function Title({ as, size, tone, className, ...props }: TitleProps) {
   const Tag = as ?? defaultTag[size ?? "lg"];

   return (
      <Tag
         data-slot="title"
         className={cn(titleVariants({ size, tone }), className)}
         {...props}
      />
   );
}

export { titleVariants };
