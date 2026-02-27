import Container from '@/components/common/Container';
import Image from 'next/image';
import { ServicesGridData } from '@/types/types';
import { SubCaption, SubHeading } from '@/components/ui/typography';
import { ServiceCard } from '@/components/pages/home/ServiceCard';

const ServicesGrid = ({ data }: { data: ServicesGridData }) => {
  return (
    <section className="relative py-8 lg:py-16 overflow-visible">
      <div className="absolute top-20 right-0 -z-10 w-[120px] md:w-[130px] lg:w-[150px] xl:w-[180px]">
        <Image src={data.decorations.topRightGrid} alt="" width={180} height={180} className="object-contain" />
      </div>

      <Container className="relative">
        <div className="flex flex-col items-center text-center mb-16 md:mb-8">
          <SubCaption className="font-semibold text-muted uppercase tracking-widest">{data.category_tag}</SubCaption>
          <SubHeading className="mt-2 text-accent capitalize">{data.title}</SubHeading>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {data.services.map((service) => (
            <ServiceCard key={service.id} service={service} redAccentShape={data.decorations.redAccentShape} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ServicesGrid;
