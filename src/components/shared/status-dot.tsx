import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

/** Зелёная точка «онлайн / принимаем сегодня» с мягким свечением. */
export function StatusDot({ className, ...props }: ComponentProps<"span">) {
   return (
      <span className="relative flex size-2">
         <span className="absolute inline-flex size-full animate-ping rounded-full bg-online opacity-60" />
         <span className="relative inline-flex size-2 rounded-full bg-online" />
      </span>
   );
}
