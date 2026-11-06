const rules = new Intl.PluralRules("ru-RU");

/**
 * Склонение по числу: pluralize(24, ["год", "года", "лет"]) → "года".
 */
export function pluralize(
   count: number,
   [one, few, many]: [string, string, string],
) {
   switch (rules.select(count)) {
      case "one":
         return one;
      case "few":
         return few;
      default:
         return many;
   }
}
