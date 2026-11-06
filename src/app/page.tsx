import type { Metadata } from "next";

import { About } from "@/components/sections/about/about";
import { Features } from "@/components/sections/features/features";
import { Hero } from "@/components/sections/hero/hero";
import { Reviews } from "@/components/sections/reviews/reviews";
import { Services } from "@/components/sections/services/services";
import { Team } from "@/components/sections/team/team";
import { ClinicJsonLd } from "@/components/seo/clinic-json-ld";

export const metadata: Metadata = {
   alternates: { canonical: "/" },
};

export default function HomePage() {
   return (
      <>
         <ClinicJsonLd />
         <Hero />
         <Features />
         <About />
         <Services />
         <Team />
         <Reviews />
      </>
   );
}
