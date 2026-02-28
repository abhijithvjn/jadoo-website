import { Widget } from '@/types/types';
import HomeHeroSection from '@/widgets/homepage/HomeHeroSection';
import ServicesGrid from '@/widgets/homepage/ServicesGrid';
import BookingSteps from '@/widgets/homepage/BookingSteps';
import TestimonialsSlider from '@/widgets/homepage/TestimonialsSlider';
import PartnerLogos from '@/widgets/homepage/PartnerLogos';
import NewsletterSubscribe from '@/widgets/homepage/NewsletterSubscribe';
import DestinationsGrid from '@/widgets/homepage/DestinationsGrid';

const WIDGET_COMPONENTS: Record<Widget['widget_type'], React.ComponentType<{ data: any }>> = {
  HeroBanner: HomeHeroSection,
  ServicesGrid: ServicesGrid,
  DestinationsGrid: DestinationsGrid,
  BookingSteps: BookingSteps,
  TestimonialsSlider: TestimonialsSlider,
  PartnerLogos: PartnerLogos,
  NewsletterSubscribe: NewsletterSubscribe,
};

interface WidgetRendererProps {
  widgets: Widget[];
}

export default function WidgetRenderer({ widgets }: WidgetRendererProps) {
  return (
    <>
      {widgets.map((widget, index) => {
        const Component = WIDGET_COMPONENTS[widget.widget_type];

        if (!Component) {
          if (process.env.NODE_ENV === 'development') {
            console.warn(`Widget type "${widget.widget_type}" not found in registry.`);
          }
          return null;
        }

        return <Component key={`${widget.widget_type}-${index}`} data={widget.data} />;
      })}
    </>
  );
}
