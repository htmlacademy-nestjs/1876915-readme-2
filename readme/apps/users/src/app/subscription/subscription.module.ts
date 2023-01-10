import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SubscriptionService } from './subscription.service';
import { SubscriptionController } from './subscription.controller';
import { SubscriptionModel, SubscriptionSchema } from './subscription.model';
import { UserModule } from '../user/user.module';
import { SubscriptionRepository } from './subscription.repository';

@Module({
  imports: [
    UserModule,
    MongooseModule.forFeature([
      { name: SubscriptionModel.name, schema: SubscriptionSchema }
    ])],
  providers: [SubscriptionService, SubscriptionRepository],
  controllers: [SubscriptionController],
})
export class SubscriptionModule { }
