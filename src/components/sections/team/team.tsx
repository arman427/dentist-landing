import { DoctorCard } from "@/components/sections/team/doctor-card";
import { TeamMoreCard } from "@/components/sections/team/team-more-card";
import { Accent } from "@/components/shared/accent";
import {
   Section,
   SectionHeader,
   SectionIndex,
} from "@/components/shared/section";
import { Title } from "@/components/shared/title";
import { TEAM_SIZE, doctors } from "@/data/doctors";
import { pluralize } from "@/lib/plural";

export function Team() {
   return (
      <Section id="doctors" aria-labelledby="doctors-title">
         <SectionHeader
            aside={
               <SectionIndex>
                  {TEAM_SIZE}{" "}
                  {pluralize(TEAM_SIZE, [
                     "специалист",
                     "специалиста",
                     "специалистов",
                  ])}
               </SectionIndex>
            }
         >
            <Title id="doctors-title">
               Наши <Accent>врачи</Accent>
            </Title>
         </SectionHeader>

         <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {doctors.map((doctor) => (
               <li key={doctor.id}>
                  <DoctorCard doctor={doctor} />
               </li>
            ))}
            <li>
               <TeamMoreCard count={TEAM_SIZE - doctors.length} />
            </li>
         </ul>
      </Section>
   );
}
