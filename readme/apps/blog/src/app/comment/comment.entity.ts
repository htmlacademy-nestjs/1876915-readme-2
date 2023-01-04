import { Injectable } from '@nestjs/common'
import { Comment } from '@readme/shared-types'
import { Entity } from '@readme/core';

@Injectable()
export class CommentEntity implements Entity<CommentEntity, Comment>, Comment {
    public id?: number;
    public content: string;
    public createdAt?: Date;
    public updatedAt?: Date;
    public userId: string;
    public publicationId: number;

    constructor(comment: Comment) {
        this.fillEntity(comment);
    }


    public toObject() {
        return { ...this };
    }

    public fillEntity(comment: Comment) {
        this.id = comment.id;
        this.content = comment.content;
        this.createdAt = comment.createdAt || new Date();
        this.updatedAt = comment.updatedAt || new Date();
        this.userId = comment.userId;
        this.publicationId = comment.publicationId;
    }
}
