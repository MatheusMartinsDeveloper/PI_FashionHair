import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { SchedulingModule } from './scheduling/scheduling.module';
import { SchedulingModule } from './scheduling/scheduling.module';

@Module({
  imports: [PrismaModule, SchedulingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
