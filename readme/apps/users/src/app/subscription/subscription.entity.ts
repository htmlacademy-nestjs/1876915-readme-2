import { Injectable } from '@nestjs/common'
import { Entity } from '@readme/core';
import { Subscription } from '@readme/shared-types';

@Injectable()
export class SubscriptionEntity implements Entity<SubscriptionEntity, Subscription>, Subscription {
  public _id: string;
  public bloggerId: string;
  public followerId: string;

  constructor(subscription: Subscription) {
    this.fillEntity(subscription);
  }

  public toObject() {
    return { ...this };
  }

  public fillEntity(subscription: Subscription) {
    this._id = subscription._id;
    this.bloggerId = subscription.bloggerId;
    this.followerId = subscription.followerId;
  }
}
