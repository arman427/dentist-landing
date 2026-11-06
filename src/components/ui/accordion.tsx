"use client";

import type { ReactNode } from "react";
import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion";
import { CaretDownIcon } from "@phosphor-icons/react";

import { cn } from "@/lib/utils";

/** Общая кривая и длительность: высота панели, отступы и цвета анимируются синхронно. */
const motion = "duration-300 ease-accordion motion-reduce:transition-none";

function Accordion({ className, ...props }: AccordionPrimitive.Root.Props) {
   return (
      <AccordionPrimitive.Root
         data-slot="accordion"
         className={cn("flex w-full flex-col", className)}
         {...props}
      />
   );
}

function AccordionItem({ className, ...props }: AccordionPrimitive.Item.Props) {
   return (
      <AccordionPrimitive.Item
         data-slot="accordion-item"
         className={cn("not-last:border-b", className)}
         {...props}
      />
   );
}

type AccordionTriggerProps = AccordionPrimitive.Trigger.Props & {
   /** Своя иконка вместо стрелки по умолчанию. */
   icon?: ReactNode;
};

function AccordionTrigger({
   className,
   children,
   icon,
   ...props
}: AccordionTriggerProps) {
   return (
      <AccordionPrimitive.Header className="flex">
         <AccordionPrimitive.Trigger
            data-slot="accordion-trigger"
            className={cn(
               "group/accordion-trigger flex flex-1 items-start justify-between gap-4 py-2.5 text-left text-sm font-medium transition-[color,padding] outline-none focus-visible:outline-2 focus-visible:outline-offset-4 aria-disabled:pointer-events-none aria-disabled:opacity-50",
               motion,
               className,
            )}
            {...props}
         >
            {children}
            {icon ?? (
               <CaretDownIcon
                  data-slot="accordion-trigger-icon"
                  className={cn(
                     "pointer-events-none size-4 shrink-0 text-ink-soft transition-transform group-aria-expanded/accordion-trigger:rotate-180",
                     motion,
                  )}
               />
            )}
         </AccordionPrimitive.Trigger>
      </AccordionPrimitive.Header>
   );
}

type AccordionContentProps = AccordionPrimitive.Panel.Props & {
   /** Классы самой панели (у className — внутренняя обёртка с отступами). */
   panelClassName?: string;
};

/**
 * Плавная высота: Base UI измеряет панель и кладёт размер в --accordion-panel-height,
 * а data-starting-style / data-ending-style задают начальную и конечную точку (0).
 */
function AccordionContent({
   className,
   panelClassName,
   children,
   ...props
}: AccordionContentProps) {
   return (
      <AccordionPrimitive.Panel
         data-slot="accordion-content"
         className={cn(
            "h-(--accordion-panel-height) overflow-hidden text-sm transition-[height] data-ending-style:h-0 data-starting-style:h-0",
            motion,
            panelClassName,
         )}
         {...props}
      >
         <div className={cn("pb-2.5", className)}>{children}</div>
      </AccordionPrimitive.Panel>
   );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
