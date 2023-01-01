import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CRUDRepositoryInterface } from '@readme/core';
import { Publication } from '@readme/shared-types';
import { PublicationEntity } from './publication.entity';

@Injectable()
export class PublicationRepository implements CRUDRepositoryInterface<PublicationEntity, number, Publication> {
  constructor(private readonly prisma: PrismaService) { }

  public async create(item: PublicationEntity): Promise<Publication> {
    const entityData = item.toObject();
    return this.prisma.publication.create({
      data: {
        ...entityData,
        tags: {
          connectOrCreate: [
            ...entityData.tags.map(({ name }) => ({
              create: { name },
              where: { name }
            }))
          ],
        },
        comments: {
          connect: []
        }
      },
      include: {
        tags: true,
        comments: true,
      }
    });
  }

  public async destroy(id: number): Promise<void> {
    await this.prisma.publication.delete({
      where: {
        id,
      }
    });
  }

  public async findById(id: number): Promise<Publication | null> {
    return null;
    // return this.prisma.publication.findFirst({
    //   where: {
    //     id
    //   },
    //   include: {
    //     comments: true,
    //     likes: true,
    //     tags: true,
    //   }
    // });
  }

  public async find(): Promise<Publication[]> {
    return this.prisma.publication.findMany({
      include: {
        comments: true,
        tags: true
      }
    });
  }

  public update(id: number, item: PublicationEntity): Promise<Publication> {
    return Promise.resolve(undefined);
  }



}
