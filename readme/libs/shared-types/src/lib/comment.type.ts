export type Comment = {
  id?: number;
  content: string;
  createdAt?: Date;
  updatedAt?: Date;
  userId: string;
  publicationId: number;
}
