import { Types } from 'mongoose';
import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { ValidityMessage } from './validity-messages';


@Injectable()
export class MongoIdValidationPipe implements PipeTransform {
  transform(value: string, { type }: ArgumentMetadata) {
    if (type !== 'param') {
      throw new Error('This pipe must be used only with params!')
    }

    if (!Types.ObjectId.isValid(value)) {
      throw new BadRequestException(ValidityMessage.MongoIdMessage);
    }

    return value;
  }
}
