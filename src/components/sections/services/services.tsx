import { ServicePanel } from "@/components/sections/services/service-panel";
import {
   ServiceIcon,
   ServiceTitle,
} from "@/components/sections/services/service-title";
import { ServicesAccordion } from "@/components/sections/services/services-accordion";
import { Pill } from "@/components/shared/pill";
import {
   Section,
   SectionHeader,
   SectionIndex,
} from "@/components/shared/section";
import { DEFAULT_SERVICE_ID, services } from "@/data/services";

/**
 * Услуги: аккордеон shadcn (Base UI) — клиентский, а всё содержимое (заголовки,
 * теги, ServicePanel) рендерится на сервере и передаётся внутрь как ReactNode.
 */
export function Services() {
   return (
      <Section id="services" aria-labelledby="services-title">
         <SectionHeader aside={<SectionIndex>02</SectionIndex>}>
            <Pill as="h2" id="services-title">
               Услуги
            </Pill>
         </SectionHeader>

         <ServicesAccordion
            defaultValue={DEFAULT_SERVICE_ID}
            items={services.map((service, index) => ({
               id: service.id,
               title: <ServiceTitle service={service} index={index} />,
               icon: <ServiceIcon />,
               tags: service.tags.join(" · "),
               panel: <ServicePanel service={service} />,
            }))}
         />
      </Section>
   );
}
