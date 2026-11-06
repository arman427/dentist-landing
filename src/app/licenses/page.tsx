import type { Metadata } from "next";

import { PageStub } from "@/components/shared/page-stub";

export const metadata: Metadata = {
   title: "Лицензии",
   robots: { index: false },
};

export default function LicensesPage() {
   return <PageStub title="Лицензии и документы" />;
}
