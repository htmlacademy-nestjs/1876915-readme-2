import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CRUDRepositoryInterface } from '@readme/core';
import { Publication } from '@readme/shared-types';
import { PublicationEntity } from './publication.entity';

@Injectable()
export class PublicationRepository implements CRUDRepositoryInterface<PublicationEntity, number, Publication> {
  constructor(private readonly prisma: PrismaService) {}

  public async create(item: PublicationEntity): Promise<Publication> {
    const entityData = item.toObject();
    return this.prisma.post.create({
      data: {
        ...entityData,
        categories: {
          connect: [...entityData.categories]
        },
        comments: {
          connect: []
        }
      },
      include: {
        comments: true,
        categories: true,
      }
    });
  }

  public async destroy(id: number): Promise<void> {
    await this.prisma.post.delete({
      where: {
        id,
      }
    });
  }

  public async findById(id: number): Promise<Publication | null> {
    return this.prisma.post.findFirst({
      where: {
        id
      },
      include: {
        comments: true,
        categories: true,
      }
    });
  }

  public find(): Promise<Publication[]> {
    return this.prisma.post.findMany({
      include: {
        comments: true,
        categories: true
      }
    });
  }

  public update(id: number, item: PublicationEntity): Promise<Publication> {
    return Promise.resolve(undefined);
  }



}
