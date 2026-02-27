import Image from 'next/image';
import { Paragraph, SubCaption, SubParagraph } from '@/components/ui/typography';
import { BookingStepsData } from '@/types/types';

export const FloatingBookingCard = ({ card }: { card: BookingStepsData['bookingCard'] }) => (
  <div className="relative">
    <div className="bg-white rounded-[26px] p-5 shadow-[0_100px_80px_rgba(0,0,0,0.02),0_42px_33px_rgba(0,0,0,0.01)] min-w-[360px]">
      <div className="relative aspect-[321/161] w-full rounded-[24px] overflow-hidden mb-6">
        <Image src={card.mainImage} alt={card.title} fill className="object-cover" />
      </div>

      <div className="flex flex-col gap-3 px-1">
        <SubCaption className="font-medium tracking-tight text-foreground">{card.title}</SubCaption>
        <SubParagraph className="flex items-center gap-2 text-muted font-medium">
          <span>{card.dateRange}</span>
          <span className="h-4 w-[1px] bg-muted" />
          <span>{card.author}</span>
        </SubParagraph>

        <div className="flex gap-4 my-2 z-10">
          {[card.footprintIcon, card.mapIcon, card.sendIcon].map((icon, i) => (
            <div
              key={i}
              className="w-9 h-9 rounded-full bg-[#F5F5F5] flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors"
            >
              <Image src={icon} alt="" width={14} height={14} />
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center mt-2">
          <div className="flex items-center gap-3">
            <Image src="/images/home/building.png" alt="" width={16} height={16} />
            <Paragraph className="text-muted font-medium">{card.stats}</Paragraph>
          </div>
          <button className="relative w-5 h-5">
            <Image src={card.favoriteIcon} alt="" fill />
          </button>
        </div>
      </div>
    </div>

    <div className="absolute -right-10 lg:-right-34 bottom-14 bg-white rounded-[18px] p-4 shadow-[0_100px_80px_rgba(0,0,0,0.02)] flex gap-3 min-w-[260px] animate-in fade-in slide-in-from-right-4 duration-1000">
      <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
        <Image src={card.ongoingOverlay.destinationImage} alt="" fill className="object-cover" />
      </div>
      <div className="flex flex-col gap-0 w-full">
        <span className="text-[14px] font-medium text-muted-foreground opacity-70">{card.ongoingOverlay.status}</span>
        <SubParagraph className="text-[18px] font-medium text-foreground">{card.ongoingOverlay.title}</SubParagraph>
        <div className="mt-2">
          <div className="flex justify-between">
            <span className="text-[14px] font-medium text-primary">
              <span className="text-[#8A79DF]">{card.ongoingOverlay.completionPercentage}%</span> completed
            </span>
          </div>
          <div className="w-full bg-[#F5F5F5] rounded-full h-[5px]">
            <div
              className="h-full rounded-full transition-all duration-1000"
              style={{
                width: `${card.ongoingOverlay.completionPercentage}%`,
                backgroundColor: card.ongoingOverlay.barColor,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);
