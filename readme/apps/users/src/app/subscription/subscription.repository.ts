import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { CRUDRepositoryInterface } from '@readme/core';
import { Subscription } from '@readme/shared-types';
import { Model } from 'mongoose';
import { SubscriptionEntity } from './subscription.entity';
import { SubscriptionModel } from './subscription.model';

@Injectable()
export class SubscriptionRepository implements CRUDRepositoryInterface<SubscriptionEntity, string, Subscription> {
  constructor(
    @InjectModel(SubscriptionModel.name)
    private readonly subscriptionModel: Model<SubscriptionModel>,
  ) { }

  public async find({bloggerId, followerId}: Subscription): Promise<Subscription | null> {
    return this.subscriptionModel.findOne({bloggerId, followerId}).exec();
  }

  public async create(dto: Subscription): Promise<Subscription> {
    return this.subscriptionModel.create(dto);
  }

  public async destroy(id: string): Promise<void> {
    this.subscriptionModel.findByIdAndDelete(id).exec();
  }

  public async update(id: string, item: Subscription): Promise<Subscription> {
    throw new Error(`Not implemented method. Args: ${id}, ${item}`);
  }

  public async findById(bloggerId: string): Promise<Subscription | null> {
    throw new Error(`Not implemented method. Args: ${bloggerId}`);
  }

}
