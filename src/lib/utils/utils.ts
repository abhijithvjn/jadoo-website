// lib/utils.ts
import { clsx, type ClassValue } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';

// Teach tailwind-merge about our custom @theme text-size tokens.
// Without this, twMerge doesn't recognise text-heading, text-sub-heading, etc.
// as font-size utilities and may silently drop them.
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      'font-size': [
        'text-heading',
        'text-sub-heading',
        'text-main-caption',
        'text-caption',
        'text-sub-caption',
        'text-paragraph',
        'text-sub-paragraph',
      ],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
