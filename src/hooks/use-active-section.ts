"use client";

import { useEffect, useRef, useState } from "react";

export function useActiveSection(sectionIds: string[]) {
   const [activeSection, setActiveSection] = useState<string | null>(null);
   const visibleSections = useRef(new Map<string, IntersectionObserverEntry>());

   useEffect(() => {
      const visibleSectionsMap = visibleSections.current;
      visibleSectionsMap.clear();

      const sections = sectionIds
         .map((id) => document.getElementById(id))
         .filter((section): section is HTMLElement => section !== null);

      if (!sections.length) return;

      const observer = new IntersectionObserver(
         (entries) => {
            entries.forEach((entry) => {
               if (entry.isIntersecting) {
                  visibleSectionsMap.set(entry.target.id, entry);
               } else {
                  visibleSectionsMap.delete(entry.target.id);
               }
            });

            const intersectingSections = Array.from(
               visibleSectionsMap.values(),
            );

            if (!intersectingSections.length) return;

            const nearestSection = intersectingSections.reduce(
               (nearest, entry) => {
                  const nearestDistance = Math.abs(
                     nearest.boundingClientRect.top - 96,
                  );
                  const entryDistance = Math.abs(
                     entry.boundingClientRect.top - 96,
                  );

                  return entryDistance < nearestDistance ? entry : nearest;
               },
            );

            setActiveSection(nearestSection.target.id);
         },
         {
            rootMargin: "-96px 0px -55%",
            threshold: 0,
         },
      );

      sections.forEach((section) => observer.observe(section));

      return () => {
         observer.disconnect();
         visibleSectionsMap.clear();
      };
   }, [sectionIds]);

   return activeSection;
}
