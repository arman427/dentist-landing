import { StarIcon } from "@phosphor-icons/react/ssr";

import { cn } from "@/lib/utils";

type RatingStarsProps = {
   value?: number;
   max?: number;
   className?: string;
};

export function RatingStars({
   value = 5,
   max = 5,
   className,
}: RatingStarsProps) {
   return (
      <div
         role="img"
         aria-label={`Оценка ${value} из ${max}`}
         className={cn("flex h-6.5 items-center gap-0.5 text-star", className)}
      >
         {Array.from({ length: max }, (_, index) => (
            <StarIcon
               key={index}
               weight="fill"
               aria-hidden
               className={cn("size-[18px]", index >= value && "opacity-25")}
            />
         ))}
      </div>
   );
}
