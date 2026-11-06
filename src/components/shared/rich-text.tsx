import { Fragment } from "react";

import { Accent, type AccentProps } from "@/components/shared/accent";

type RichTextProps = {
   /** Текст, где *слово в звёздочках* станет <Accent>. */
   text: string;
   tone?: AccentProps["tone"];
};

/**
 * Удобно для контента из data/CMS: «*Подберём* идеальный оттенок…»
 * превращается в текст с акцентными словами.
 */
export function RichText({ text, tone }: RichTextProps) {
   const parts = text.split(/(\*[^*]+\*)/g);

   return parts.map((part, index) =>
      part.length > 2 && part.startsWith("*") && part.endsWith("*") ? (
         <Accent key={index} tone={tone}>
            {part.slice(1, -1)}
         </Accent>
      ) : (
         <Fragment key={index}>{part}</Fragment>
      ),
   );
}
