import { createCn } from "cn/config";

/**
 * cn = clsx + tailwind-merge.
 * Кастомные токены из globals.css регистрируем, чтобы merge понимал,
 * что `text-display` — это размер шрифта, а не цвет, и т.д.
 */
export const cn = createCn({
   extend: {
      theme: {
         text: [
            "caption",
            "body-sm",
            "body-lg",
            "price",
            "quote",
            "quote-lg",
            "title-3xs",
            "title-2xs",
            "title-xs",
            "title-sm",
            "title-md",
            "title-lg",
            "title-xl",
            "statement",
            "display",
            "metric-sm",
            "metric",
            "metric-lg",
         ],
         radius: [
            "chip",
            "icon",
            "media",
            "box",
            "card",
            "panel",
            "tile",
            "block",
         ],
         shadow: ["elevated"],
         blur: ["glass", "glass-sm"],
         font: ["accent", "heading"],
         tracking: ["label"],
         container: ["page"],
      },
   },
});
