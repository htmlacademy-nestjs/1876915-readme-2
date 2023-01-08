export const DEFAULT_COMMENT_QUERY_LIMIT = 50;
export const DEFAULT_SORT_DIRECTION = 'desc';

export const CommentHandleMessages = {
  CREATED: 'The new comment has been successfully created.',
  DELETED: 'The comment has been successfully deleted.',
} as const;

export enum CommentValidity {
  ContentMinLength = 3,
  ContentMaxLength = 50,
}
