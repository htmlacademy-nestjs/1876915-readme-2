import { Expose, Transform } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class CommentRto {
  @ApiProperty({
    description: 'Comment unique identifier',
    example: 1,
  })
  @Expose()
  public id: number;

  @ApiProperty({
    description: 'The content of the comment to the publication.',
    example: 'It turns out that comments on a topic or problem are a separate genre. Somehow I did not pay much attention to it before.',
  })
  @Expose()
  public content: string;

  @ApiProperty({
    description: 'Date the comment was created in ISO8601 format',
    example: `${new Date().toISOString()}`,
  })
  @Transform(({ obj }) => new Date(obj.createdAt).toISOString())
  @Expose()
  public createdAt: string;

  @ApiProperty({
    description: 'Date the comment was updated in ISO8601 format',
    example: `${new Date().toISOString()}`,
  })
  @Transform(({ obj }) => new Date(obj.updatedAt).toISOString())
  @Expose()
  public updatedAt: string;

  @ApiProperty({
    description: 'User unique identifier. Owner of the comment',
    example: '62af63e1dd748f35bcf66943',
  })
  @Expose()
  userId: string;

  @ApiProperty({
    description: 'Publication unique identifier',
    example: 1,
  })
  @Expose()
  publicationId: number;
}
