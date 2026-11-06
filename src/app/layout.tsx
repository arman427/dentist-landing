import type { Metadata, Viewport } from "next";
import { Onest, Playfair_Display } from "next/font/google";

import { Footer } from "@/components/layout/footer/footer";
import { Header } from "@/components/layout/header/header";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

import "./globals.css";
import { DemoBanner } from "@/components/shared/demo-banner";

const onest = Onest({
   variable: "--font-onest",
   subsets: ["latin", "cyrillic"],
});

const playfair = Playfair_Display({
   variable: "--font-playfair",
   subsets: ["latin", "cyrillic"],
   style: "italic",
});

export const metadata: Metadata = {
   metadataBase: new URL(siteConfig.url),
   title: {
      default: siteConfig.title,
      template: `%s — ${siteConfig.fullName}`,
   },
   description: siteConfig.description,
   openGraph: {
      type: "website",
      locale: "ru_RU",
      url: "/",
      siteName: siteConfig.fullName,
      title: siteConfig.title,
      description: siteConfig.description,
   },
};

export const viewport: Viewport = {
   themeColor: "#0f5c60",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
   return (
      <html
         lang="ru"
         className={cn(onest.variable, playfair.variable, "h-full antialiased")}
      >
         <body className="flex min-h-full flex-col">
            <DemoBanner />
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
         </body>
      </html>
   );
}
