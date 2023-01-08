import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateSubscriptionDto {
  @ApiProperty({
    description: 'Blogger unique ID',
    example: '63b9ad36868257d7a7ccf1b2',
    required: true,
  })
  @IsString()
  public bloggerId: string;

  @ApiProperty({
    description: 'Follower unique ID',
    example: '63b9ad36868257d7a7ccf1b2',
    required: true,
  })
  @IsString()
  public followerId: string;
}
