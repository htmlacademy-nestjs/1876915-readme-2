import { CRUDRepositoryInterface } from '@readme/core';
import { Comment } from '@readme/shared-types';
import { CommentEntity } from './comment.entity';
import { PrismaService } from '../prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CommentRepository implements CRUDRepositoryInterface<CommentEntity, number, Comment> {
  constructor(private readonly prisma: PrismaService) { }

  public async create(item: CommentEntity): Promise<Comment> {
    const { content, publicationId, userId } = item.toObject();

    return this.prisma.comment.create({
      data: {
        content,
        userId,
        publication: {
          connect: { id: publicationId }
        }
      }
    });
  }

  public async destroy(id: number): Promise<void> {
    await this.prisma.comment.delete({
      where: {
        id,
      }
    });
  }

  public findById(id: number): Promise<Comment | null> {
    return this.prisma.comment.findFirst({
      where: {
        id
      }
    });
  }

  public find(id: number): Promise<Comment[]> {
    return this.prisma.comment.findMany({
      where: {
        publicationId: id
      }
    });
  }

  public update(id: number, item: CommentEntity): Promise<Comment> {
    return this.prisma.comment.update({
      where: {
        id
      },
      data: { ...item.toObject(), id }
    });
  }
}
