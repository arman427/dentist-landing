import Image from "next/image";

import { hero } from "@/data/hero";
import { cn } from "@/lib/utils";

export function HeroImplant({ className }: { className?: string }) {
   return (
      <div
         data-hero-reveal
         className={cn(
            "relative aspect-square overflow-hidden rounded-full",
            className,
         )}
      >
         <Image
            src={hero.implantImage.src}
            alt={hero.implantImage.alt}
            fill
            sizes="250px"
            placeholder="blur"
            className="object-cover"
         />
      </div>
   );
}
