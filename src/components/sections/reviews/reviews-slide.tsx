import { FeaturedReviewCard } from "@/components/sections/reviews/featured-review-card";
import { ReviewCard } from "@/components/sections/reviews/review-card";
import type { ReviewsPage } from "@/data/reviews";

/** Один слайд: большая карточка + две колонки по два отзыва. */
export function ReviewsSlide({ page }: { page: ReviewsPage }) {
   const columns = [page.reviews.slice(0, 2), page.reviews.slice(2, 4)];

   return (
      <div className="grid gap-4 lg:grid-cols-[420px_1fr_1fr]">
         <FeaturedReviewCard review={page.featured} />
         {columns.map((column, index) => (
            <div key={index} className="grid gap-4 lg:grid-rows-2">
               {column.map((review) => (
                  <ReviewCard key={review.id} review={review} />
               ))}
            </div>
         ))}
      </div>
   );
}
