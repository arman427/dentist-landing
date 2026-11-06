import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
   "group/button inline-flex shrink-0 items-center justify-center gap-2.5 rounded-full border border-transparent font-medium whitespace-nowrap transition-[color,background-color,border-color,box-shadow,opacity] duration-200 outline-none select-none focus-visible:ring-3 focus-visible:ring-ring/40 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-[18px]",
   {
      variants: {
         variant: {
            default: "bg-primary text-primary-foreground hover:bg-ocean-dark",
            outline:
               "border-ocean bg-transparent text-ocean hover:bg-ocean hover:text-white",
            subtle:
               "border-line bg-transparent text-ink-soft hover:border-ink hover:text-ink",
            secondary:
               "bg-secondary text-secondary-foreground hover:bg-mint-deep",
            white: "bg-white text-ink hover:bg-mint",
            ghost: "hover:bg-muted hover:text-foreground",
            destructive:
               "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:ring-destructive/20",
            link: "text-primary underline-offset-4 hover:underline",
         },
         size: {
            default: "h-13.5 px-6.5 text-base",
            md: "h-12 px-5.5 text-base",
            sm: "h-10.5 gap-2 px-4 text-sm",
            xs: "h-8 gap-1.5 px-3 text-xs [&_svg:not([class*='size-'])]:size-3.5",
            icon: "size-11",
            "icon-sm": "size-9 [&_svg:not([class*='size-'])]:size-4",
            "icon-lg": "size-13",
         },
      },
      defaultVariants: {
         variant: "default",
         size: "default",
      },
   },
);

function Button({
   className,
   variant = "default",
   size = "default",
   ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
   return (
      <ButtonPrimitive
         data-slot="button"
         className={cn(buttonVariants({ variant, size, className }))}
         {...props}
      />
   );
}

export { Button, buttonVariants };
