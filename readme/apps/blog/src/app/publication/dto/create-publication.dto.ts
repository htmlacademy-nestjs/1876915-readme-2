import { ApiProperty, } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsEnum, IsBoolean, IsString, IsOptional, IsArray, ArrayMaxSize, IsObject } from 'class-validator';
import { PublicationContent, PublicationType, PublicationTypeObject, Tag } from '@readme/shared-types';
import { PublicationValidity as PV } from '../publication.constant';
import { ValidityMessage as VM } from '@readme/core';
import { TagMaxLength, TagMinLength, TagValidValue } from '../validation-decorators';


export class CreatePublicationDto {
  @ApiProperty({
    description: 'Type of publication',
    example: 'video',
    required: true,
    type: () => String,
    enum: PublicationTypeObject,
  })
  @IsEnum(PublicationTypeObject, { message: `Allowed genre types: ${Object.values(PublicationTypeObject)}` })
  public type: PublicationType;

  @ApiProperty({
    description: 'The field indicates the publication status: published (true by default) or draft (false)',
    example: 'true',
    required: true,
  })
  @IsOptional()
  @IsBoolean()
  public isPublished?: boolean;

  @ApiProperty({
    description: 'Tags for publications',
    example: '[books, cooking]',
    required: true,
  })
  @IsArray({ message: VM.isArrayMessage })
  @ArrayMaxSize(PV.tagsMaxQuantity, { message: VM.isArrayMaxSizeMessage })
  @Transform(({ value }) => Array.from(new Set<string>(value)).map((item) => ({ name: item.toLowerCase() })))
  @TagMinLength({ message: VM.minValueMessage })
  @TagMaxLength({ message: VM.maxValueMessage })
  @TagValidValue({ message: VM.isValidValue })
  public tags: Tag[];

  @ApiProperty({
    description: 'The content of the publication. Depends on the type of publication',
    example: '{}',
    required: true,
    //todo: как добавить пример типов объектов (т.е. контента)?
  })
  @IsObject()
  public content: PublicationContent;

  @ApiProperty({
    description: 'User unique identifier',
    example: '62af63e1dd748f35bcf66943',
    required: true,
  })
  @IsString()
  public userId: string;
}
