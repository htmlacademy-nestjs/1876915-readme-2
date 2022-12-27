import { Publication, PublicationContent, PublicationType } from '@readme/shared-types';
import { Entity } from '@readme/core';

export class PublicationEntity implements Entity<PublicationEntity, Publication>, Publication {
  public id?: number;
  public originalId: number;
  public type: PublicationType;
  public isPublished: boolean;
  public createdAt?: Date;
  public updatedAt?: Date;
  public likesCount: number;
  public commentsCount: number;
  public tags: string[];
  public content: PublicationContent;
  public isRepublication: boolean;
  public originalUserId: string;
  public userId: string;

  constructor(publication: Publication) {
    this.fillEntity(publication);
  }

  public fillEntity(entity: Publication): void {
    this.id = entity.id;
    this.originalId = entity.originalId;
    this.type = entity.type;
    this.isPublished = true;
    this.createdAt = new Date();
    this.updatedAt = new Date();
    this.likesCount = 0;
    this.commentsCount = 0;
    this.tags = [];
    this.content = entity.content;
    this.isRepublication = false;
    this.originalUserId = entity.originalUserId;
    this.userId = entity.userId;
  }

  public toObject(): PublicationEntity {
    return { ...this };
  }

}