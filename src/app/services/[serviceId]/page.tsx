import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
   ArrowLeftIcon,
   ArrowUpRightIcon,
   CheckCircleIcon,
} from "@phosphor-icons/react/ssr";

import { ServicePrices } from "@/components/sections/services/service-prices";
import { AvatarGroup } from "@/components/shared/avatar";
import { ButtonLink } from "@/components/shared/button-link";
import { Pill } from "@/components/shared/pill";
import { RichText } from "@/components/shared/rich-text";
import { Section } from "@/components/shared/section";
import { Text } from "@/components/shared/text";
import { Title } from "@/components/shared/title";
import { routes } from "@/config/navigation";
import { getDoctorsByIds } from "@/data/doctors";
import { getServiceById, services } from "@/data/services";

export function generateStaticParams() {
   return services.map((service) => ({ serviceId: service.id }));
}

export async function generateMetadata({
   params,
}: {
   params: Promise<{ serviceId: string }>;
}): Promise<Metadata> {
   const { serviceId } = await params;
   const service = getServiceById(serviceId);

   if (!service) {
      return { title: "Услуга не найдена" };
   }

   return {
      title: service.title,
      description: service.description.replaceAll("*", ""),
      alternates: { canonical: service.href },
   };
}

export default async function ServicePage({
   params,
}: {
   params: Promise<{ serviceId: string }>;
}) {
   const { serviceId } = await params;
   const service = getServiceById(serviceId);

   if (!service) notFound();

   const leadDoctors = getDoctorsByIds(service.doctorIds).map((doctor) => ({
      name: doctor.name,
      src: doctor.photo,
   }));

   return (
      <>
         <Section spaced={false} className="pt-4 lg:pt-8">
            <div className="overflow-hidden rounded-tile bg-mint px-6 py-8 sm:px-10 sm:py-10 lg:px-13">
               <ButtonLink href="/#services" variant="ghost" size="sm">
                  <ArrowLeftIcon />
                  Все услуги
               </ButtonLink>

               <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:gap-16">
                  <div>
                     <Pill variant="solid">Услуга клиники</Pill>
                     <Title as="h1" size="xl" className="mt-5 max-w-190">
                        {service.title}
                     </Title>
                     <Text size="lead" className="mt-5 max-w-155">
                        <RichText text={service.description} />
                     </Text>
                     <ButtonLink href={routes.booking} className="mt-8">
                        Записаться на консультацию
                        <ArrowUpRightIcon />
                     </ButtonLink>
                  </div>

                  <div className="relative h-72 overflow-hidden rounded-panel sm:h-100 lg:h-115">
                     <Image
                        src={service.image}
                        alt={service.imageAlt}
                        fill
                        priority
                        sizes="(min-width: 1024px) 42vw, 100vw"
                        placeholder="blur"
                        className="object-cover"
                     />
                  </div>
               </div>
            </div>
         </Section>

         <Section>
            <div className="grid gap-12 lg:grid-cols-[1fr_400px] lg:gap-16">
               <div>
                  <Title as="h2" size="md">
                     Что входит в услугу
                  </Title>
                  <ul className="mt-7 divide-y divide-line border-y border-line">
                     {service.steps.map((step) => (
                        <li
                           key={step}
                           className="flex gap-4 py-5 text-body-lg text-ink"
                        >
                           <CheckCircleIcon
                              aria-hidden
                              className="mt-0.5 size-5 shrink-0 text-ocean"
                           />
                           <span>{step}</span>
                        </li>
                     ))}
                  </ul>

                  <div className="mt-14">
                     <div className="flex flex-wrap items-end justify-between gap-4">
                        <div>
                           <Title as="h2" size="md">
                              Стоимость
                           </Title>
                           <Text size="body-sm" className="mt-2">
                              Ориентировочные цены на основные процедуры
                           </Text>
                        </div>
                        <p className="text-price font-medium text-ocean">
                           {service.price}
                        </p>
                     </div>
                     <ServicePrices
                        items={service.priceItems}
                        className="mt-6"
                     />
                     <Text size="caption" className="mt-4 max-w-160">
                        Точная стоимость зависит от диагностики, состояния зубов
                        и согласованного плана лечения. Врач подробно объяснит
                        все этапы и заранее назовёт итоговую сумму.
                     </Text>
                  </div>
               </div>

               <aside className="h-fit rounded-panel bg-mint p-7 md:p-9 lg:sticky lg:top-28">
                  <Text size="body-sm">Ведущие специалисты</Text>
                  <AvatarGroup
                     items={leadDoctors}
                     size="md"
                     className="mt-5"
                     ringClassName="border-mint"
                  />
                  <ul className="mt-5 space-y-2.5 border-t border-mint-deep pt-5">
                     {getDoctorsByIds(service.doctorIds).map((doctor) => (
                        <li key={doctor.id} className="text-body-sm text-ink">
                           {doctor.name}
                        </li>
                     ))}
                  </ul>
                  <ButtonLink href={routes.booking} className="mt-7 w-full">
                     Подобрать врача
                     <ArrowUpRightIcon />
                  </ButtonLink>
               </aside>
            </div>
         </Section>
      </>
   );
}
