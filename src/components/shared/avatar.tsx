import Image, { type StaticImageData } from "next/image";

import { cn } from "@/lib/utils";

const sizes = {
   sm: { className: "size-10 text-xs", px: "40px" },
   md: { className: "size-10.5 text-[13px]", px: "42px" },
} as const;

export type AvatarProps = {
   /** Имя — для alt и инициалов. */
   name: string;
   src?: StaticImageData;
   size?: keyof typeof sizes;
   className?: string;
};

function getInitials(name: string) {
   return name
      .replace(/[^\p{L}\s]/gu, "")
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((word) => word[0]?.toUpperCase())
      .join("");
}

/**
 * Серверный аватар: фото через next/image или инициалы.
 * (shadcn Avatar на base-ui показывает картинку только после гидрации.)
 */
export function Avatar({ name, src, size = "md", className }: AvatarProps) {
   const { className: sizeClassName, px } = sizes[size];

   if (src) {
      return (
         <Image
            src={src}
            alt={name}
            sizes={px}
            className={cn(
               "shrink-0 rounded-full object-cover",
               sizeClassName,
               className,
            )}
         />
      );
   }

   return (
      <span
         role="img"
         aria-label={name}
         className={cn(
            "inline-flex shrink-0 items-center justify-center rounded-full bg-mint font-semibold text-ocean",
            sizeClassName,
            className,
         )}
      >
         {getInitials(name)}
      </span>
   );
}

type AvatarGroupProps = {
   items: Omit<AvatarProps, "size" | "className">[];
   size?: AvatarProps["size"];
   /** Цвет обводки = цвет фона под группой. */
   ringClassName?: string;
   className?: string;
};

/** Аватары внахлёст. */
export function AvatarGroup({
   items,
   size = "sm",
   ringClassName = "border-mint",
   className,
}: AvatarGroupProps) {
   return (
      <div className={cn("flex -space-x-2.5", className)}>
         {items.map((item) => (
            <Avatar
               key={item.name}
               {...item}
               size={size}
               className={cn("border-3", ringClassName)}
            />
         ))}
      </div>
   );
}
