import { InlineImage } from "@/components/sections/about/inline-image";
import { Accent } from "@/components/shared/accent";
import clinicImage from "@/assets/images/clinic-consultation.jpg";
import implantImage from "@/assets/images/implant-model.jpg";

export function Statement() {
   return (
      <p className="text-statement text-ink">
         Мы строим <Accent>долгие отношения</Accent> с пациентами
         <InlineImage src={clinicImage} /> — на доверии и заботе. Каждый визит
         проходит <Accent>спокойно</Accent>, без спешки
         <InlineImage src={implantImage} /> и без страха перед креслом.
      </p>
   );
}
