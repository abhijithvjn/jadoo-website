import Image from 'next/image';
import Container from '@/components/common/Container';
import Link from 'next/link';
import { HeaderProps } from '@/types/types';
import MobileMenu from './MobileMenu';

const Header: React.FC<HeaderProps> = ({ data }) => {
  const { logo, navLinks, actions } = data;

  return (
    <header className="relative w-full z-50">
      <Container>
        <div className="flex items-center justify-between py-6 md:py-10 lg:py-12">
          <Link href={logo.link} className="relative z-[60] flex-shrink-0">
            <Image src={logo.src} alt={logo.alt} width={115} height={34} priority className="h-8 md:h-auto w-auto" />
          </Link>

          <div className="hidden lg:flex items-center gap-10 xl:gap-16">
            <nav>
              <ul className="flex items-center gap-8 xl:gap-12">
                {navLinks.map((nav) => (
                  <li key={nav.id}>
                    <Link
                      href={nav.link}
                      className="font-nav text-sub-paragraph-xl text-accent hover:text-primary transition-colors duration-300 font-medium"
                    >
                      {nav.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex items-center gap-8 xl:gap-12">
              <Link href={actions.login.link} className="text-accent font-medium">
                {actions.login.label}
              </Link>
              <Link
                href={actions.signup.link}
                className="px-5 py-2 border border-accent rounded-[5px] text-accent font-medium hover:bg-accent hover:text-white transition-all"
              >
                {actions.signup.label}
              </Link>
              <div className="flex items-center gap-2 cursor-pointer group">
                <span className="text-accent font-medium uppercase">{actions.language.current}</span>
                <Image src={actions.language.icon} alt="chevron" width={10} height={6} />
              </div>
            </div>
          </div>

          <MobileMenu navLinks={navLinks} actions={actions} />
        </div>
      </Container>
    </header>
  );
};

export default Header;
