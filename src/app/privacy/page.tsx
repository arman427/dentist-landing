import type { Metadata } from "next";

import { PageStub } from "@/components/shared/page-stub";

export const metadata: Metadata = {
   title: "Политика конфиденциальности",
   robots: { index: false },
};

export default function PrivacyPage() {
   return <PageStub title="Политика конфиденциальности" />;
}
