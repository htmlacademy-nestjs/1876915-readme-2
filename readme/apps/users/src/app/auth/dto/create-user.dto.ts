import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, MaxLength, MinLength } from 'class-validator';
import { ValidityMessage as VM } from '@readme/core';
import { UserValidity as UV } from '../auth.constant';

export class CreateUserDto {
  @ApiProperty({
    description: 'User unique email address',
    example: 'user@user.ru',
    required: true,
  })
  @IsEmail({}, { message: VM.IsEmailMessage })
  public email: string;

  @ApiProperty({
    description: 'User first name',
    example: 'John',
    required: true,
  })
  @MinLength(UV.NameMinLength, { message: VM.MinValueMessage })
  @MaxLength(UV.NameMaxLength, { message: VM.MaxValueMessage })
  public firstName: string;

  @ApiProperty({
    description: 'User last name',
    example: 'Doe',
    required: true,
  })
  @MinLength(UV.NameMinLength, { message: VM.MinValueMessage })
  @MaxLength(UV.NameMaxLength, { message: VM.MaxValueMessage })
  public lastName: string;

  @ApiProperty({
    description: 'User password',
    example: '12345',
    required: true,
  })
  @MinLength(UV.PasswordMinLength, { message: VM.MinValueMessage })
  @MaxLength(UV.PasswordMaxLength, { message: VM.MaxValueMessage })
  public password: string;
}
