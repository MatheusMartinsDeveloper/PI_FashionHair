import { IsString, IsNotEmpty } from "class-validator";

export class CreateSchedulingDto {
    @IsString()
    @IsNotEmpty()
    fullName: string;

    @IsString()
    @IsNotEmpty()
    email: string;
    
    @IsString()
    @IsNotEmpty()
    telephone: string;
    
    @IsString()
    @IsNotEmpty()
    service: string;

    @IsString()
    @IsNotEmpty()
    date: string;

    @IsString()
    @IsNotEmpty()
    time: string;

    @IsString()
    observation: string;
}