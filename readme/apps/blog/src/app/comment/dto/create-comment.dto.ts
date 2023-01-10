import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, MaxLength, MinLength, IsMongoId } from 'class-validator';
import { ValidityMessage as VM } from '@readme/core';
import { CommentValidity as CV } from '../comment.constant';

export class CreateCommentDto {
  @ApiProperty({
    description: 'User unique identifier',
    example: '62af63e1dd748f35bcf66943',
    required: true,
  })
  @IsMongoId()
  public userId: string;

  @ApiProperty({
    description: 'The content of the comment to the publication.',
    example: 'It turns out that comments on a topic or problem are a separate genre. Somehow I did not pay much attention to it before.',
    required: true,
  })
  @MinLength(CV.ContentMinLength, { message: VM.MinValueMessage })
  @MaxLength(CV.ContentMaxLength, { message: VM.MaxValueMessage })
  public content: string;

  @ApiProperty({
    description: 'Publication unique identifier',
    example: '1',
    required: true,
  })
  @IsNumber()
  public publicationId: number;
}
