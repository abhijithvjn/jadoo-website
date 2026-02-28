import Image from 'next/image';
import { HeroBannerData } from '@/types/types';
import { Heading, Paragraph, SubParagraph } from '@/components/ui/typography';
import Link from 'next/link';

export const DesktopHero = ({ data }: { data: HeroBannerData }) => (
  <div className="hidden md:grid min-h-[600px] md:pt-12 lg:pt-10" style={{ gridTemplateColumns: '55% 45%' }}>
    <div className="flex flex-col items-start justify-center pt-[160px] pb-16">
      <Paragraph className="font-semibold text-primary uppercase whitespace-nowrap">{data.tag}</Paragraph>

      <div className="mt-4">
        <Heading className="leading-[1.05]" style={{ maxWidth: '620px' }}>
          {data.title.split('enjoy')[0]}
          <span className="relative inline-block">
            enjoy
            <Image
              src={data.images.underline}
              alt=""
              width={220}
              height={14}
              className="absolute left-0 w-full h-auto"
              style={{ bottom: '-6px' }}
            />
          </span>
          {data.title.split('enjoy')[1]}
        </Heading>
      </div>

      <SubParagraph className="mt-8 text-muted leading-relaxed md:max-w-[340px] lg:max-w-[420px]">
        {data.description}
      </SubParagraph>

      <div className="mt-10 flex items-center gap-8">
        <Link
          href={data.primaryButton.link}
          className="
            inline-block bg-secondary text-white
            font-poppins font-semibold text-[15px]
            px-4 py-[14px] rounded-[10px]
            shadow-[0_20px_35px_rgba(241,165,1,0.4)]
            hover:brightness-105 transition-all duration-300
          "
        >
          {data.primaryButton.label}
        </Link>

        <button className="flex items-center gap-4 group">
          <div
            className="
              w-[48px] h-[48px] shrink-0
              flex items-center justify-center
              rounded-full bg-primary
              shadow-[0_15px_30px_rgba(223,105,81,0.45)]
              group-hover:scale-110 transition-transform duration-300
            "
          >
            <div className="w-0 h-0 border-t-[7px] border-t-transparent border-l-[13px] border-l-white border-b-[7px] border-b-transparent ml-[3px]" />
          </div>
          <Paragraph as="span" className="font-medium text-muted">
            {data.secondaryButton.label}
          </Paragraph>
        </button>
      </div>
    </div>

    <div className="relative self-stretch">
      {data.images.aeroplane && (
        <div className="absolute z-10 w-[80px] md:w-[90px] lg:w-[110px] xl:w-[140px] md:top-[10%] md:left-[3%] lg:top-[14%] lg:left-[4%]">
          <Image src={data.images.aeroplane} alt="" width={110} height={46} className="w-full h-auto" />
        </div>
      )}

      {data.images.aeroplane && (
        <div className="absolute z-10 w-[65px] md:w-[75px] lg:w-[90px] xl:w-[120px] rotate-[8deg] md:top-[20%] md:-right-[8%] lg:top-[24%] lg:-right-[6%]">
          <Image src={data.images.aeroplane} alt="" width={88} height={37} className="w-full h-auto" />
        </div>
      )}

      <div className="absolute md:bottom-[10%] lg:bottom-0 z-[2] md:top-[1%] lg:top-[10%] md:left-[-35%] md:right-[-10%] lg:left-[-30%] lg:right-[-10%]">
        <Image src={data.images.main} alt="Traveler" fill priority className="object-contain object-bottom" />
      </div>
    </div>
  </div>
);
