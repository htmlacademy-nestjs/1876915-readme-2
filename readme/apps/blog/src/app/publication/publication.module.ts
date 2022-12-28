import { Module } from '@nestjs/common';
import { PublicationController } from './publication.controller';
import { PublicationRepository } from './publication.repository';
import { PublicationService } from './publication.service';

@Module({
  controllers: [PublicationController],
  providers: [PublicationService, PublicationRepository],
})
export class PublicationModule {}
