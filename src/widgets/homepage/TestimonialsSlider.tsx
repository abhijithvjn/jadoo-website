import React from 'react';
import TestimonialsClient from '@/components/pages/home/TestimonialsClient';
import { TestimonialsSliderData } from '@/types/types';

const TestimonialsSlider = ({ data }: { data: TestimonialsSliderData }) => {
  return (
    <section className="py-20 lg:py-32 overflow-hidden">
      <TestimonialsClient data={data} />
    </section>
  );
};

export default TestimonialsSlider;
