import { Expose, Transform } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class UserRdo {
  @ApiProperty({
    description: 'User unique identifier',
    example: '62af63e1dd748f35bcf66943',
  })
  @Transform(({ obj }) => obj._id.toString())
  @Expose({ name: '_id' })
  public id: string;

  @ApiProperty({
    description: 'User unique email address',
    example: 'user@user.ru',
  })
  @Expose()
  public email: string;

  @ApiProperty({
    description: 'User first name',
    example: 'John',
  })
  @Expose()
  public firstName: string;

  @ApiProperty({
    description: 'User last name',
    example: 'Doe',
  })
  @Expose()
  public lastName: string;

  @ApiProperty({
    description: 'User avatar path',
    example: '/img/avatar.jpg',
  })
  @Expose()
  public avatar: string;
}
