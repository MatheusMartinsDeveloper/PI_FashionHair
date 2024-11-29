import { Injectable } from "@nestjs/common";
import { Prisma, Service } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateServiceDto } from "./dto/create-service.dto";

@Injectable()
export class ServiceService {
    constructor(private prisma: PrismaService) {}

    async createService(createServiceDto: CreateServiceDto): Promise<Service> {
        const { images, name, description, time, date, price, note, reviews, benefits, duration } = createServiceDto;

        const createNewServiceData: Prisma.ServiceCreateInput = {
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
        }

        return this.prisma.service.create({ data: createNewServiceData });
    }

    async getAllServices() {
        return await this.prisma.service.findMany({
            include: {
                images: true
            }
        });
    }

    async getService(id: string) {
        return await this.prisma.service.findUnique({
            where: {
                id: id
            },
            include: {
                images: true
            }
        });
    }
}