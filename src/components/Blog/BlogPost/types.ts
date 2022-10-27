export interface BlogPostType {
  img: string;
  data: string;
  headline: string;
  description: string;
  tags?: string[];
  variant: 'big' | 'medium' | 'small';
}
