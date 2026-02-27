import Image from 'next/image';
import Container from '@/components/common/Container';
import { Mail } from 'lucide-react';
import { SubParagraph } from '@/components/ui/typography';

interface NewsletterSubscribeProps {
  data: {
    title: string;
    inputPlaceholder: string;
    buttonLabel: string;
    decorations: {
      backgroundSpiralLeft: string;
      backgroundSpiralRight: string;
      plusGridBottomRight: string;
      sendIconTopRight: string;
    };
  };
}

const NewsletterSubscribe = ({ data }: NewsletterSubscribeProps) => {
  const { title, inputPlaceholder, buttonLabel, decorations } = data;

  return (
    <section className="relative py-20 overflow-visible">
      <Container>
        <div className="relative">
          <div className="relative z-10 bg-[#F9F7FE] rounded-tl-[120px] rounded-br-[20px] rounded-tr-[20px] rounded-bl-[20px] px-8 py-16 md:px-20 md:py-16 text-center">
            <div className="absolute left-0 bottom-0 opacity-40 pointer-events-none">
              <Image
                src={decorations.backgroundSpiralLeft}
                alt=""
                width={600}
                height={600}
                className="
                  /* Base / Mobile: 200px */
                  w-[200px] h-[200px]
                  
                  /* Tablet (md): 300px */
                  md:w-[200px] md:h-[200px] 
                  lg:w-[280px] lg:h-[250px]
                  
                  object-contain
                "
              />
            </div>
            <div
              className="
                absolute right-0 top-0 opacity-100 pointer-events-none
                /* Responsive Container Size */
                w-[120px] h-[110px]      /* Mobile */
                md:w-[180px] md:h-[165px]  /* Tablet */
                lg:w-[220px] lg:h-[200px]  /* Desktop */
                xl:w-[280px] xl:h-[255px]  /* Large Desktop */"
            >
              <Image
                src={decorations.backgroundSpiralRight}
                alt=""
                fill
                className="object-contain"
                sizes="(max-width: 768px) 120px, (max-width: 1024px) 180px, (max-width: 1280px) 220px, 280px"
              />
            </div>

            <h2 className="relative z-20 text-[24px] md:text-[33px] font-semibold text-muted  max-w-4xl mx-auto mb-10">
              {title}
            </h2>

            <form className="relative z-20 flex flex-col md:flex-row items-center justify-center gap-4 max-w-xl mx-auto">
              <div className="relative w-full">
                <SubParagraph className="absolute left-6 top-1/2 font-Montserrat -translate-y-1/2">
                  <Mail size={20} />
                </SubParagraph>
                <input
                  type="email"
                  placeholder={inputPlaceholder}
                  className="w-full bg-white rounded-xl py-5 pl-16 pr-6 text-gray-700 outline-none border-none shadow-sm focus:ring-2 focus:ring-primary/20 transition-all"
                />
              </div>
              <button
                type="submit"
                className="w-full md:w-auto px-12 py-5 bg-[#FF946D] hover:bg-[#ff8354] text-white font-semibold rounded-xl transition-all shadow-lg"
              >
                {buttonLabel}
              </button>
            </form>

            <div className="absolute -top-4 -right-4 md:-top-2 md:-right-4 z-30 transform hover:scale-110 transition-transform">
              <div className="relative w-12 h-12 lg:w-16 lg:h-16 flex  bg-gradient-to-tr from-[#5E6282] to-[#747DEF] rounded-full shadow-xl">
                <Image
                  src={decorations.sendIconTopRight}
                  alt="Send"
                  width={44}
                  height={40}
                  className="object-contain translate-x-1"
                />
              </div>
            </div>
          </div>

          <div className="absolute -right-4 -bottom-24 lg:-right-4 lg:-bottom-24 xl:-right-16 xl:-bottom-25 z-0 hidden md:block">
            <Image src={decorations.plusGridBottomRight} alt="" width={150} height={150} />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default NewsletterSubscribe;
