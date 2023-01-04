import { Injectable } from '@nestjs/common';
import { Publication } from '@readme/shared-types';
import { PublicationEntity } from './publication.entity';
import { PublicationRepository } from './publication.repository';
import { CreatePublicationDto } from './dto/create-publication.dto';
import { UpdatePublicationDto } from './dto/update-publication.dto';

@Injectable()
export class PublicationService {
  constructor(
    private readonly publicationRepository: PublicationRepository,
  ) { }

  async createPublication(dto: CreatePublicationDto): Promise<Publication> {
    const publicationEntity = new PublicationEntity(dto);
    return this.publicationRepository.create(publicationEntity);
  }

  async deletePublication(id: number): Promise<void> {
    this.publicationRepository.destroy(id);
  }

  async getPublication(id: number): Promise<Publication> {
    return this.publicationRepository.findById(id);
  }

  async getPublications(): Promise<Publication[]> {
    return this.publicationRepository.find();
  }

  async updatePublication(id: number, dto: UpdatePublicationDto): Promise<Publication> {
    return this.publicationRepository.update(id, {...dto, updatedAt: new Date()});
  }

}
