"use client";

import { useEffect, useState } from "react";

export function useThreeshold(threeshold: number) {
   const [isPastThreeshold, setIsPastThreeshold] = useState(false);

   useEffect(() => {
      const handleScroll = () => {
         setIsPastThreeshold(window.scrollY > threeshold);
      };

      handleScroll();
      window.addEventListener("scroll", handleScroll, { passive: true });

      return () => window.removeEventListener("scroll", handleScroll);
   }, [threeshold]);

   return isPastThreeshold;
}
