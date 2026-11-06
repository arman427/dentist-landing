import type { Metadata } from "next";

import { PageStub } from "@/components/shared/page-stub";

export const metadata: Metadata = {
   title: "Врачи",
   robots: { index: false },
};

export default function DoctorsPage() {
   return <PageStub title="Все врачи клиники" />;
}
