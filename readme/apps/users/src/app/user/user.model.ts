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

    @Prop({ trim: true })
    avatar: string;

    @Prop({ required: true, trim: true })
    createdAt: Date;

    @Prop({ required: true, trim: true })
    updatedAt: Date;

    @Prop({ required: true, trim: true })
    password: string;
}

export const UserSchema = SchemaFactory.createForClass(UserModel);
