import Container from '@/components/common/Container';
import Image from 'next/image';
import Link from 'next/link';
import { HeroBannerData } from '@/types/types';
import { Heading, Paragraph, SubCaption, SubParagraph } from '@/components/ui/typography';

const HomeHeroSection = ({ data }: { data: HeroBannerData }) => {
  return (
    <section className="relative w-full overflow-x-clip -mt-[140px]">
      <div className="absolute top-0 right-0 h-full w-[48%] z-0 pointer-events-none">
        <Image src={data.images.backgroundShape} alt="" fill className="object-cover object-left" priority />
      </div>

      <Container className="relative z-10 pt-6">
        <div className="md:hidden">
          <div className="pt-[120px] pb-8 sm:pt-[140px]">
            <div className="flex flex-col items-start">
              <SubCaption className="font-semibold text-primary uppercase">{data.tag}</SubCaption>

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

              {/* Right Aeroplane */}
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
                w-[100%]             {/* Increased from 85% to 100% */}
                sm:w-[90%]           {/* Slightly narrower on tablets to keep it clean */}
                h-auto               {/* Changed from h-[90%] to auto to prevent squishing */}
                object-contain 
                object-bottom
    "
              />
            </div>
          </div>
        </div>

        {/* ══ TABLET + DESKTOP (≥768px): absolute traveler fills right column ══ */}
        <div className="hidden md:grid min-h-[600px] md:pt-20 lg:pt-10" style={{ gridTemplateColumns: '55% 45%' }}>
          {/* ── LEFT COLUMN ── */}
          <div className="flex flex-col items-start justify-center pt-[160px] pb-16">
            <SubCaption className="font-semibold text-primary uppercase tracking-[0.22em] whitespace-nowrap">
              {data.tag}
            </SubCaption>

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

          {/* ── RIGHT COLUMN — absolutely filled by traveler ── */}
          <div className="relative self-stretch">
            {/* Aeroplane — upper area */}
            {data.images.aeroplane && (
              <div className="absolute z-10 w-[80px] md:w-[90px] lg:w-[110px] xl:w-[140px] md:top-[24%] md:left-[3%] xl:top-[14%] xl:left-[4%]">
                <Image src={data.images.aeroplane} alt="" width={110} height={46} className="w-full h-auto" />
              </div>
            )}

            {/* Aeroplane — mid-right */}
            {data.images.aeroplane && (
              <div className="absolute z-10 w-[65px] md:w-[75px] lg:w-[90px] xl:w-[120px] rotate-[8deg] md:top-[35%] md:-right-[10%] xl:top-[28%] xl:-right-[10%]">
                {' '}
                <Image src={data.images.aeroplane} alt="" width={88} height={37} className="w-full h-auto" />
              </div>
            )}

            {/* Traveler — fills grid column, anchored to bottom */}
            {/* Traveler — overflows left into the text column slightly */}
            <div className="absolute md:bottom-[10%] lg:bottom-0 z-[2] md:top-[1%] lg:top-[10%] md:left-[-35%] md:right-[-10%] lg:left-[-30%] lg:right-[-10%]">
              <Image src={data.images.main} alt="Traveler" fill priority className="object-contain object-bottom" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HomeHeroSection;
