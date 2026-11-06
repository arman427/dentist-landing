import { CallbackForm } from "@/components/layout/footer/callback-form";
import { Accent } from "@/components/shared/accent";
import { Title } from "@/components/shared/title";

export function FooterCta() {
   return (
      <div>
         <Title size="xl">
            Подарите себе <Accent>улыбку</Accent>{" "}
            <br className="max-sm:hidden" />
            без <Accent>страха</Accent> и боли
         </Title>
         <CallbackForm className="mt-9" />
      </div>
   );
}
