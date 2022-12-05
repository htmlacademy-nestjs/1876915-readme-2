import { Module } from '@nestjs/common';
import { CommentModule } from './comment/comment.module';
import { PublicationModule } from './publication/publication.module';
import { FeedModule } from './feed/feed.module';

@Module({
  imports: [CommentModule, PublicationModule, FeedModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
