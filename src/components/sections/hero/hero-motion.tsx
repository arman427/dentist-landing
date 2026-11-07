"use client";

import type { PropsWithChildren } from "react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export function HeroMotion({ children }: PropsWithChildren) {
   const scope = useRef<HTMLDivElement>(null);

   useGSAP(
      () => {
         const elements = Array.from(
            scope.current?.querySelectorAll<HTMLElement>(
               "[data-hero-reveal]",
            ) ?? [],
         );
         const staggeredElements = Array.from(
            scope.current?.querySelectorAll<HTMLElement>("[data-hero-item]") ??
               [],
         );

         if (!elements.length) {
            return;
         }

         const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)",
         ).matches;

         if (prefersReducedMotion) {
            gsap.set(elements, { opacity: 1, scale: 1, y: 0 });
            gsap.set(staggeredElements, { opacity: 1, y: 0 });
            return;
         }

         gsap.set(elements, { opacity: 0, scale: 0.98, y: 42 });
         gsap.set(staggeredElements, { opacity: 0, y: 24 });

         const mediaImage = scope.current?.querySelector<HTMLElement>(
            "[data-hero-media-image]",
         );

         const isSmallViewport = window.matchMedia(
            "(max-width: 639px)",
         ).matches;
         const mediaImageScale = isSmallViewport ? 1.015 : 1.08;
         const mediaImageDuration = isSmallViewport ? 0.35 : 1.1;

         if (mediaImage) gsap.set(mediaImage, { scale: mediaImageScale });

         const observer = new IntersectionObserver(
            (entries) => {
               entries.forEach((entry) => {
                  if (!entry.isIntersecting) return;

                  const isMedia = (entry.target as HTMLElement).hasAttribute(
                     "data-hero-media",
                  );

                  // The tall mobile image should wait until it is meaningfully visible.
                  if (isMedia && entry.intersectionRatio < 0.35) return;

                  observer.unobserve(entry.target);

                  const target = entry.target as HTMLElement;
                  const items = Array.from(
                     target.querySelectorAll<HTMLElement>("[data-hero-item]"),
                  );
                  const timeline = gsap.timeline();

                  timeline.to(target, {
                     opacity: 1,
                     scale: 1,
                     y: 0,
                     duration: 0.75,
                     ease: "power3.out",
                  });

                  if (items.length) {
                     timeline.to(
                        items,
                        {
                           opacity: 1,
                           y: 0,
                           duration: 0.55,
                           stagger: 0.1,
                           ease: "power3.out",
                        },
                        "-=0.42",
                     );
                  }

                  if (target.hasAttribute("data-hero-media") && mediaImage) {
                     timeline.to(
                        mediaImage,
                        {
                           scale: 1,
                           duration: mediaImageDuration,
                           ease: "power3.out",
                        },
                        isSmallViewport ? "-=0.2" : "-=0.7",
                     );
                  }
               });
            },
            {
               threshold: [0.15, 0.35],
               rootMargin: "0px 0px -8% 0px",
            },
         );

         elements.forEach((element) => observer.observe(element));

         return () => observer.disconnect();
      },
      { scope },
   );

   return (
       <div ref={scope} data-hero-motion="pending">
          {children}
       </div>
    );
}
