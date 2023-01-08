import { ApiProperty } from '@nestjs/swagger';
import { MaxLength, MinLength } from 'class-validator';
import { ValidityMessage as VM } from '@readme/core';
import { UserValidity as UV } from '../auth.constant';

export class ChangeUserPasswordDto {
  @ApiProperty({
    description: 'User current password',
    example: '12345',
    required: true
  })
  @MinLength(UV.PasswordMinLength, { message: VM.minValueMessage })
  @MaxLength(UV.PasswordMaxLength, { message: VM.maxValueMessage })
  public oldPassword: string;

  @ApiProperty({
    description: 'User new password',
    example: '12345',
    required: true
  })
  @MinLength(UV.PasswordMinLength, { message: VM.minValueMessage })
  @MaxLength(UV.PasswordMaxLength, { message: VM.maxValueMessage })
  public newPassword: string;
}
