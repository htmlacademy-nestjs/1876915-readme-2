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
  @IsEmail({}, { message: VM.isEmailMessage })
  public email: string;

  @ApiProperty({
    description: 'User first name',
    example: 'John',
    required: true,
  })
  @MinLength(UV.NameMinLength, { message: VM.minValueMessage })
  @MaxLength(UV.NameMinLength, { message: VM.maxValueMessage })
  public firstName: string;

  @ApiProperty({
    description: 'User last name',
    example: 'Doe',
    required: true,
  })
  @MinLength(UV.NameMinLength, { message: VM.minValueMessage })
  @MaxLength(UV.NameMinLength, { message: VM.maxValueMessage })
  public lastName: string;

  @ApiProperty({
    description: 'User password',
    example: '12345',
    required: true,
  })
  @MinLength(UV.PasswordMinLength, { message: VM.minValueMessage })
  @MaxLength(UV.PasswordMaxLength, { message: VM.maxValueMessage })
  public password: string;
}
