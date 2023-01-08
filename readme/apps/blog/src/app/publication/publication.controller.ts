import { Body, Post, Controller, Delete, Param, Get, Patch, HttpCode, HttpStatus, Logger, UsePipes } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { fillObject } from '@readme/core';
import { PublicationService } from './publication.service';
import { CreatePublicationDto } from './dto/create-publication.dto';
import { UpdatePublicationDto } from './dto/update-publication.dto';
import { PublicationHandleMessages } from './publication.constant';
import { PublicationRto } from './rto/publication.rto';
import { DetailedPublicationRto } from './rto/detailed-publication.rto';
import { PublicationValidationPipe } from './validation/publication-validation.pipe';
import contentValidationSchema from './validation/content-validation.schema'

@Controller('publications')
export class PublicationController {
  constructor(
    private readonly publicationService: PublicationService,
    private readonly logger: Logger,
  ) { }

  @Post('/')
  @HttpCode(HttpStatus.CREATED)
  @ApiResponse({
    type: CreatePublicationDto,
    status: HttpStatus.CREATED,
    description: PublicationHandleMessages.CREATED,
  })
  @UsePipes(new PublicationValidationPipe(contentValidationSchema))
  async create(@Body() dto: CreatePublicationDto) {
    const newPublication = await this.publicationService.createPublication({ ...dto });
    this.logger.log(`New publication created: ${newPublication}`);
    return fillObject(PublicationRto, newPublication);
  }

  @Patch('/:id')
  async update(@Param('id') id: string, @Body() dto: UpdatePublicationDto) {
    const publicationId = parseInt(id, 10);
    const updatedComment = await this.publicationService.updatePublication(publicationId, dto);
    return fillObject(PublicationRto, updatedComment);
  }

  @Get('/:id')
  async show(@Param('id') id: string) {
    const publicationId = parseInt(id, 10);
    const existComment = await this.publicationService.getPublication(publicationId);
    return fillObject(DetailedPublicationRto, existComment);
  }

  @Get('/')
  async index() {
    const publications = await this.publicationService.getPublications();
    return fillObject(PublicationRto, publications);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: PublicationHandleMessages.DELETED,
  })
  async destroy(@Param('id') id: string) {
    const publicationId = parseInt(id, 10);
    this.publicationService.deletePublication(publicationId);

  }
}
