import { FunctionComponent, SVGProps } from 'react';

export interface VariantProps {
  variant: 'right_text' | 'center_text' | 'big_icon' | 'small_card';
}

export interface CardProps extends VariantProps {
  icon: FunctionComponent<SVGProps<SVGSVGElement>>;
  headline: string;
  description: string;
}
