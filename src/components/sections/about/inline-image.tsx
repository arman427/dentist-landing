import Image, { type StaticImageData } from "next/image";

import { cn } from "@/lib/utils";

type InlineImageProps = {
   src: StaticImageData;
   alt?: string;
   className?: string;
};

/** Фото-«пилюля» прямо в строке текста. Размер в em — масштабируется вместе со шрифтом. */
export function InlineImage({ src, alt = "", className }: InlineImageProps) {
   return (
      <Image
         src={src}
         alt={alt}
         sizes="120px"
         className={cn(
            "relative -top-[0.08em] mx-[0.12em] inline-block h-[1.19em] w-[2.31em] rounded-full object-cover align-middle",
            className,
         )}
      />
   );
}
