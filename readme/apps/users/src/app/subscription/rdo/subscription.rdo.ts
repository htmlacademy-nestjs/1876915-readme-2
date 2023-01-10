import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class SubscriptionRdo {
  @ApiProperty({
    description: 'Blogger unique ID',
    example: '63b9ad36868257d7a7ccf1b2',
    required: true,
  })
  @Expose()
  public bloggerId: string;

  @ApiProperty({
    description: 'Follower unique ID',
    example: '63b9ad36868257d7a7ccf1b2',
    required: true,
  })
  @Expose()
  public followerId: string;
}
