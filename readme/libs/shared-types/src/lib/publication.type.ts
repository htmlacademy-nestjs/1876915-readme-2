import { Comment } from "./comment.type";
import { PublicationType } from "./publication-type.enum";

export type Publication = {
  id: number;
  originalId: number;
  title: string;
  content: string;
  type: PublicationType;
  createdAt: Date;
  updatedAt: Date;
  likedUserId: string[];
  likesCount: number;
  comment: Comment[];
  commentCount: number;
  tags?: string[];
  announcement?: string;
  quote?: string;
  quoteAuthor: string;
  photo?: string;
  link?: string;
  linkDescription: string;
  isRepublication: boolean;
  originalUserId: string;
  userId: string;
}
