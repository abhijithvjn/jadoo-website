import Container from '@/components/common/Container';
import { FloatingBookingCard } from '@/components/pages/home/FloatingBookingCard';
import { StepItem } from '@/components/pages/home/StepItem';
import { SubCaption, SubHeading } from '@/components/ui/typography';
import { BookingStepsData } from '@/types/types';

const BookingSteps = ({ data }: { data: BookingStepsData }) => {
  return (
    <section className="py-12 lg:py-20 overflow-hidden lg:overflow-visible">
      <Container className="grid grid-cols-1 md:grid-cols-2 items-center gap-20 lg:gap-10">
        <div className="flex flex-col gap-8">
          <div>
            <SubCaption className="text-muted font-semibold">{data.tag}</SubCaption>
            <SubHeading className="mt-3 max-w-[510px] text-accent font-bold leading-[1.2]">{data.title}</SubHeading>
          </div>

          <div className="flex flex-col gap-10 mt-4">
            {data.steps.map((step) => (
              <StepItem
                key={step.id}
                icon={step.icon}
                title={step.title}
                description={step.description}
                bgColor={step.iconBgColor}
              />
            ))}
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end pr-4 lg:pr-20 xl:pr-38 lg:pt-20">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#59B1E6] opacity-[0.15] blur-[100px] -z-10 rounded-full" />

          <FloatingBookingCard card={data.bookingCard} />
        </div>
      </Container>
    </section>
  );
};

export default BookingSteps;
