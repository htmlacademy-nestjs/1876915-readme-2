import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CRUDRepositoryInterface } from '@readme/core';
import { Publication } from '@readme/shared-types';
import { PublicationEntity } from './publication.entity';

@Injectable()
export class PublicationRepository implements CRUDRepositoryInterface<PublicationEntity, number, Publication> {
  constructor(private readonly prisma: PrismaService) { }

  // public some(item: PublicationEntity): Publication {
  //   const entityData = item.toObject();
  //   const newPublication = this.prisma.publication.create({
  //     data: {
  //       ...entityData,
  //       comments: {
  //         connect: []
  //       },
  //     },
  //     include: {
  //       tags: true,
  //       comments: true,

  //     }
  //   });

  //   return newPublication;
  // }

  public async create(item: PublicationEntity): Promise<Publication> {
    return Promise.resolve(undefined);
    // const entityData = item.toObject();
    // return this.prisma.publication.create({
    //   data: {
    //     ...entityData,
    //     tag: {
    //       connect: [{name:}]
    //     },
    //     comments: {
    //       connect: []
    //     }
    //   },
    //   include: {
    //     comments: true,
    //     tag: true,
    //   }
    // });
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
    //     categories: true,
    //   }
    // });
  }

  public find(): Promise<Publication[]> {
    return Promise.resolve(undefined);
    // return this.prisma.publication.findMany({
    //   include: {
    //     comments: true,
    //     categories: true
    //   }
    // });
  }

  public update(id: number, item: PublicationEntity): Promise<Publication> {
    return Promise.resolve(undefined);
  }



}
