import type { ComponentProps, ReactNode } from "react";

import { Container } from "@/components/shared/container";
import { cn } from "@/lib/utils";

type SectionProps = ComponentProps<"section"> & {
   /** Отступ сверху как в макете (120px на десктопе). */
   spaced?: boolean;
   containerClassName?: string;
};

export function Section({
   spaced = true,
   className,
   containerClassName,
   children,
   ...props
}: SectionProps) {
   return (
      <section className={cn(spaced && "pt-20 lg:pt-30", className)} {...props}>
         <Container className={containerClassName}>{children}</Container>
      </section>
   );
}

type SectionHeaderProps = {
   children: ReactNode;
   /** Правая часть: номер раздела, счётчик, стрелки слайдера… */
   aside?: ReactNode;
   className?: string;
};

/** Шапка раздела с линией снизу: слева заголовок/пилюля, справа — aside. */
export function SectionHeader({
   children,
   aside,
   className,
}: SectionHeaderProps) {
   return (
      <div
         className={cn(
            "mb-8 flex flex-wrap items-center justify-between gap-x-6 gap-y-4 border-b border-line pb-5 lg:mb-12",
            className,
         )}
      >
         {children}
         {aside}
      </div>
   );
}

/** Подпись справа в шапке раздела: «(01)», «(18 специалистов)». */
export function SectionIndex({
   className,
   children,
   ...props
}: ComponentProps<"span">) {
   return (
      <span className={cn("text-body-sm text-ink-soft", className)} {...props}>
         ({children})
      </span>
   );
}
