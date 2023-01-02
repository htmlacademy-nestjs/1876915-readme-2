import { Logger, Module } from '@nestjs/common';
import { PublicationController } from './publication.controller';
import { PublicationRepository } from './publication.repository';
import { PublicationService } from './publication.service';

@Module({
  imports: [],
  controllers: [PublicationController],
  providers: [PublicationService, PublicationRepository, Logger],
  exports: [PublicationRepository],
})
export class PublicationModule { }
