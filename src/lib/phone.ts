/** Оставляет до 11 цифр российского номера, 8… → 7… */
export function normalizePhoneDigits(value: string) {
   let digits = value.replace(/\D/g, "");
   if (!digits) return "";
   if (digits.startsWith("8")) digits = `7${digits.slice(1)}`;
   if (!digits.startsWith("7")) digits = `7${digits}`;
   return digits.slice(0, 11);
}

/** Маска: +7 (900) 123-45-67 */
export function formatPhone(value: string) {
   const digits = normalizePhoneDigits(value);
   if (!digits) return "";

   const code = digits.slice(1, 4);
   const first = digits.slice(4, 7);
   const second = digits.slice(7, 9);
   const third = digits.slice(9, 11);

   let result = "+7";
   if (code) result += ` (${code}${code.length === 3 ? ")" : ""}`;
   if (first) result += ` ${first}`;
   if (second) result += `-${second}`;
   if (third) result += `-${third}`;
   return result;
}

export function isCompletePhone(value: string) {
   return normalizePhoneDigits(value).length === 11;
}
