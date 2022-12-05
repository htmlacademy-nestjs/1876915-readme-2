import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto {
  @ApiProperty({
    description: 'User unique email address',
    example: 'user@user.ru',
    required: false,
  })
  public email?: string;

  @ApiProperty({
    description: 'User first name',
    example: 'John',
    required: false,
  })
  public firstName?: string;

  @ApiProperty({
    description: 'User last name',
    example: 'Doe',
    required: false,
  })
  public lastName?: string;
}
