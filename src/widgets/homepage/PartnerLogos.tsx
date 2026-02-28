import Container from '@/components/common/Container';
import Image from 'next/image';
import React from 'react';

interface Logo {
  id: number;
  name: string;
  src: string;
  isFeatured?: boolean;
}

interface PartnerLogosProps {
  data: {
    logos: Logo[];
  };
}

const PartnerLogos = ({ data }: PartnerLogosProps) => {
  const { logos } = data;

  return (
    <section className="py-8 bg-white">
      <Container>
        <div className="flex flex-wrap items-center justify-center md:justify-between gap-8 md:gap-4">
          {logos.map((logo) => (
            <div
              key={logo.id}
              className={`
                flex items-center justify-center transition-all duration-300
                ${
                  logo.isFeatured
                    ? 'bg-white rounded-[10px] shadow-[0px_100px_80px_rgba(0,0,0,0.02),0px_42px_33px_rgba(0,0,0,0.01),0px_22px_17px_rgba(0,0,0,0.01),0px_12px_10px_rgba(0,0,0,0.01),0px_6px_5px_rgba(0,0,0,0.01),0px_2px_2px_rgba(0,0,0,0)]'
                    : 'grayscale opacity-90 hover:grayscale-0 hover:opacity-100'
                }
              `}
            >
              <div className="relative w-[120px] h-[120px] md:w-[120px] md:h-[120px] lg:w-[140px] lg:h-[140px] xl:w-[180px] xl:h-[180px]">
                <Image src={logo.src} alt={logo.name} fill className="object-contain" priority={logo.isFeatured} />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default PartnerLogos;
