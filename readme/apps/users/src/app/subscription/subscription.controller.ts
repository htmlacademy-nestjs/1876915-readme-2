import { ApiTags } from '@nestjs/swagger';
import { Controller, Body, HttpStatus, Param, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { fillObject } from '@readme/core';
import { CreateSubscriptionDto } from './dto/create-subscription.dto';
import { SubscriptionRdo } from './rdo/subscription.rdo';
import { SubscriptionService } from './subscription.service';

@ApiTags('subscriptions')
@Controller('subscriptions')
export class SubscriptionController {
  constructor(
    private readonly subscriptionService: SubscriptionService,
  ) { }

  @Post('/:isFollow')
  async create(@Param('isFollow') isFollow: string, @Body() dto: CreateSubscriptionDto, @Res() res: Response) {
    if (isFollow) {
      const newSubscription = await this.subscriptionService.subscribe(dto);
      return res.status(HttpStatus.CREATED).json(fillObject(SubscriptionRdo, newSubscription));
    }

    await this.subscriptionService.unsubscribe(dto);
    return res.status(HttpStatus.NO_CONTENT).send();
  }
}

