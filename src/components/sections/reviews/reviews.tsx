import { ReviewsSlide } from "@/components/sections/reviews/reviews-slide";
import { ReviewsSummary } from "@/components/sections/reviews/reviews-summary";
import { Accent } from "@/components/shared/accent";
import { Section, SectionHeader } from "@/components/shared/section";
import { Title } from "@/components/shared/title";
import {
   Carousel,
   CarouselContent,
   CarouselItem,
   CarouselNext,
   CarouselPrevious,
} from "@/components/ui/carousel";
import { reviewPages } from "@/data/reviews";

/** Активная стрелка — залитая, неактивная — контурная (как в макете). */
const arrowClassName =
   "static translate-none border-primary bg-primary text-primary-foreground hover:border-ocean-dark hover:bg-ocean-dark disabled:border-line disabled:bg-transparent disabled:text-ink-soft disabled:opacity-100";

/**
 * Карусель отзывов: Carousel (embla) из shadcn — клиентский, слайды рендерятся на сервере.
 */
export function Reviews() {
   return (
      <Section id="reviews" aria-labelledby="reviews-title">
         <Carousel opts={{ align: "start" }} aria-label="Отзывы пациентов">
            <SectionHeader
               aside={
                  <div className="flex flex-wrap items-center gap-5.5">
                     <ReviewsSummary />
                     <div className="flex gap-5.5">
                        <CarouselPrevious
                           size="icon-lg"
                           className={arrowClassName}
                        />
                        <CarouselNext
                           size="icon-lg"
                           className={arrowClassName}
                        />
                     </div>
                  </div>
               }
            >
               <Title id="reviews-title">
                  Отзывы <Accent>пациентов</Accent>
               </Title>
            </SectionHeader>

            <CarouselContent>
               {reviewPages.map((page) => (
                  <CarouselItem key={page.featured.id}>
                     <ReviewsSlide page={page} />
                  </CarouselItem>
               ))}
            </CarouselContent>
         </Carousel>
      </Section>
   );
}
