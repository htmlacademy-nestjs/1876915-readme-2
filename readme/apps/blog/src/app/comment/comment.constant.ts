export const CommentHandleMessages = {
  CREATED: 'The new comment has been successfully created.',
  DELETED: 'The comment has been successfully deleted.',
} as const;

export enum CommentValidity {
  contentMinLength = 3,
  contentMaxLength = 50,
}
