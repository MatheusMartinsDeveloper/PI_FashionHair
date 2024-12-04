import { Injectable } from '@nestjs/common';
import { Prisma, Scheduling } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateSchedulingDto } from './dto/create-scheduling.dto';

@Injectable()
export class SchedulingService {
    constructor(private prisma: PrismaService) {}

    async createScheduling(createSchedulingDto: CreateSchedulingDto): Promise<Scheduling> {
        const { fullName, email, telephone, service, date, time, observation, userId } = createSchedulingDto;

        const parsedDate = new Date(date.split('/').reverse().join('-'));

        const schedulingNewData: Prisma.SchedulingCreateInput = {
            fullName,
            email,
            telephone,
            service,
            date: parsedDate,
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

    async findByMonthAndYear(month: number, year: number): Promise<Scheduling[]> {
        const startDate = new Date(year, month - 1, 1, 0, 0, 0, 0);
        const endDate = new Date(year, month, 0, 23, 59, 59, 999); 

        return this.prisma.scheduling.findMany({
            where: {
                date: {
                    gte: startDate,
                    lte: endDate
                }
            },
            orderBy: {
                date: 'asc'
            }
        });
    }
}