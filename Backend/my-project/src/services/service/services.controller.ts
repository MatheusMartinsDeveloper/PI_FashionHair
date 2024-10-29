import { Controller, Body, Param, Post, Get } from "@nestjs/common";
import { ServicesService } from "./services.service";
import { CreateServicesDto } from "./dto/create-service.dto";

@Controller("services")
export class ServicesController {
    constructor(private readonly servicesService: ServicesService) {}

    @Post("createServices")
    async create(@Body() createServicesDto: CreateServicesDto) {
        return this.servicesService.createServices(createServicesDto);
    }

    @Get("getAllServices")
    async getAll() {
        return this.servicesService.getAllServices();
    }

    @Get("details/:id")
    async getById(@Param("id") id: string) {
        return this.servicesService.getServiceById(id);
    }
}