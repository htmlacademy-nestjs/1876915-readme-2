import { Types } from 'mongoose';
import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class MongoIdValidationPipe implements PipeTransform {
  transform(value: string, { type, data }: ArgumentMetadata) {
    if (type !== 'param') {
      throw new Error('This pipe must be used only with params!')
    }

    if (!Types.ObjectId.isValid(value)) {
      throw new BadRequestException(`Field \u00AB${data}\u00BB value must be valid ObjectID`);
    }

    return value;
  }
}
