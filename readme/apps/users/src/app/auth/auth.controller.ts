import { Body, Controller, Post, Get, Param, HttpCode, HttpStatus, Patch } from '@nestjs/common';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { fillObject } from '@readme/core';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UserRdo } from './rdo/user.rdo';
import { DetailedUserRdo } from './rdo/detailed-user.rdo';
import { LoginUserDto } from './dto/login-user.dto';
import { UserAuthMessages } from './auth.constant';
import { LoggedUserRdo } from './rdo/logged-user.rdo';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService
  ) { }

  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  @ApiResponse({
    type: UserRdo,
    status: HttpStatus.CREATED,
    description: UserAuthMessages.CREATED,
  })
  @ApiResponse({
    type: UserRdo,
    status: HttpStatus.CONFLICT,
    description: UserAuthMessages.ALREADY_EXISTS
  })
  async create(@Body() dto: CreateUserDto) {
    const newUser = await this.authService.register(dto);
    return fillObject(UserRdo, newUser);
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  @ApiResponse({
    type: LoggedUserRdo,
    status: HttpStatus.OK,
    description: UserAuthMessages.LOGGED,
  })
  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED,
    description: `${UserAuthMessages.WRONG_PASSWORD} or ${UserAuthMessages.WRONG_LOGIN}`
  })
  async login(@Body() dto: LoginUserDto) {
    const verifiedUser = await this.authService.verifyUser(dto);

    return fillObject(UserRdo, verifiedUser);
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @ApiResponse({
    type: DetailedUserRdo,
    status: HttpStatus.NOT_FOUND,
    description: UserAuthMessages.NOT_FOUND,
  })
  async showDetails(@Param('id') id: string) {
    const existUser = await this.authService.getUser(id);
    return fillObject(DetailedUserRdo, existUser);
  }

  @Patch()
  @HttpCode(HttpStatus.OK)
  @ApiResponse({
    type: DetailedUserRdo,
    status: HttpStatus.OK,
    description: UserAuthMessages.UPDATED,
  })
  @ApiResponse({
    type: UserRdo,
    status: HttpStatus.NOT_FOUND,
    description: UserAuthMessages.NOT_FOUND,
  })
  async update() {
    throw new Error('Method not implemented')
  }

  @Patch('pass')
  @HttpCode(HttpStatus.OK)
  @ApiResponse({
    type: DetailedUserRdo,
    status: HttpStatus.OK,
    description: UserAuthMessages.PASSWORD_CHANGED,
  })
  @ApiResponse({
    type: UserRdo,
    status: HttpStatus.NOT_FOUND,
    description: UserAuthMessages.NOT_FOUND,
  })
  @ApiResponse({
    type: UserRdo,
    status: HttpStatus.CONFLICT,
    description: UserAuthMessages.WRONG_PASSWORD,
  })
  async changePassword() {
    throw new Error('Method not implemented')
  }
}
