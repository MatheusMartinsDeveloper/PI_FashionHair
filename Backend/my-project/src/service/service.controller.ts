import { Controller, Body, Param, Post, Get } from "@nestjs/common";
import { ServiceService } from "./service.service";
import { CreateServiceDto } from "./dto/create-service.dto";

@Controller("service")
export class ServiceController {
    constructor(private readonly serviceService: ServiceService) {}

    @Post("createService")
    async create(@Body() createServiceDto: CreateServiceDto) {
        return this.serviceService.createService(createServiceDto);
    }

    @Get("getAllServices")
    async getAll() {
        return this.serviceService.getAllServices();
    }

    @Get(`details/:id`)
    async getOne(@Param("id") id: string) {
        return this.serviceService.getService(id);
    }
}