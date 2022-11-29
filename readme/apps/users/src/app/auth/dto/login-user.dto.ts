import { ApiProperty } from '@nestjs/swagger';

export class LoginUserDto {
  @ApiProperty({
    description: 'User unique email address',
    example: 'user@user.ru'
  })
  public email: string;

  @ApiProperty({
    description: 'User password',
    example: '12345'
  })
  public password: string;
}
