import { Controller, Body, Post } from '@nestjs/common';
import { SchedulingService } from './scheduling.service';
import { CreateSchedulingDto } from './dto/create-scheduling.dto';

@Controller('scheduling')
export class SchedulingController {
    constructor(private readonly schedulingService: SchedulingService) {}

    @Post("createScheduling")
    async create(@Body() createSchedulingDto: CreateSchedulingDto) {
        return this.schedulingService.createScheduling(createSchedulingDto);
    }
}