export interface User {
  email: string;
  username: string;
  createdAt: string;
  updatedAt: string;
}

export interface Sub {
  createdAt: string;
  updatedAt: string;
  name: string;
  title: string;
  username: string;
  description: string;
  posts: [];
  imageUrl: string;
  bannerUrl?: string | undefined;
}

export interface Post {
  createdAt: string;
  updatedAt: string;
  identifier: string;
  slug: string;
  title: string;
  body?: string;
  subName: string;
  username: string;
  sub: Sub;
  UserVote: number;
  url: string;
  commentCount: number;
  voteScore: number;
}

export interface Comment {
  createdAt: string;
  updatedAt: string;
  identifier: string;
  body: string;
  username: string;
  UserVote: number;
  voteScore: number;
  post?: Post;
}

export interface PostComment {
  post: Post;
  comments: Comment[];
}
