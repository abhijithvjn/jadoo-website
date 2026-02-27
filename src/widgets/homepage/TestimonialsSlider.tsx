import React from 'react';
import TestimonialsClient from '@/components/pages/home/TestimonialsClient';
import { TestimonialsSliderData } from '@/types/types';

const TestimonialsSlider = ({ data }: { data: TestimonialsSliderData }) => {
  return (
    <section className="pt-8 pb-2 lg:pt-16 lg:pb-4 overflow-hidden">
      <TestimonialsClient data={data} />
    </section>
  );
};

export default TestimonialsSlider;
