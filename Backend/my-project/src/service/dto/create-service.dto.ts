import { IsString, IsArray, IsOptional, IsNotEmpty } from "class-validator";

export class CreateServiceDto {
    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    images?: string[];

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    description: string;

    @IsString()
    @IsNotEmpty()
    time: string;

    @IsString()
    @IsNotEmpty()
    date: string;

    @IsString()
    @IsNotEmpty()
    price: string;

    @IsString()
    @IsNotEmpty()
    note: string;

    @IsString()
    @IsNotEmpty()
    reviews: string;
    
    @IsArray()
    @IsString({ each: true })
    @IsNotEmpty({ each: true })
    benefits: string[];

    @IsString()
    @IsNotEmpty()
    duration: string;
}