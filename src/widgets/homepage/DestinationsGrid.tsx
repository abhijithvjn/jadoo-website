import Container from '@/components/common/Container';
import Image from 'next/image';
import { DestinationsGridData } from '@/types/types';
import { SubCaption, SubHeading } from '@/components/ui/typography';
import { DestinationCard } from '@/components/pages/home/DestinationCard';

const DestinationsGrid = ({ data }: { data: DestinationsGridData }) => {
  return (
    <section className="relative py-10 lg:py-24 overflow-visible">
      <Container className="relative">
        {/* Spiral Decoration - Positioned at bottom right behind cards */}
        <div className="absolute bottom-10 -right-4 lg:-right-10 -z-10 w-[60px] md:w-[80px] lg:w-[96px]">
          <Image src={data.decoration} alt="" width={96} height={252} className="object-contain" />
        </div>

        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16">
          <SubCaption className="font-semibold text-muted">{data.tag}</SubCaption>
          <SubHeading className="mt-2 text-accent capitalize">{data.title}</SubHeading>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10 xl:gap-16 px-4 md:px-0">
          {data.destinations.map((item) => (
            <DestinationCard key={item.id} item={item} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default DestinationsGrid;
