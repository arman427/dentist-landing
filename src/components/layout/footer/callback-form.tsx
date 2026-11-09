"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { ArrowUpRightIcon } from "@phosphor-icons/react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
   requestCallback,
   type CallbackState,
} from "@/lib/actions/request-callback";
import { formatPhone, normalizePhoneDigits } from "@/lib/phone";
import { cn } from "@/lib/utils";

const initialState: CallbackState = { status: "idle" };

/** Клиентский компонент формы: маска телефона + локальная валидация. */
export function CallbackForm({ className }: { className?: string }) {
   const [state, setState] = useState(initialState);
   const [isPending, setIsPending] = useState(false);
   const [phone, setPhone] = useState("");

   async function handleSubmit(event: FormEvent<HTMLFormElement>) {
      event.preventDefault();
      setIsPending(true);
      const nextState = await requestCallback(
         initialState,
         new FormData(event.currentTarget),
      );
      setState(nextState);
      setIsPending(false);
      if (nextState.status === "success") setPhone("");
   }

   function handleChange(event: ChangeEvent<HTMLInputElement>) {
      const nextValue = event.target.value;
      let digits = normalizePhoneDigits(nextValue);

      // Стёрли символ маски (скобку, дефис) — стираем и последнюю цифру
      if (
         nextValue.length < phone.length &&
         digits === normalizePhoneDigits(phone)
      ) {
         digits = digits.slice(0, -1);
      }

      setPhone(digits.length > 1 ? formatPhone(digits) : "");
   }

   const isError = state.status === "error";

   return (
      <form
         onSubmit={handleSubmit}
         noValidate
         className={cn("relative w-full max-w-130", className)}
      >
         <div className="flex flex-col gap-2.5 rounded-card bg-white p-2 transition-shadow has-focus-visible:ring-2 has-focus-visible:ring-ring/30 sm:flex-row sm:rounded-full">
            <label htmlFor="callback-phone" className="sr-only">
               Номер телефона
            </label>
            <Input
               id="callback-phone"
               name="phone"
               type="tel"
               inputMode="tel"
               autoComplete="tel"
               placeholder="+7 (___) ___-__-__"
               value={phone}
               onChange={handleChange}
               aria-invalid={isError || undefined}
               aria-describedby="callback-status"
               className="h-12.5 rounded-full border-0 bg-transparent px-4.5 text-body-sm focus-visible:ring-0 aria-invalid:ring-0 sm:flex-1 md:text-body-sm"
            />
            <Button
               type="submit"
               disabled={isPending}
               className="h-12.5 px-4.5 text-body-sm sm:flex-1"
            >
               {isPending ? "Отправляем…" : "Перезвоните мне"}
               <ArrowUpRightIcon />
            </Button>
         </div>
         <p
            id="callback-status"
            role="status"
            aria-live="polite"
            className={cn(
               "mt-3 px-5 text-sm empty:mt-0 sm:absolute sm:inset-x-0 sm:top-full",
               isError ? "text-destructive" : "text-ocean",
            )}
         >
            {state.message}
         </p>
      </form>
   );
}
