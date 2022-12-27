import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { User } from '@readme/shared-types';

@Schema({
  collection: 'users',
})
export class UserModel extends Document implements User {
  @Prop({ required: true, trim: true, unique: true })
  email: string;

  @Prop({ required: true, trim: true })
  firstName: string;

  @Prop({ required: true, trim: true })
  lastName: string;

  @Prop({ trim: true, default: '' })
  avatar: string;

  @Prop({ required: true, trim: true, default: new Date() })
  createdAt: Date;

  @Prop({ required: true, trim: true, default: new Date() })
  updatedAt: Date;

  @Prop({ required: true, trim: true })
  password: string;

  @Prop({ required: true, min: 0, default: 0 })
  publicationCount: number;

  @Prop({ required: true, min: 0, default: 0 })
  subscribersCount: number;
}

export const UserSchema = SchemaFactory.createForClass(UserModel);
