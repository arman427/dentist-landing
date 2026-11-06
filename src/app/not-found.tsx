import type { Metadata } from "next";

import { PageStub } from "@/components/shared/page-stub";

export const metadata: Metadata = {
   title: "Страница не найдена",
};

export default function NotFound() {
   return (
      <PageStub
         badge="Ошибка 404"
         title="Такой страницы нет"
         description="Возможно, ссылка устарела. Вернитесь на главную или запишитесь на консультацию — поможем с выбором."
      />
   );
}
