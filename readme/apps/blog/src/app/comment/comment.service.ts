import { Injectable } from '@nestjs/common';
import { Comment } from '@readme/shared-types';
import { PublicationRepository } from '../publication/publication.repository';
import { CommentEntity } from './comment.entity';
import { CommentRepository } from './comment.repository';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { CommentQuery } from './query/comment.query';

@Injectable()
export class CommentService {
  constructor(
    private readonly commentRepository: CommentRepository,
    private readonly publicationRepository: PublicationRepository,
  ) { }

  public async createComment(dto: CreateCommentDto): Promise<Comment> {
    const existPublication = await this.publicationRepository.findById(dto.publicationId);
    if (!existPublication) {
      throw new Error(`Publication with id ${dto.publicationId} doesn't exist`);
    }
    const commentEntity = new CommentEntity(dto);
    return this.commentRepository.create(commentEntity);
  }

  public async deleteComment(id: number): Promise<void> {
    const existComment = await this.commentRepository.findById(id);
    if (!existComment) {
      throw new Error(`Publication with id ${id} doesn't exist`)
    }
    this.commentRepository.destroy(id);
  }

  public async getComment(id: number): Promise<Comment> {
    return this.commentRepository.findById(id);
  }

  public async getComments(id: number, query: CommentQuery): Promise<Comment[]> {
    return this.commentRepository.find(id, query);
  }

  public async updateComment(id: number, dto: UpdateCommentDto): Promise<Comment> {
    const existComment = await this.commentRepository.findById(id);
    if (!existComment) {
      throw new Error(`Publication with id ${id} doesn't exist`)
    }
    return this.commentRepository.update(id, { ...dto, updatedAt: new Date() });
  }
}
