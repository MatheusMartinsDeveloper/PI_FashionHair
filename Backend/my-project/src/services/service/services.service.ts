import { Injectable } from "@nestjs/common";
import { Prisma, Service } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateServicesDto } from "./dto/create-service.dto";

@Injectable()
export class ServicesService {
    constructor(private prisma: PrismaService) {}

    async createServices(createServicesDto: CreateServicesDto): Promise<Service> {
        const { images, name, description, time, date, price, note, reviews, benefits, duration } = createServicesDto;

        const createServicesData: Prisma.ServiceCreateInput = {
            images: {
                create: images.map((url) => ({ url }))
            },
            name,
            description,
            time,
            date,
            price,
            note,
            reviews,
            benefits,
            duration
        };

        return this.prisma.service.create({ data: createServicesData });
    }

    async getAllServices() {
        return this.prisma.service.findMany(
            { include: { 
                images: true 
            } 
        });
    }
}