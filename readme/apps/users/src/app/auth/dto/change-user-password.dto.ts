import { ApiProperty } from '@nestjs/swagger';

export class ChangeUserPasswordDto {
  @ApiProperty({
    description: 'User current password',
    example: '12345',
    required: true
  })
  public oldPassword: string;

  @ApiProperty({
    description: 'User new password',
    example: '12345',
    required: true
  })
  public newPassword: string;
}
