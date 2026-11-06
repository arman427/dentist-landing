import { ArrowLeftIcon, ArrowUpRightIcon } from "@phosphor-icons/react/ssr";

import { ButtonLink } from "@/components/shared/button-link";
import { Pill } from "@/components/shared/pill";
import { Section } from "@/components/shared/section";
import { Text } from "@/components/shared/text";
import { Title } from "@/components/shared/title";
import { routes } from "@/config/navigation";

type PageStubProps = {
   title: string;
   description?: string;
   badge?: string;
};

/** Временная страница для разделов, которых ещё нет, — чтобы ссылки не вели в 404. */
export function PageStub({
   title,
   description = "Раздел скоро появится. А пока запишитесь на консультацию — подберём врача и удобное время.",
   badge = "Раздел в разработке",
}: PageStubProps) {
   return (
      <Section spaced={false} className="pt-4">
         <div className="rounded-tile bg-mint px-6 py-12 sm:px-12 lg:px-16 lg:py-20">
            <Pill variant="solid">{badge}</Pill>
            <Title as="h1" size="xl" className="mt-6 max-w-200">
               {title}
            </Title>
            <Text size="lead" className="mt-5 max-w-135">
               {description}
            </Text>
            <div className="mt-8 flex flex-wrap gap-3">
               <ButtonLink href={routes.booking}>
                  Записаться
                  <ArrowUpRightIcon />
               </ButtonLink>
               <ButtonLink href="/" variant="outline">
                  <ArrowLeftIcon />
                  На главную
               </ButtonLink>
            </div>
         </div>
      </Section>
   );
}
