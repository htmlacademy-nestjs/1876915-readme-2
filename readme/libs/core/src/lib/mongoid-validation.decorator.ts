import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { Types } from 'mongoose';

@ValidatorConstraint({ async: true })
export class MongoIdValidationConstraint implements ValidatorConstraintInterface {
  validate(value: string) {
    return Types.ObjectId.isValid(value);
  }
}

export function IsMongoId(validationOptions?: ValidationOptions) {
  return function (object: Record<string, string>, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: ValidatorConstraint,
    });
  };
}
