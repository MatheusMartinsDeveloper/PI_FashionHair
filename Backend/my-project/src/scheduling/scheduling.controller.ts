import { Controller, Body, Param, Query, Post, Get } from '@nestjs/common';
import { SchedulingService } from './scheduling.service';
import { Scheduling } from '@prisma/client';
import { CreateSchedulingDto } from './dto/create-scheduling.dto';

@Controller('scheduling')
export class SchedulingController {
    constructor(private readonly schedulingService: SchedulingService) {}

    @Post("createScheduling")
    async create(@Body() createSchedulingDto: CreateSchedulingDto) {
        return this.schedulingService.createScheduling(createSchedulingDto);
    }

    @Get("getAllScheduling")
    async getAll() {
        return this.schedulingService.getAllScheduling();
    }

    @Get("getScheduling/:id")
    async getOne(@Param("id") id: string) {
        return this.schedulingService.getScheduling(id);
    }

    @Get("schedulingByMonthAndYear")
    async getSchedulingByMonthAndYear(@Query("month") month: number, @Query("year") year: number): Promise<Scheduling[]> {
        return this.schedulingService.findByMonthAndYear(month, year);
    }
}