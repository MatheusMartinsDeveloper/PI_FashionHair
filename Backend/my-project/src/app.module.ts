import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { ServicesModule } from './services/service/services.module';
import { ImagesModule } from './services/images/images.module';

@Module({
  imports: [PrismaModule, ServicesModule, ImagesModule],
})
export class AppModule {}