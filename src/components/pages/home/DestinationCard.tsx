import Image from 'next/image';
import { Paragraph } from '@/components/ui/typography';

interface DestinationCardProps {
  item: {
    location: string;
    price: string;
    duration: string;
    image: string;
    icon: string;
  };
}

export const DestinationCard = ({ item }: DestinationCardProps) => (
  <div className="relative flex flex-col bg-white rounded-[24px] overflow-hidden shadow-[0_40px_60px_rgba(0,0,0,0.05)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_40px_60px_rgba(0,0,0,0.1)] group">
    {/* Image Container — absolute, anchored to card */}
    <div className="absolute w-full aspect-[315/327] overflow-hidden">
      <Image
        src={item.image}
        alt={item.location}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-fit scale-[1.5] transition-transform mt-[20%]"
      />
    </div>

    {/* Spacer to push content below the image */}
    <div className="aspect-[315/327] w-full" />

    {/* Content Area */}
    <div className="px-6 py-7 flex flex-col gap-5 bg-white relative z-10">
      {/* Location and Price Row */}
      <div className="flex justify-between items-center">
        <Paragraph className="text-[18px] font-medium leading-none text-muted">{item.location}</Paragraph>
        <Paragraph className="text-[18px] font-medium leading-none text-muted">{item.price}</Paragraph>
      </div>

      {/* Duration Row */}
      <div className="flex items-center gap-3">
        <div className="relative w-5 h-5">
          <Image src={item.icon} alt="" fill className="object-contain" />
        </div>
        <Paragraph className="text-[16px] font-medium text-muted leading-none">{item.duration}</Paragraph>
      </div>
    </div>
  </div>
);

export default DestinationCard;
