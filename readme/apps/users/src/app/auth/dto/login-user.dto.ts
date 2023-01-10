import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, MaxLength, MinLength } from 'class-validator';
import { ValidityMessage as VM } from '@readme/core';
import { UserValidity as UV } from '../auth.constant';

export class LoginUserDto {
  @ApiProperty({
    description: 'User unique email address',
    example: 'user@user.ru',
    required: true,
  })
  @IsEmail({}, { message: VM.IsEmailMessage})
  public email: string;

  @ApiProperty({
    description: 'User password',
    example: '12345',
    required: true,
  })
  @MinLength(UV.PasswordMinLength, { message: VM.MinValueMessage })
  @MaxLength(UV.PasswordMaxLength, { message: VM.MaxValueMessage })
  public password: string;
}
