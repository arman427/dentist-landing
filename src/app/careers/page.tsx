import type { Metadata } from "next";

import { PageStub } from "@/components/shared/page-stub";

export const metadata: Metadata = {
   title: "Вакансии",
   robots: { index: false },
};

export default function CareersPage() {
   return <PageStub title="Вакансии" />;
}
