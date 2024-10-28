import { Injectable } from '@nestjs/common';
import { Prisma, Images } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateImagesDto } from './dto/create-images.dto';

@Injectable()
export class ImagesService {
  constructor(private prisma: PrismaService) {}

  async createImages(createImagesDto: CreateImagesDto): Promise<Images> {
    const { url, serviceId } = createImagesDto;

    const createImagesData: Prisma.ImagesCreateInput = {
      url,
      service: {
        connect: { id: serviceId },
      },
    };

    return this.prisma.images.create({ data: createImagesData });
  }
}
