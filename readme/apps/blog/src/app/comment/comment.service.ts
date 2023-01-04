import { Injectable } from '@nestjs/common';
import { Comment } from '@readme/shared-types';
import { PublicationRepository } from '../publication/publication.repository';
import { CommentEntity } from './comment.entity';
import { CommentRepository } from './comment.repository';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';

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
    this.commentRepository.destroy(id);
  }

  public async getComment(id: number): Promise<Comment> {
    return this.commentRepository.findById(id);
  }

  public async getComments(id: number): Promise<Comment[]> {
    return this.commentRepository.find(id);
  }

  public async updateComment(id: number, dto: UpdateCommentDto): Promise<Comment> {
    return this.commentRepository.update(id, { ...dto, updatedAt: new Date() });
  }
}
