'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '@/components/common/Container';
import TestimonialCard from '@/components/pages/home/TestimonialCard';
import { SubCaption, SubHeading } from '@/components/ui/typography';
import { TestimonialsSliderData } from '@/types/types';
import { ChevronUp, ChevronDown } from 'lucide-react';

const TestimonialsClient = ({ data }: { data: TestimonialsSliderData }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % data.testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + data.testimonials.length) % data.testimonials.length);
  };

  // Card Stacking Variants
  const cardVariants = {
    top: {
      y: 0,
      x: 0,
      opacity: 1,
      zIndex: 20,
      scale: 1,
      transition: { duration: 0.5 },
    },
    stacked: {
      y: 60, // Offset to the bottom
      x: 40, // Offset to the right
      opacity: 0.4,
      zIndex: 10,
      scale: 0.95,
      transition: { duration: 0.5 },
    },
    exit: {
      y: -100, // Slides up and out
      opacity: 0,
      zIndex: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <Container className="grid grid-cols-1 md:grid-cols-[0.8fr_1fr] gap-20">
      {/* Left Side: Text and Pagination */}
      <div className="flex flex-col gap-8">
        <div>
          <SubCaption className="text-muted font-semibold uppercase tracking-widest">{data.tag}</SubCaption>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <SubHeading className="mt-4 font-bold leading-[1.1] max-w-[450px]">
                {data.rotatingTitles[activeIndex]}
              </SubHeading>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex gap-6 mt-10">
          {data.testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`w-3 h-3 rounded-full transition-all cursor-pointer 
              ${i === activeIndex ? 'bg-accent scale-125' : 'bg-[#E5E5E5]'}`}
            />
          ))}
        </div>
      </div>

      {/* Right Side: Card Stack and Vertical Nav */}
      <div className="relative flex items-center lg:pr-12">
        <div className="relative w-full h-[450px]">
          <AnimatePresence initial={false}>
            {data.testimonials.map((item, index) => {
              const isTop = index === activeIndex;
              const isStacked = index === (activeIndex + 1) % data.testimonials.length;

              // Only render the top card and the one behind it
              if (!isTop && !isStacked) return null;

              return (
                <motion.div
                  key={item.id}
                  variants={cardVariants}
                  initial="stacked"
                  animate={isTop ? 'top' : 'stacked'}
                  exit="exit"
                  className="absolute inset-0 h-fit"
                >
                  <TestimonialCard
                    quote={item.quote}
                    author={item.userName}
                    location={item.location}
                    role={item.role}
                    image={item.userImage}
                    isTop={isTop}
                  />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Vertical Navigation Arrows */}
        <div className="flex flex-col gap-10 ml-24 text-muted-foreground relative z-30">
          <button onClick={prevSlide} className="hover:text-accent transition-colors cursor-pointer">
            <ChevronUp size={24} strokeWidth={2.5} />
          </button>
          <button onClick={nextSlide} className="hover:text-accent transition-colors cursor-pointer">
            <ChevronDown size={24} strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </Container>
  );
};

export default TestimonialsClient;
