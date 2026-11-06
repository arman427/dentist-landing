import { siteConfig } from "@/config/site";

/** Разметка schema.org для поисковиков (карточка клиники в выдаче). */
export function ClinicJsonLd() {
   const data = {
      "@context": "https://schema.org",
      "@type": "Dentist",
      name: siteConfig.fullName,
      description: siteConfig.description,
      url: siteConfig.url,
      telephone: siteConfig.phone.href.replace("tel:", ""),
      email: siteConfig.email,
      address: {
         "@type": "PostalAddress",
         streetAddress: siteConfig.address.street,
         addressLocality: siteConfig.address.city,
         postalCode: siteConfig.address.postalCode,
         addressCountry: "RU",
      },
      openingHoursSpecification: {
         "@type": "OpeningHoursSpecification",
         dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
         ],
         opens: siteConfig.hours.opens,
         closes: siteConfig.hours.closes,
      },
      aggregateRating: {
         "@type": "AggregateRating",
         ratingValue: siteConfig.rating.value,
         reviewCount: siteConfig.rating.count.replace(/\D/g, ""),
      },
      sameAs: Object.values(siteConfig.social),
   };

   return (
      <script
         type="application/ld+json"
         dangerouslySetInnerHTML={{
            __html: JSON.stringify(data).replace(/</g, "\\u003c"),
         }}
      />
   );
}
