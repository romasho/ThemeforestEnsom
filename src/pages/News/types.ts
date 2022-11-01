import { DataBlogType } from '@/store/reducers/blogSlice/data';

export interface PostsProps {
  posts: DataBlogType[];
}

export interface PostProps {
  post: DataBlogType;
}
