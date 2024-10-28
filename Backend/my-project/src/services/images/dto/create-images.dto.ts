import { IsNotEmpty, IsString, IsInt } from "class-validator";

export class CreateImagesDto {
    @IsString()
    @IsNotEmpty()
    url: string;

    @IsInt()
    @IsNotEmpty()
    serviceId: number;
}