import { Controller, Body, Post } from '@nestjs/common';
import { ImagesService } from './images.service';
import { CreateImagesDto } from './dto/create-images.dto';

@Controller('images')
export class ImagesController {
  constructor(private readonly imagesService: ImagesService) {}

  @Post('createImages')
  async create(@Body() createImagesDto: CreateImagesDto) {
    return this.imagesService.createImages(createImagesDto);
  }
}
