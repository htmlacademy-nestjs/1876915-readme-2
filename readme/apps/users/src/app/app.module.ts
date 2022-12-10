import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { ENV_FILE_PATH } from './app.constant';
import { MongooseModule } from '@nestjs/mongoose/dist';
import { getMongoDbConfig } from '../config/mongodb.config';
import databaseConfig from '../config/database.config';
import envSchema from './env.schema';

/*
Примечания.
1. Применение forRoot/forRootAsync/forFeature/forFeatureAsync - это runtime подключение (import) динамических модулей.
2. В объект с настройками ConfigModule в свойстве load указывается массив коллбэков для
извлечения env-переменных в "пространство имен" (по сути это просто объекты, в данном
случае с названием "database")
3. Подключение модуля mongoose осуществляется через асинхронный метод forRootAsync,
т.к. env-переменные должны быть сначала подготовлены в ConfigModule в синхронном режиме.
*/

@Module({
  imports: [
    ConfigModule.forRoot({
      cache: true,
      isGlobal: true,
      envFilePath: ENV_FILE_PATH,
      load: [databaseConfig],
      validationSchema: envSchema,
    }),
    MongooseModule.forRootAsync(
      getMongoDbConfig()
    ),
    UserModule,
    AuthModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
