import { Avatar } from "@/components/shared/avatar";
import { Pill } from "@/components/shared/pill";
import { RatingStars } from "@/components/shared/rating-stars";
import type { Review } from "@/data/reviews";
import { cn } from "@/lib/utils";

export function ReviewCard({ review }: { review: Review }) {
   const { author, service, text, source, rating, avatar, highlighted } =
      review;

   return (
      <figure
         className={cn(
            "flex h-full flex-col justify-between rounded-card border p-7",
            highlighted ? "border-mint bg-mint" : "border-line bg-white",
         )}
      >
         <RatingStars value={rating} />
         <blockquote className="mt-3.5 mb-5.5 text-lg leading-normal">
            <p>«{text}»</p>
         </blockquote>
         <figcaption className="flex items-center gap-3 text-caption text-ink-soft">
            <Avatar
               name={author}
               src={avatar}
               className={cn(highlighted && "bg-white")}
            />
            <span>
               <span className="block text-body-sm font-medium text-ink">
                  {author}
               </span>
               {service}
            </span>
            <Pill
               variant="ghost"
               size="xs"
               className={cn("ml-auto", highlighted && "border-mint-deep")}
            >
               {source}
            </Pill>
         </figcaption>
      </figure>
   );
}
