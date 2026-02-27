import Container from '@/components/common/Container';
import Image from 'next/image';
import { HeroBannerData } from '@/types/types';
import { MobileHero } from '@/components/pages/home/MobileHero';
import { DesktopHero } from '@/components/pages/home/DesktopHero';

const HomeHeroSection = ({ data }: { data: HeroBannerData }) => {
  return (
    <section className="relative w-full overflow-x-clip -mt-[140px]">
      <div className="absolute top-0 right-0 h-[80%] w-[48%] z-0 pointer-events-none">
        <Image src={data.images.backgroundShape} alt="" fill className="object-cover object-left" priority />
      </div>

      <Container className="relative z-10 pt-6">
        <MobileHero data={data} />
        <DesktopHero data={data} />
      </Container>
    </section>
  );
};

export default HomeHeroSection;
