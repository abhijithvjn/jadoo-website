// components/ui/typography.tsx
import { cn } from '@/lib/utils/utils';
import { CSSProperties, ElementType, ReactNode } from 'react';

interface TypographyProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  as?: ElementType;
}

export function Heading({ children, className, style, as: Tag = 'h1' }: TypographyProps) {
  return (
    <Tag style={style} className={cn('text-heading font-volkhov font-bold text-accent', className)}>
      {children}
    </Tag>
  );
}

export function SubHeading({ children, className, style, as: Tag = 'h2' }: TypographyProps) {
  return (
    <Tag style={style} className={cn('text-sub-heading font-volkhov font-bold text-accent', className)}>
      {children}
    </Tag>
  );
}

export function MainCaption({ children, className, style, as: Tag = 'p' }: TypographyProps) {
  return (
    <Tag style={style} className={cn('text-main-caption font-poppins text-muted', className)}>
      {children}
    </Tag>
  );
}

export function Caption({ children, className, style, as: Tag = 'p' }: TypographyProps) {
  return (
    <Tag style={style} className={cn('text-caption font-poppins text-muted', className)}>
      {children}
    </Tag>
  );
}

export function SubCaption({ children, className, style, as: Tag = 'span' }: TypographyProps) {
  return (
    <Tag style={style} className={cn('text-sub-caption font-poppins text-muted', className)}>
      {children}
    </Tag>
  );
}

export function Paragraph({ children, className, style, as: Tag = 'p' }: TypographyProps) {
  return (
    <Tag style={style} className={cn('text-paragraph font-poppins text-foreground', className)}>
      {children}
    </Tag>
  );
}

export function SubParagraph({ children, className, style, as: Tag = 'p' }: TypographyProps) {
  return (
    <Tag style={style} className={cn('text-sub-paragraph font-poppins text-muted', className)}>
      {children}
    </Tag>
  );
}
