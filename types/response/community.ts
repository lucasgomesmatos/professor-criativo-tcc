import { Links, Meta } from "./requestMeta";

export interface CommunityRequest {
  data: PostCommunity[];
  links: Links;
  meta: Meta;
}

export interface PostCommunity {
  id: number;
  content: string;
  attachments: Attachments[];
  user: UserPost;
  created_at: Date;
  visible: boolean;
  number_of_comments: number;
}

export interface Attachments {
  type: string;
  path: string;
}

export interface UserPost {
  id: number;
  name: string;
  avatar_path: string;
  admin: boolean;
}

export interface CommentRequest {
  data: CommentPost[];
  links: Links;
  meta: Meta;
}

export interface CommentPost {
  id: number;
  comment: string;
  user: UserPost;
  responses: ResponsesComment[];
  created_at: Date;
}

export interface ResponsesComment {
  id: number;
  comment: string;
  user: UserPost;
  created_at: Date;
}
