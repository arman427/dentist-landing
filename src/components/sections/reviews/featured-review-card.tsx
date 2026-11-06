import Image from "next/image";

import { RichText } from "@/components/shared/rich-text";
import type { FeaturedReview } from "@/data/reviews";

export function FeaturedReviewCard({ review }: { review: FeaturedReview }) {
   return (
      <figure className="flex flex-col overflow-hidden rounded-panel bg-ocean text-white">
         <div className="relative h-75">
            <Image
               src={review.image}
               alt={review.imageAlt}
               fill
               sizes="(min-width: 1024px) 420px, 100vw"
               placeholder="blur"
               className="object-cover object-[50%_25%]"
            />
         </div>
         <div className="flex flex-1 flex-col justify-between p-7.5">
            <blockquote className="text-quote">
               <p>
                  — <RichText text={review.text} tone="light" />
               </p>
            </blockquote>
            <figcaption className="mt-6.5 text-sm text-white/75">
               <span className="block text-base font-medium text-white">
                  {review.author}
               </span>
               {review.meta}
            </figcaption>
         </div>
      </figure>
   );
}
