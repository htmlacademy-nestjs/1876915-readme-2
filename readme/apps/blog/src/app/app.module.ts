import { Module } from '@nestjs/common';
import { CommentModule } from './comment/comment.module';
import { PublicationModule } from './publication/publication.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [CommentModule, PublicationModule, PrismaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
