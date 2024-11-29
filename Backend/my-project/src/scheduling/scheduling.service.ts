import { Injectable } from '@nestjs/common';
import { Prisma, Scheduling } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateSchedulingDto } from './dto/create-scheduling.dto';

@Injectable()
export class SchedulingService {
    constructor(private prisma: PrismaService) {}

    async createScheduling(createSchedulingDto: CreateSchedulingDto): Promise<Scheduling> {
        const { fullName, email, telephone, service, date, time, observation } = createSchedulingDto;

        const schedulingNewData: Prisma.SchedulingCreateInput = {
            fullName,
            email,
            telephone,
            service,
            date,
            time,
            observation
        };

        return this.prisma.scheduling.create({
            data: schedulingNewData
        });
    }
}