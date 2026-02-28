import Container from '@/components/common/Container';
import { Paragraph, SubCaption } from '@/components/ui/typography';
import { FooterProps } from '@/types/types';
import Image from 'next/image';
import Link from 'next/link';

const Footer = ({ data }: FooterProps) => {
  const { brand, columns, socials, appPrompts, copyright } = data;

  return (
    <footer className="py-20 bg-white">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-4">
          <div className="lg:col-span-1.5">
            <h1 className="text-[44px] font-base font-poppins text-accent mb-6">{brand.name}</h1>
            <Paragraph className="text-[14px] text-muted leading-[1.24] max-w-[200px]">{brand.tagline}</Paragraph>
          </div>

          {columns.map((column, idx) => (
            <div key={idx} className="flex flex-col gap-6">
              <SubCaption className="text-[21px] font-bold text-accent font-poppins">{column.title}</SubCaption>
              <div className="flex flex-col gap-3">
                {column.links.map((link, lIdx) => (
                  <Link
                    key={lIdx}
                    href={link.link}
                    className="text-[18px] text-muted font-medium hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          <div className="flex flex-col items-center lg:items-start gap-6">
            <div className="flex items-center gap-6">
              {socials.map((social, sIdx) => (
                <Link
                  key={sIdx}
                  href="#"
                  className={`relative flex items-center justify-center w-[45px] h-[45px] rounded-full ${
                    social.isGradient ? 'bg-white' : 'bg-white'
                  }`}
                >
                  <Image src={social.icon} alt={social.platform} width={80} height={80} className="object-contain" />
                </Link>
              ))}
            </div>

            <Paragraph className="font-medium text-muted">{appPrompts.text}</Paragraph>

            <div className="flex items-center gap-2">
              <Link href="#" className="hover:opacity-80 transition-opacity">
                <Image
                  src={appPrompts.googlePlay}
                  alt="Get it on Google Play"
                  width={107}
                  height={35}
                  className="object-contain"
                />
              </Link>
              <Link href="#" className="hover:opacity-80 transition-opacity">
                <Image
                  src={appPrompts.appleStore}
                  alt="Available on the Apple Store"
                  width={107}
                  height={35}
                  className="object-contain"
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-24 text-center">
          <p className="text-[14px] font-medium text-muted">{copyright}</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
