import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';
import { Tag } from '@readme/shared-types';
import { CreatePublicationDto } from '../dto/create-publication.dto';

@ValidatorConstraint({ async: true })
export class TagMinLengthConstraint implements ValidatorConstraintInterface {
  validate(value: Tag[], args: ValidationArguments) {
    return value.every((item) => item?.name?.length >= args[0]);
  }
}

@ValidatorConstraint({ async: true })
export class TagMaxLengthConstraint implements ValidatorConstraintInterface {
  validate(value: Tag[], args: ValidationArguments) {
    return value.every((item) => item?.name?.length <= args[0]);
  }
}

@ValidatorConstraint({ async: true })
export class TagValidValueConstraint implements ValidatorConstraintInterface {
  validate(value: Tag[], args: ValidationArguments) {
    return value.every((item) => item?.name?.match(args[0]));
    // return value.every((item) => item?.name?.match(/^[a-z\u0400-\u04FF]+$/i));
  }
}

export function TagMinLength( args: ValidationArguments, validationOptions?: ValidationOptions) {
  return function (object: CreatePublicationDto, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: TagMinLengthConstraint,
    });
  };
}

export function TagMaxLength(validationOptions?: ValidationOptions) {
  return function (object: CreatePublicationDto, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: TagMaxLengthConstraint,
    });
  };
}

export function IsTagValidValue(validationOptions?: ValidationOptions) {
  return function (object: CreatePublicationDto, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: TagValidValueConstraint,
    });
  };
}
