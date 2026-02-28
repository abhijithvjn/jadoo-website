import Image from 'next/image';
import { HeroBannerData } from '@/types/types';
import { Heading, Paragraph, SubParagraph } from '@/components/ui/typography';
import Link from 'next/link';

export const MobileHero = ({ data }: { data: HeroBannerData }) => (
  <div className="md:hidden">
    <div className="pt-[120px] pb-8 sm:pt-[140px]">
      <div className="flex flex-col items-start">
        <Paragraph className="font-semibold text-primary uppercase">{data.tag}</Paragraph>

        <div className="mt-3">
          <Heading className="leading-[1.05]">
            {data.title.split('enjoy')[0]}
            <span className="relative inline-block">
              enjoy
              <Image
                src={data.images.underline}
                alt=""
                width={220}
                height={14}
                className="absolute left-0 w-full h-auto"
                style={{ bottom: '-5px' }}
              />
            </span>
            {data.title.split('enjoy')[1]}
          </Heading>
        </div>

        <SubParagraph className="mt-6 text-muted leading-relaxed max-w-[420px]">{data.description}</SubParagraph>

        <div className="mt-8 flex flex-wrap items-center gap-6">
          <Link
            href={data.primaryButton.link}
            className="
              inline-block bg-secondary text-white
              font-poppins font-semibold text-[14px] sm:text-[15px]
              px-6 sm:px-8 py-[12px] sm:py-[14px] rounded-[10px]
              shadow-[0_15px_30px_rgba(241,165,1,0.4)]
              hover:brightness-105 transition-all duration-300
            "
          >
            {data.primaryButton.label}
          </Link>

          <button className="flex items-center gap-3 group">
            <div
              className="
                w-[44px] h-[44px] sm:w-[52px] sm:h-[52px] shrink-0
                flex items-center justify-center
                rounded-full bg-primary
                shadow-[0_12px_25px_rgba(223,105,81,0.45)]
                group-hover:scale-110 transition-transform duration-300
              "
            >
              <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[11px] border-l-white border-b-[6px] border-b-transparent ml-[2px]" />
            </div>
            <Paragraph as="span" className="font-medium text-muted">
              {data.secondaryButton.label}
            </Paragraph>
          </button>
        </div>
      </div>

      <div className="relative mt-10 flex justify-center">
        {data.images.aeroplane && (
          <div className="absolute z-10 w-[60px] top-[10%] left-[25%]">
            <Image src={data.images.aeroplane} alt="" width={70} height={30} className="w-full h-auto" />
          </div>
        )}

        {data.images.aeroplane && (
          <div className="absolute z-10 w-[55px] top-[12%] right-[5%] rotate-[8deg]">
            <Image src={data.images.aeroplane} alt="" width={55} height={23} className="w-full h-auto" />
          </div>
        )}

        <Image
          src={data.images.main}
          alt="Traveler"
          width={600}
          height={720}
          priority
          className="
            relative z-[2]
            w-[100%]
            sm:w-[90%]
            h-auto
            object-contain 
            object-bottom
          "
        />
      </div>
    </div>
  </div>
);
