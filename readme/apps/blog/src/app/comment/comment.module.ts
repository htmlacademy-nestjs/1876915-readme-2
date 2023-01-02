import { Module } from '@nestjs/common';
import { PublicationModule } from '../publication/publication.module';
import { CommentController } from './comment.controller';
import { CommentRepository } from './comment.repository';
import { CommentService } from './comment.service';

@Module({
  imports: [PublicationModule],
  controllers: [CommentController],
  providers: [CommentService, CommentRepository],
  exports: []
})
export class CommentModule { }
