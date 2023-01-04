import { ApiProperty } from '@nestjs/swagger';

export class CreateSubscriptionDto {
  @ApiProperty({
    description: 'Blogger unique ID',
    example: '63b9ad36868257d7a7ccf1b2',
    required: true,
  })
  public bloggerId: string;

  @ApiProperty({
    description: 'Follower unique ID',
    example: '63b9ad36868257d7a7ccf1b2',
    required: true,
  })
  public followerId: string;
}
