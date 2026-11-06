import { ContactList } from "@/components/layout/footer/contact-list";
import { FooterBottom } from "@/components/layout/footer/footer-bottom";
import { FooterCta } from "@/components/layout/footer/footer-cta";
import { FooterNav } from "@/components/layout/footer/footer-nav";
import { Container } from "@/components/shared/container";

export function Footer() {
   return (
      <footer id="contacts" className="pt-20 pb-6 lg:pt-30 lg:pb-10">
         <Container>
            <div className="rounded-panel bg-mint px-6 pt-10 pb-8 sm:px-10 lg:rounded-block lg:px-16 lg:pt-16">
               <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-15">
                  <FooterCta />
                  <ContactList />
               </div>
               <FooterNav className="mt-12 border-t border-mint-deep pt-9 lg:mt-14" />
               <FooterBottom className="mt-10 lg:mt-12.5" />
            </div>
         </Container>
      </footer>
   );
}
