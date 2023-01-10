import { ApiProperty } from '@nestjs/swagger';
import { IsMongoId } from 'class-validator';
import { ValidityMessage as VM } from '@readme/core';

export class CreateSubscriptionDto {
  @ApiProperty({
    description: 'Blogger unique ID',
    example: '63b9ad36868257d7a7ccf1b2',
    required: true,
  })
  @IsMongoId({message:VM.MongoIdMessage})
  public bloggerId: string;

  @ApiProperty({
    description: 'Follower unique ID',
    example: '63b9ad36868257d7a7ccf1b2',
    required: true,
  })
  @IsMongoId({message:VM.MongoIdMessage})
  public followerId: string;
}
