import * as Joi from 'joi';
import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { PublicationType } from '@prisma/client';
import { PublicationValidity as pv } from './publication.constant';

export const publicationContentSchema = Joi.object({
  type: Joi.string(),
  content: Joi.object()
    .when('type', {
      is: Joi.equal(PublicationType.Video),
      then: Joi.object({
        title: Joi.string().min(pv.videoTitleMinLength).max(pv.videoTitleMaxLength).required(),
        videoLink: Joi.string().pattern(new RegExp('^[www.youtube.com/]+')).required(),
      })
    })
    .when('type', {
      is: Joi.equal(PublicationType.Text),
      then: Joi.object({
        title: Joi.string().min(pv.textTitleMinLength).max(pv.textTitleMaxLength).required(),
        announcement: Joi.string().min(pv.announcementMinLength).max(pv.announcementMaxLength).required(),
        text: Joi.string().min(pv.textMinLength).max(pv.textMaxLength).required(),
      })
    })
    .when('type', {
      is: Joi.equal(PublicationType.Quote),
      then: Joi.object({
        quote: Joi.string().min(pv.quoteMinLength).max(pv.quoteMaxLength).required(),
        quoteAuthor: Joi.string().min(pv.quoteAuthorMinLength).max(pv.quoteAuthorMaxLength).required(),
      })
    })
    .when('type', {
      is: Joi.equal(PublicationType.Photo),
      then: Joi.object({
        upload: Joi.binary().max(pv.photoMaxSize).required(),
      })
    })
    .when('type', {
      is: Joi.equal(PublicationType.Link),
      then: Joi.object({
        link: Joi.string().uri().required(),
        linkDescription: Joi.string().min(pv.quoteAuthorMinLength).max(pv.linkDescriptionMaxLength).required(),
      })
    })
});

@Injectable()
export class PublicationContentPipe implements PipeTransform {

  constructor(private schema: Joi.ObjectSchema) { }

  transform(value: Record<string, unknown>, _arg: ArgumentMetadata) {
    const { error } = this.schema.validate(value, {allowUnknown: true});
    if (error) {
      // throw new BadRequestException('Validation error', { cause: error, description: error.message });
      throw new BadRequestException(error);
    }
    return value;
  }
}
