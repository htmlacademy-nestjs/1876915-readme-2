import { ApiProperty } from '@nestjs/swagger';
import { MaxLength, MinLength } from 'class-validator';
import { ValidityMessage as VM } from '@readme/core';
import { CommentValidity as CV} from '../comment.constant';

export class UpdateCommentDto {
  @ApiProperty({
    description: 'The content of the comment to the publication.',
    example: 'It turns out that comments on a topic or problem are a separate genre. Somehow I did not pay much attention to it before.',
    required: true,
  })
  @MinLength(CV.ContentMinLength, { message: VM.MinValueMessage })
  @MaxLength(CV.ContentMaxLength, { message: VM.MaxValueMessage })
  public content: string;
}
