import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';
import { Tag } from '@readme/shared-types';
import { CreatePublicationDto } from './dto/create-publication.dto';
import { PublicationValidity } from './publication.constant';

@ValidatorConstraint({ async: true })
export class TagMinLengthConstraint implements ValidatorConstraintInterface {
  validate(value: Tag[], _args: ValidationArguments) {
    return value.every((item) => item?.name?.length >= PublicationValidity.tagMinLength);
  }
}

@ValidatorConstraint({ async: true })
export class TagMaxLengthConstraint implements ValidatorConstraintInterface {
  validate(value: Tag[], _args: ValidationArguments) {
    return value.every((item) => item?.name?.length <= PublicationValidity.tagMaxLength);
  }
}

@ValidatorConstraint({ async: true })
export class TagValidValueConstraint implements ValidatorConstraintInterface {
  validate(value: Tag[], _args: ValidationArguments) {
    return value.every((item) => item?.name?.match(/^[a-z\u0400-\u04FF]+$/i));
  }
}

export function TagMinLength(validationOptions?: ValidationOptions) {
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

export function TagValidValue(validationOptions?: ValidationOptions) {
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
