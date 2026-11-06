import { FeatureCard } from "@/components/sections/features/feature-card";
import { Section } from "@/components/shared/section";
import { features } from "@/data/features";

export function Features() {
   return (
      <Section
         id="features"
         spaced={false}
         aria-label="Преимущества клиники"
         className="mt-4 scroll-mt-6"
      >
         <ul className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {features.map((feature) => (
               <li key={feature.title}>
                  <FeatureCard {...feature} />
               </li>
            ))}
         </ul>
      </Section>
   );
}
