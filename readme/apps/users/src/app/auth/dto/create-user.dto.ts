import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    description: 'User unique email address',
    example: 'user@user.ru'
  })
  public email: string;

  @ApiProperty({
    description: 'User first name',
    example: 'John'
  })
  public firstName: string;

  @ApiProperty({
    description: 'User last name',
    example: 'Doe'
  })
  public lastName: string;

  @ApiProperty({
    description: 'User password',
    example: '12345'
  })
  public password: string;
}
