import Image from "next/image";
import { ArrowUpRightIcon } from "@phosphor-icons/react/ssr";

import { AvatarGroup } from "@/components/shared/avatar";
import { ButtonLink } from "@/components/shared/button-link";
import { RichText } from "@/components/shared/rich-text";
import { Text } from "@/components/shared/text";
import { getDoctorsByIds } from "@/data/doctors";
import type { Service } from "@/data/services";

export function ServicePanel({ service }: { service: Service }) {
   const leadDoctors = getDoctorsByIds(service.doctorIds).map((doctor) => ({
      name: doctor.name,
      src: doctor.photo,
   }));

   return (
      <>
         <div className="relative h-105 overflow-hidden rounded-panel md:h-130">
            <Image
               src={service.image}
               alt={service.imageAlt}
               fill
               sizes="(min-width: 1280px) 400px, (min-width: 768px) 50vw, 100vw"
               placeholder="blur"
               className="object-cover"
            />
         </div>

         <div className="flex flex-col justify-between gap-10 rounded-panel bg-mint p-7 md:h-130 md:p-9">
            <p className="text-quote-lg text-ink">
               <RichText text={service.description} />
            </p>

            <div>
               <div className="flex items-center justify-between gap-4 border-t border-mint-deep pt-5.5">
                  <div>
                     <AvatarGroup items={leadDoctors} />
                     <Text size="caption" className="mt-2">
                        Ведущие специалисты
                     </Text>
                  </div>
                  <div>
                     <Text size="body-sm">Стоимость</Text>
                     <p className="text-price font-medium text-ink">
                        {service.price}
                     </p>
                  </div>
               </div>
               <ButtonLink href={service.href} className="mt-5.5">
                  Подробнее об услуге
                  <ArrowUpRightIcon />
               </ButtonLink>
            </div>
         </div>
      </>
   );
}
