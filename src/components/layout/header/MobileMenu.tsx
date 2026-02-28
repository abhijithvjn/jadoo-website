'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { NavLink, HeaderActions } from '@/types/types';

interface MobileMenuProps {
  navLinks: NavLink[];
  actions: HeaderActions;
}

const MobileMenu = ({ navLinks, actions }: MobileMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const preventScroll = (e: TouchEvent) => e.preventDefault();

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      document.addEventListener('touchmove', preventScroll, { passive: false });
    }

    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      document.removeEventListener('touchmove', preventScroll);
    };
  }, [isOpen]);

  return (
    <>
      <button onClick={toggleMenu} className="lg:hidden relative z-[60] p-2 text-accent" aria-label="Toggle Menu">
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>
      <div
        className={`
        fixed inset-0 bg-white z-[55] flex flex-col items-center justify-center gap-8
        transition-transform duration-300 ease-in-out lg:hidden
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}
      `}
      >
        <nav>
          <ul className="flex flex-col items-center gap-6">
            {navLinks.map((nav) => (
              <li key={nav.id}>
                <Link href={nav.link} onClick={() => setIsOpen(false)} className="text-2xl font-medium text-accent">
                  {nav.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-col items-center gap-4 w-full px-10">
          <Link href={actions.login.link} onClick={() => setIsOpen(false)} className="text-xl font-medium text-accent">
            {actions.login.label}
          </Link>
          <Link
            href={actions.signup.link}
            onClick={() => setIsOpen(false)}
            className="w-full text-center px-5 py-3 border border-accent rounded-[5px] text-accent font-medium"
          >
            {actions.signup.label}
          </Link>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
