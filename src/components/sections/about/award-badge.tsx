import { StarIcon } from "@phosphor-icons/react/ssr";

import { cn } from "@/lib/utils";

type AwardBadgeProps = {
   text?: string;
   className?: string;
};

/** Круглый бейдж с бегущей по кругу надписью — чистый CSS, без JS. */
export function AwardBadge({
   text = "ВЫБОР ПАЦИЕНТОВ • 2026 • ",
   className,
}: AwardBadgeProps) {
   return (
      <div className={cn("relative size-37.5 text-ocean", className)}>
         <svg
            viewBox="0 0 150 150"
            aria-hidden
            className="size-full animate-spin-slow motion-reduce:animate-none"
         >
            <defs>
               <path
                  id="award-badge-circle"
                  d="M75,75 m-60,0 a60,60 0 1,1 120,0 a60,60 0 1,1 -120,0"
               />
            </defs>
            <text className="fill-current text-[13px] font-medium">
               <textPath
                  href="#award-badge-circle"
                  textLength="372"
                  lengthAdjust="spacing"
               >
                  {text.repeat(2)}
               </textPath>
            </text>
         </svg>
         <span className="absolute inset-7 flex items-center justify-center rounded-full bg-ocean text-white">
            <StarIcon weight="fill" aria-hidden className="size-6" />
         </span>
         <span className="sr-only">{text}</span>
      </div>
   );
}
