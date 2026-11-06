import { AwardBadge } from "@/components/sections/about/award-badge";
import { Statement } from "@/components/sections/about/statement";
import { Stats } from "@/components/sections/about/stats";
import { Pill } from "@/components/shared/pill";
import {
   Section,
   SectionHeader,
   SectionIndex,
} from "@/components/shared/section";
import { Text } from "@/components/shared/text";
import { stats } from "@/data/stats";

export function About() {
   return (
      <Section id="about" aria-labelledby="about-title">
         <SectionHeader aside={<SectionIndex>01</SectionIndex>}>
            <Pill as="h2" id="about-title">
               О клинике
            </Pill>
         </SectionHeader>

         <div className="grid items-end gap-10 lg:grid-cols-[340px_1fr]">
            <div>
               <AwardBadge />
               <Text className="mt-5.5">
                  Клиника «Бриз» — 15 лет заботы об улыбках. Собственная
                  лаборатория, цифровая диагностика и врачи, которые объясняют
                  каждый шаг.
               </Text>
            </div>
            <Statement />
         </div>

         <Stats items={stats} className="mt-14" />
      </Section>
   );
}
