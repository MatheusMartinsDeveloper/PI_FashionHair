import { Controller, Body, Param, Post, Get } from '@nestjs/common';
import { SchedulingService } from './scheduling.service';
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
}