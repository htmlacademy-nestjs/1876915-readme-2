import { Body, Post, Controller, Delete, Param, Query, HttpCode, HttpStatus, Get, Patch } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { fillObject } from '@readme/core';
import { CommentHandleMessages } from './comment.constant';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { CommentQuery } from './query/comment.query';
import { CommentRto } from './rto/comment.rto';

@Controller('comments')
export class CommentController {
  constructor(
    private readonly commentService: CommentService
  ) { }

  @Post('/')
  @HttpCode(HttpStatus.CREATED)
  @ApiResponse({
    type: () => CreateCommentDto,
    status: HttpStatus.CREATED,
    description: CommentHandleMessages.CREATED,
  })
  async create(@Body() dto: CreateCommentDto) {
    const newComment = await this.commentService.createComment({ ...dto });
    return fillObject(CommentRto, newComment);
  }

  @Patch('/:id')
  async update(@Param('id') id: number, @Body() dto: UpdateCommentDto) {
    const updatedComment = await this.commentService.updateComment(id, dto);
    return fillObject(CommentRto, updatedComment);
  }

  @Get('/:id')
  async index(@Param('id') id: number, @Query() query: CommentQuery) {
    const comments = await this.commentService.getComments(id, query);
    return fillObject(CommentRto, comments);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: CommentHandleMessages.DELETED,
  })
  async destroy(@Param('id') id: string) {
    const commentId = parseInt(id, 10);
    this.commentService.deleteComment(commentId);
  }


}
