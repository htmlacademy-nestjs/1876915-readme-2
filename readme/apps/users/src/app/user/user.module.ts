import { Module, Logger } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
// import { UserMemoryRepository } from './user-memory.repository';
import { UserModel, UserSchema } from './user.model';
import { UserRepository } from './user.repository';

/*
Примечание.
UserMemoryRepository (данные хранятся в ОЗУ) заменен на UserRepository (MongoDB)
*/

@Module({
  imports: [MongooseModule.forFeature([
    { name: UserModel.name, schema: UserSchema }
  ])],
  providers: [UserRepository, Logger],
  exports: [UserRepository]
})
export class UserModule { }
