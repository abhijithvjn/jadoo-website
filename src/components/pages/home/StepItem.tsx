import Image from 'next/image';
import { Paragraph, SubParagraph } from '@/components/ui/typography';

interface StepProps {
  icon: string;
  title: string;
  description: string;
  bgColor: string;
}

export const StepItem = ({ icon, title, description, bgColor }: StepProps) => (
  <div className="flex items-start gap-4 lg:gap-5">
    <div
      className="flex-shrink-0 w-12 h-12 rounded-[13px] flex items-center justify-center"
      style={{ backgroundColor: bgColor }}
    >
      <div className="relative w-5 h-5">
        <Image src={icon} alt="" fill className="object-contain" />
      </div>
    </div>
    <div className="flex flex-col gap-1">
      <SubParagraph className="text-[16px] font-bold text-muted">{title}</SubParagraph>
      <Paragraph className="text-[16px] text-muted max-w-[380px]">{description}</Paragraph>
    </div>
  </div>
);
