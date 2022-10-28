import { ReactNode } from 'react';

export type TypographyType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'h7' | 'h7m' | 'extraLarge';

export type HtmlTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface HeadlineProps {
  children: ReactNode;
  as?: HtmlTag;
  size: TypographyType;
  color?: string;
}
