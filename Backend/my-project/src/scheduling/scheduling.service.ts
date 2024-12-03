import { Injectable } from '@nestjs/common';
import { Prisma, Scheduling } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateSchedulingDto } from './dto/create-scheduling.dto';

@Injectable()
export class SchedulingService {
    constructor(private prisma: PrismaService) {}

    async createScheduling(createSchedulingDto: CreateSchedulingDto): Promise<Scheduling> {
        const { fullName, email, telephone, service, date, time, observation, userId } = createSchedulingDto;

        const schedulingNewData: Prisma.SchedulingCreateInput = {
            fullName,
            email,
            telephone,
            service,
            date,
            time,
            observation,
            userId
        };

        return this.prisma.scheduling.create({
            data: schedulingNewData
        });
    }

    async getAllScheduling() {
        return this.prisma.scheduling.findMany();
    }

    async getScheduling(id: string) {
        return await this.prisma.scheduling.findUnique({
            where: {
                userId: id
            }
        });
    }
}