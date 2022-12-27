import { Injectable } from '@nestjs/common';
import { Comment } from '@readme/shared-types';
import { CommentEntity } from './comment.entity';
import { CommentRepository } from './comment.repository';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';

@Injectable()
export class CommentService {
  constructor(
    private readonly commentRepository: CommentRepository,
  ) { }

  async createComment(dto: CreateCommentDto): Promise<Comment> {
    const commentEntity = new CommentEntity(dto);
    return this.commentRepository.create(commentEntity);
  }

  async deleteComment(id: number): Promise<void> {
    this.commentRepository.destroy(id);
  }

  async getComment(id: number): Promise<Comment> {
    return this.commentRepository.findById(id);
  }

  async getComments(id: number): Promise<Comment[]> {
    return this.commentRepository.find(id);
  }

  async updateComment(id: number, dto: UpdateCommentDto): Promise<Comment> {
    const { publicationId, userId } = await this.getComment(id);
    return this.commentRepository.update(id, new CommentEntity({ ...dto, publicationId, userId }));
  }
}
