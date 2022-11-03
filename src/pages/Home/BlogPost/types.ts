export interface BlogPostType extends VariantProps {
  img: string;
  data: string;
  headline: string;
  description: string;
  tags?: string[];
}

export interface VariantProps {
  variant: 'big' | 'medium' | 'small' | 'without_description' | 'right_text';
}
