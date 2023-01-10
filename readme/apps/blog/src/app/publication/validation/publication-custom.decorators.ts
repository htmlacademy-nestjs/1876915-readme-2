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
  validate(value: Tag[], { constraints }: ValidationArguments) {
    return value.every((item) => item?.name?.length >= constraints[0]);
  }
}

@ValidatorConstraint({ async: true })
export class TagMaxLengthConstraint implements ValidatorConstraintInterface {
  validate(value: Tag[], { constraints }: ValidationArguments) {
    return value.every((item) => item?.name?.length <= constraints[0]);
  }
}

@ValidatorConstraint({ async: true })
export class TagValidValueConstraint implements ValidatorConstraintInterface {
  validate(value: Tag[], { constraints }: ValidationArguments) {
    return value.every((item) => item?.name?.match(constraints[0]));
  }
}

export function TagMinLength(min: number, validationOptions?: ValidationOptions) {
  return function (object: CreatePublicationDto, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [min],
      validator: TagMinLengthConstraint,
    });
  };
}

export function TagMaxLength(max: number, validationOptions?: ValidationOptions) {
  return function (object: CreatePublicationDto, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [max],
      validator: TagMaxLengthConstraint,
    });
  };
}

export function IsTagValidValue(regexp: RegExp, validationOptions?: ValidationOptions) {
  return function (object: CreatePublicationDto, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [regexp],
      validator: TagValidValueConstraint,
    });
  };
}
