import { siteConfig } from "@/config/site";

const contacts = [
   {
      label: "Адрес",
      href: siteConfig.address.mapUrl,
      value: (
         <>
            {siteConfig.address.street}
            <br />
            {siteConfig.address.city}, {siteConfig.address.postalCode}
         </>
      ),
   },
   {
      label: "Телефон",
      href: siteConfig.phone.href,
      value: siteConfig.phone.label,
   },
   {
      label: "Почта",
      href: `mailto:${siteConfig.email}`,
      value: siteConfig.email,
   },
   { label: "Часы работы", value: siteConfig.hours.label },
];

export function ContactList() {
   return (
      <address className="not-italic">
         <dl className="grid content-start gap-x-10 gap-y-8.5 sm:grid-cols-2">
            {contacts.map((contact) => (
               <div key={contact.label}>
                  <dt className="mb-2 text-xs tracking-label text-ocean uppercase">
                     {contact.label}
                  </dt>
                  <dd className="text-body-lg">
                     {contact.href ? (
                        <a
                           href={contact.href}
                           className="transition-colors hover:text-ocean"
                           {...(contact.href.startsWith("http") && {
                              target: "_blank",
                              rel: "noopener noreferrer",
                           })}
                        >
                           {contact.value}
                        </a>
                     ) : (
                        contact.value
                     )}
                  </dd>
               </div>
            ))}
         </dl>
      </address>
   );
}
