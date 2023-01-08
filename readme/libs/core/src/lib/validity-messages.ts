export enum ValidityMessage {
  isEmailMessage = 'Field \u00AB$property\u00BB must be a valid email address',
  isStringMessage = 'Field \u00AB$property\u00BB must be a string',
  isArrayMessage = 'Field \u00AB$property\u00BB must be an array',
  isArrayMaxSizeMessage = 'Field \u00AB$property\u00BB must be an array with size equal or less than $constraint1',
  isNotEmptyMessage = 'Field \u00AB$property\u00BB must not be empty',
  minValueMessage = 'Field \u00AB$property\u00BB value/length must be equal or greater than $constraint1',
  maxValueMessage = 'Field \u00AB$property\u00BB value/length must be equal or less than $constraint1',
  isValidValue = 'Field \u00AB$property\u00BB values must starts with letter',
  mongoIdMessage = 'Bad entity ID',
}
