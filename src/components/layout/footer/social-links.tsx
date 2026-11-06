import { PhoneIcon, TelegramLogoIcon } from "@phosphor-icons/react/ssr";

import { iconCircleVariants } from "@/components/shared/icon-circle";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

const links = [
   {
      label: "Telegram",
      href: siteConfig.social.telegram,
      icon: <TelegramLogoIcon />,
   },
   {
      label: "ВКонтакте",
      href: siteConfig.social.vk,
      icon: <span className="text-sm font-semibold">VK</span>,
   },
   { label: "Позвонить", href: siteConfig.phone.href, icon: <PhoneIcon /> },
];

export function SocialLinks({ className }: { className?: string }) {
   return (
      <ul className={cn("flex gap-2.5", className)}>
         {links.map((link) => (
            <li key={link.label}>
               <a
                  href={link.href}
                  aria-label={link.label}
                  className={iconCircleVariants({
                     size: "md",
                     className: "size-11.5 hover:bg-ink hover:text-white",
                  })}
                  {...(link.href.startsWith("http") && {
                     target: "_blank",
                     rel: "noopener noreferrer",
                  })}
               >
                  {link.icon}
               </a>
            </li>
         ))}
      </ul>
   );
}
