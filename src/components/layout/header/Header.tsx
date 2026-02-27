import Image from 'next/image';
import Container from '@/components/common/Container';
import Link from 'next/link';
import { HeaderProps } from '@/types/types';

const Header: React.FC<HeaderProps> = ({ data }) => {
  const { logo, navLinks, actions } = data;
  return (
    <header className="relative w-full z-50">
      <Container>
        <div className="flex items-center justify-between py-10 lg:py-12">
          {/* LOGO - Using priority for LCP optimization */}
          <Link href={logo.link} className="relative z-10 flex-shrink-0">
            <Image src={logo.src} alt={logo.alt} width={115} height={34} priority className="h-auto w-auto" />
          </Link>

          {/* RIGHT SIDE: NAV & ACTIONS */}
          <div className="hidden lg:flex items-center gap-10 xl:gap-16">
            {/* NAVIGATION LINKS */}
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

            {/* ACTION BUTTONS */}
            <div className="flex items-center gap-8 xl:gap-12">
              {/* LOGIN */}
              <Link
                href={actions.login.link}
                className="font-nav text-sub-paragraph-xl text-accent hover:text-primary transition-colors duration-300 font-medium"
              >
                {actions.login.label}
              </Link>

              {/* SIGN UP - Specific Jadoo Border Style */}
              <Link
                href={actions.signup.link}
                className="font-nav text-sub-paragraph-xl text-accent px-5 py-2 border border-accent rounded-[5px] hover:bg-accent hover:text-white transition-all duration-300 font-medium"
              >
                {actions.signup.label}
              </Link>

              {/* LANGUAGE SELECTOR */}
              <div className="flex items-center gap-2 cursor-pointer group">
                <span className="font-nav text-sub-paragraph-xl text-accent font-medium uppercase">
                  {actions.language.current}
                </span>
                <Image
                  src={actions.language.icon}
                  alt="chevron"
                  width={10}
                  height={6}
                  className="group-hover:translate-y-0.5 transition-transform duration-200"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
