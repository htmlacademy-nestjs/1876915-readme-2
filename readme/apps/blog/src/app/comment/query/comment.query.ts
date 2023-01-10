import { IsIn, IsNumber, IsOptional } from 'class-validator';
import { Transform } from 'class-transformer';
import { DEFAULT_COMMENT_QUERY_LIMIT, DEFAULT_COMMENT_SORT_DIRECTION } from '../comment.constant';
import { ValidityMessage as VM } from '@readme/core';

export class CommentQuery {
  @IsNumber()
  @Transform(({ value }) => +value || DEFAULT_COMMENT_QUERY_LIMIT)
  @IsOptional()
  public limit?= DEFAULT_COMMENT_QUERY_LIMIT;

  @IsNumber()
  @Transform(({ value }) => +value)
  @IsOptional()
  public page?: number;

  @IsIn(['asc', 'desc'], { message: VM.IsInMessage })
  @IsOptional()
  public sortDirection?: 'desc' | 'asc' = DEFAULT_COMMENT_SORT_DIRECTION;

}
