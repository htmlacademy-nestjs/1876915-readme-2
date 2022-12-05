import { ApiProperty } from '@nestjs/swagger';

export class LoginUserDto {
  @ApiProperty({
    description: 'User unique email address',
    example: 'user@user.ru',
    required: true,
  })
  public email: string;

  @ApiProperty({
    description: 'User password',
    example: '12345',
    required: true,
  })
  public password: string;
}
