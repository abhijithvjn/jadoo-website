import Image from 'next/image';
import { Paragraph } from '@/components/ui/typography';
import { cn } from '@/lib/utils/utils';

interface ServiceCardProps {
  service: {
    id: number;
    title: string;
    description: string;
    icon: string;
    isFeatured: boolean;
  };
  redAccentShape: string;
}

export const ServiceCard = ({ service, redAccentShape }: ServiceCardProps) => (
  <div className="relative group">
    {service.isFeatured && (
      <div className="absolute -bottom-6 -left-6 w-24 h-24 -z-10">
        <Image src={redAccentShape} alt="" width={100} height={100} className="object-contain" />
      </div>
    )}

    <div
      className={cn(
        'flex flex-col items-center text-center px-0 py-10 h-full rounded-[36px] transition-all duration-300',
        service.isFeatured
          ? 'bg-white shadow-[0_40px_60px_rgba(0,0,0,0.05)]'
          : 'bg-transparent hover:bg-white hover:shadow-[0_40px_60px_rgba(0,0,0,0.05)]',
      )}
    >
      <div className="relative mb-6 h-24 w-24 flex items-center justify-center">
        <div className="absolute inset-0 bg-[#FFF1DA] rounded-tl-2xl rounded-br-lg rounded-tr-md rounded-bl-md -z-10 rotate-[-5deg] scale-75 opacity-50" />
        <Image src={service.icon} alt={service.title} width={80} height={80} className="object-contain z-10" />
      </div>

      <Paragraph className="font-semibold text-accent mb-4">{service.title}</Paragraph>

      <Paragraph className="text-muted leading-relaxed text-[15px] max-w-[170px]">{service.description}</Paragraph>
    </div>
  </div>
);
