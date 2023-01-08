export const PublicationHandleMessages = {
  CREATED: 'The new publication has been successfully created.',
  DELETED: 'The publication has been successfully deleted.',
} as const;

export enum PublicationValidity {
  tagMinLength = 3,
  tagMaxLength = 10,
  tagsMaxQuantity = 8,
  videoTitleMinLength = 20,
  videoTitleMaxLength = 50,
  textTitleMinLength = 20,
  textTitleMaxLength = 50,
  announcementMinLength = 50,
  announcementMaxLength = 255,
  textMinLength = 100,
  textMaxLength = 1024,
  quoteMinLength = 20,
  quoteMaxLength = 300,
  quoteAuthorMinLength = 3,
  quoteAuthorMaxLength = 50,
  photoMaxSize = 1024,
  linkDescriptionMaxLength = 300,
}
