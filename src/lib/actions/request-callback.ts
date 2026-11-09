import { formatPhone, isCompletePhone } from "@/lib/phone";

export type CallbackState = {
   status: "idle" | "success" | "error";
   message?: string;
};

/** Локальная валидация формы «Перезвоните мне». */
export async function requestCallback(
   _prevState: CallbackState,
   formData: FormData,
): Promise<CallbackState> {
   const phone = String(formData.get("phone") ?? "");

   if (!isCompletePhone(phone)) {
      return {
         status: "error",
         message: "Введите номер телефона полностью",
      };
   }

   // TODO: отправить заявку в CRM / Telegram-бот клиники
   console.info("[callback] новая заявка:", formatPhone(phone));

   return {
      status: "success",
      message: "Спасибо! Перезвоним в течение 15 минут.",
   };
}
