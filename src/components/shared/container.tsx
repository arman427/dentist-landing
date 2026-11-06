import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

/** Центрированная колонка страницы: 1360px контента + адаптивные поля. */
export function Container({ className, ...props }: ComponentProps<"div">) {
   return (
      <div
         className={cn(
            "mx-auto w-full max-w-page px-4 sm:px-6 lg:px-10",
            className,
         )}
         {...props}
      />
   );
}
