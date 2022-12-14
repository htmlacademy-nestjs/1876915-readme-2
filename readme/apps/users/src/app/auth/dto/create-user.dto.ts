import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    description: 'User unique email address',
    example: 'user@user.ru',
    required: true,
  })
  public email: string;

  @ApiProperty({
    description: 'User first name',
    example: 'John',
    required: true,
  })
  public firstName: string;

  @ApiProperty({
    description: 'User last name',
    example: 'Doe',
    required: true,
  })
  public lastName: string;

  @ApiProperty({
    description: 'User password',
    example: '12345',
    required: true,
  })
  public password: string;
}
