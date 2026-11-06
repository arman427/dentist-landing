import { IconBox } from "@/components/shared/icon-box";
import { Text } from "@/components/shared/text";
import type { Feature } from "@/data/features";

export function FeatureCard({ icon: Icon, title, description }: Feature) {
   return (
      <div className="flex h-full items-center gap-3.5 rounded-box border border-line/50 bg-white px-5.5 py-5">
         <IconBox>
            <Icon />
         </IconBox>
         <div>
            <p className="text-base font-medium">{title}</p>
            <Text size="caption">{description}</Text>
         </div>
      </div>
   );
}
