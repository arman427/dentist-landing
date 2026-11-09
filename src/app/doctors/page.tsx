import type { Metadata } from "next";
import { ArrowUpRightIcon } from "@phosphor-icons/react/ssr";

import { DoctorCard } from "@/components/sections/team/doctor-card";
import { Accent } from "@/components/shared/accent";
import { ButtonLink } from "@/components/shared/button-link";
import { Section } from "@/components/shared/section";
import { Text } from "@/components/shared/text";
import { Title } from "@/components/shared/title";
import { routes } from "@/config/navigation";
import { TEAM_SIZE, doctors } from "@/data/doctors";

export const metadata: Metadata = {
   title: "Врачи",
   description:
      "Врачи стоматологии «Бриз»: хирурги-имплантологи, ортодонты, стоматологи-эстетисты и детские специалисты.",
   alternates: { canonical: routes.doctors },
};

export default function DoctorsPage() {
   return (
      <>
         <Section spaced={false} className="pt-4 lg:pt-8">
            <div className="rounded-tile bg-mint px-6 py-12 sm:px-12 lg:px-16 lg:py-20">
               <Title as="h1" size="xl" className="max-w-190">
                  Команда, которой <Accent>доверяют</Accent>
               </Title>
               <Text size="lead" className="mt-5 max-w-145">
                  Врачи разных направлений работают вместе, чтобы вы получили
                  понятный план лечения и заботу на каждом этапе.
               </Text>
               <ButtonLink href={routes.booking} className="mt-8">
                  Записаться на консультацию
                  <ArrowUpRightIcon />
               </ButtonLink>
            </div>
         </Section>

         <Section aria-labelledby="doctors-title">
            <div className="mb-8 flex flex-wrap items-end justify-between gap-4 border-b border-line pb-5 lg:mb-12">
               <div>
                  <Title id="doctors-title" as="h2" size="md">
                     Ведущие специалисты
                  </Title>
                  <Text size="body-sm" className="mt-2">
                     Покажем врача, который подходит именно под вашу задачу
                  </Text>
               </div>
               <Text size="body-sm">{TEAM_SIZE} специалистов в команде</Text>
            </div>

            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
               {doctors.map((doctor) => (
                  <li key={doctor.id}>
                     <DoctorCard doctor={doctor} />
                  </li>
               ))}
            </ul>
         </Section>
      </>
   );
}
