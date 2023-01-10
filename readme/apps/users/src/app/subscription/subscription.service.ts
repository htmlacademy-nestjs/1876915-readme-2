import { Injectable } from '@nestjs/common';
import { Subscription } from '@readme/shared-types';
import { UserRepository } from '../user/user.repository';
import { SubscriptionRepository } from './subscription.repository';

@Injectable()
export class SubscriptionService {
  constructor(
    private readonly subscriptionRepository: SubscriptionRepository,
    private readonly userRepository: UserRepository,
  ) { }

  async subscribe(dto: Subscription): Promise<Subscription> {
    const {bloggerId , followerId} = dto;
    const existBlogger = await this.userRepository.findById(bloggerId);
    if(!existBlogger){
      throw new Error(`The user with id ${existBlogger} doesn't exist`);
    }

    const existSub = await this.subscriptionRepository.find({bloggerId , followerId});

    if(existSub){
      throw new Error(`User with id ${followerId} already subscribed on user with id ${bloggerId}`);
    }

    const newSub = await this.subscriptionRepository.create(dto);
    await this.userRepository.addSubscribersCount(bloggerId, 1);

    return newSub;
  }

  async unsubscribe({bloggerId, followerId}: Subscription): Promise<void> {
    const existSub = await this.subscriptionRepository.find({bloggerId, followerId});

    if(!existSub){
      throw new Error(`The user with id ${followerId} is not subscribed to the user with id ${bloggerId}`);
    }

    await this.subscriptionRepository.destroy(existSub._id);
    await this.userRepository.addSubscribersCount(bloggerId, -1);
  }

}
