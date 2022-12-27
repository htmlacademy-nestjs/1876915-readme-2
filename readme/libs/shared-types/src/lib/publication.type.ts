import { PublicationType } from "./publication-type.enum";

type VideoPublication = {
  title?: string;
  videoLink?: string;
}

type TextPublication = {
  title?: string;
  announcement?: string;
  text?: string,
}

type QuotePublication = {
  quote?: string;
  quoteAuthor?: string;
}

type PhotoPublication = {
  file?: Blob;
}

type LinkPublication = {
  link?: string;
  linkDescription?: string;
}

export type PublicationContent = (
  | VideoPublication
  | TextPublication
  | QuotePublication
  | PhotoPublication
  | LinkPublication
);

export type Publication = {
  id?: number;
  originalId: number;
  type: PublicationType;
  isPublished: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  likesCount: number;
  commentsCount: number;
  tags: string[];
  content: PublicationContent;
  isRepublication: boolean;
  originalUserId: string;
  userId: string;
}
