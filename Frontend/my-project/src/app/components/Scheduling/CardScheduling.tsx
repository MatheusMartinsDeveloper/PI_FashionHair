"use client"
import { useState, useEffect, useRef } from "react";
import { useParams } from "next/navigation";
import { Stepper, StepperRefAttributes } from "primereact/stepper";
import { StepperPanel } from "primereact/stepperpanel";
import { InputText } from "primereact/inputtext";
import { InputMask } from "primereact/inputmask";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";
import { useForm, Controller } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "@clerk/nextjs";
import axios from "axios";

type Image = {
    url: string;
}

type Benefits = {
    benefits: string;
}

type Service = {
    images: Image[];
    name: string;
    description: string;
    time: string;
    date: string;
    price: string;
    note: string;
    reviews: string;
    benefits: Benefits[];
    duration: string;
}

export default function CardScheduling() {
    const stepperRef = useRef<StepperRefAttributes | null>(null);
    const [service, setService] = useState<Service | null>(null);
    const { id } = useParams();
    const { userId } = useAuth();
    
    const schemaZodValidation = z.object({
        fullName: z.string().min(5, { message: "O nome não pode ser muito curto!" }).max(25, { message: "O nome não pode ser muito grande!" }),
        email: z.string().email(),
        telephone: z.string(),
        service: z.string(),
        date: z.string(),
        time: z.string(),
        observation: z.string()
    });

    type TypeSchemaValidation = z.infer<typeof schemaZodValidation>

    const submitValues = async (data: TypeSchemaValidation) => {
        try {
            const payload = {
                ...data,
                userId
            };

            const request = await axios.post("http://localhost:3001/scheduling/createScheduling", payload)
            console.log(request);

            if (request.status === 201) window.location.href = "/"
        } catch (error: unknown) {
            throw Error(`Error in submit values!: ${error}`);
        }
    }

    const { handleSubmit, control, setValue, formState: { errors } } = useForm<TypeSchemaValidation>({
        resolver: zodResolver(schemaZodValidation),
        defaultValues: {
            fullName: "",
            email: "",
            telephone: "",
            service: "",
            date: "",
            time: "",
            observation: ""
        }
    });

    useEffect(() => {
        const request = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/service/details/${id}`)
                const serviceData = response.data;
                
                setService(serviceData);

                setValue("service", serviceData.name);
            } catch (error) {
                throw Error(`Error in request: ${error}`);
            }
        }

        request();
    }, [id, setValue]);

    useEffect(() => {
        console.log(service);
    }, [service]);

    return (
        <form className="flex w-full" onSubmit={handleSubmit(submitValues)}>
            <div className="flex justify-center w-full">
                <Stepper ref={stepperRef}>
                        <StepperPanel header="Dados Pessoais">
                            <div className="flex flex-col gap-10 pt-10 pl-10 w-full">
                                <div className="flex flex-col w-[40%]">
                                    <label className="text-CinzaEscuro text-lg font-Lato font-medium" htmlFor="fullName">Nome Completo: <span className="text-red-500">*</span></label>
                                    <Controller
                                        name="fullName"
                                        control={control}
                                        render={({ field }) => (
                                            <InputText 
                                                className="border-2 border-CinzaClaro rounded-md p-2 w-full hover:border-Coral focus:border-Coral outline-none placeholder:text-sm"
                                                id="fullName"
                                                { ...field }
                                                placeholder="Digite nome completo:"
                                            />
                                        )}
                                    />
                                    { errors.fullName && ( <span>{errors.fullName.message}</span> ) }
                                </div>
                                <div className="flex flex-col w-[40%]">
                                    <label className="text-CinzaEscuro text-lg font-Lato font-medium" htmlFor="email">Email: <span className="text-red-500">*</span></label>
                                    <Controller
                                        name="email"
                                        control={control}
                                        render={({ field }) => (
                                            <InputText 
                                                className="border-2 border-CinzaClaro rounded-md p-2 w-full hover:border-Coral focus:border-Coral outline-none placeholder:text-sm"
                                                id="email"
                                                { ...field }
                                                placeholder="Digite seu e-mail:"
                                            />
                                        )}
                                    />
                                </div>
                                <div className="flex flex-col w-[40%]">
                                    <label className="text-CinzaEscuro text-lg font-Lato font-medium" htmlFor="telephone">Telefone: <span className="text-red-500">*</span></label>
                                    <Controller
                                        name="telephone"
                                        control={control}
                                        render={({ field }) => (
                                            <InputMask 
                                                className="border-2 border-CinzaClaro rounded-md p-2 w-full hover:border-Coral focus:border-Coral outline-none placeholder:text-sm"
                                                id="telephone"
                                                { ...field }
                                                mask="(99) 99999-9999"
                                                placeholder="Digite seu telefone:"
                                            />
                                        )}
                                    />
                                </div>
                                <div className="flex justify-end w-[90%]">
                                    <Button
                                        onClick={() => stepperRef.current?.nextCallback()}
                                        className="text-Branco text-sm uppercase font-Poppins font-medium bg-Coral rounded-md py-3 px-5 w-[25%] hover:bg-CoralEscuro group p-button-icon"
                                        label="Próximo"
                                        iconPos="right"
                                        icon={`pi pi-arrow-up-right`}
                                        type="button"
                                    />
                                </div>
                            </div>
                        </StepperPanel>
                        <StepperPanel header="Dados Serviço">
                            <div className="flex flex-col gap-10 pt-10 pl-10 w-full">
                                <div className="flex flex-col w-[40%]">
                                    <label className="text-CinzaEscuro text-lg font-Lato font-medium" htmlFor="service">Serviço: <span className="text-red-500">*</span></label>
                                    <Controller
                                        name="service"
                                        control={control}
                                        render={({ field }) => (
                                            <InputText 
                                                className="border-2 border-CinzaClaro rounded-md p-2 w-full hover:border-Coral focus:border-Coral outline-none placeholder:text-sm"
                                                id="service"
                                                { ...field }
                                                readOnly
                                            />
                                        )}
                                    />
                                </div>
                                <div className="flex flex-col w-[40%]">
                                    <label className="text-CinzaEscuro text-lg font-Lato font-medium" htmlFor="date">Data: <span className="text-red-500">*</span></label>
                                    <Controller
                                        name="date"
                                        control={control}
                                        render={({ field }) => (
                                            <InputMask
                                                className="border-2 border-CinzaClaro rounded-md p-2 w-full hover:border-Coral focus:border-Coral outline-none placeholder:text-sm"
                                                id="date"
                                                { ...field }
                                                mask="99/99/9999"
                                                slotChar="dd/mm/aaaa"
                                                placeholder="Digite a data:"
                                            />
                                        )}
                                    />
                                </div>
                                <div className="flex flex-col w-[40%]">
                                    <label className="text-CinzaEscuro text-lg font-Lato font-medium" htmlFor="time">Horário: <span className="text-red-500">*</span></label>
                                    <Controller
                                        name="time"
                                        control={control}
                                        render={({ field }) => (
                                            <InputMask 
                                                className="border-2 border-CinzaClaro rounded-md p-2 w-full hover:border-Coral focus:border-Coral outline-none placeholder:text-sm"
                                                id="time"
                                                { ...field }
                                                mask="99:99"
                                                placeholder="Digite seu horário:"
                                            />
                                        )}
                                    />
                                </div>
                                <div className="flex flex-col w-[40%]">
                                    <label className="text-CinzaEscuro text-lg font-Lato font-medium" htmlFor="observation">Observação:</label>
                                    <Controller
                                        name="observation"
                                        control={control}
                                        render={({ field }) => (
                                            <InputTextarea 
                                                className="border-2 border-CinzaClaro rounded-md p-2 w-full hover:border-Coral focus:border-Coral outline-none placeholder:text-sm"
                                                id="observation"
                                                { ...field }
                                                autoResize
                                                rows={3}
                                                cols={10}
                                            />
                                        )}
                                    />
                                </div>
                                <div className="flex justify-between w-[90%]">
                                    <Button
                                        onClick={() => stepperRef.current?.prevCallback()}
                                        className="text-Branco text-sm uppercase font-Poppins font-medium bg-Coral rounded-md py-3 px-5 w-[25%] hover:bg-CoralEscuro group custom-icon-left"
                                        label="Voltar"
                                        iconPos="left"
                                        icon={`pi pi-arrow-up-left`}
                                        type="button"
                                    />
                                    <Button
                                        onClick={() => stepperRef.current?.nextCallback()}
                                        className="text-Branco text-sm uppercase font-Poppins font-medium bg-Coral rounded-md py-3 px-5 w-[25%] hover:bg-CoralEscuro group p-button-icon"
                                        label="Próximo"
                                        iconPos="right"
                                        icon={`pi pi-arrow-up-right`}
                                        type="button"
                                    />
                                </div>
                            </div>
                        </StepperPanel>
                        <StepperPanel header="Confirmação">
                            <div className="flex flex-col gap-10 pt-10 pl-10 w-full">
                                <div className="flex flex-col w-[40%]">
                                    <label className="text-CinzaEscuro text-lg font-Lato font-medium" htmlFor="fullName">Nome Completo: <span className="text-red-500">*</span></label>
                                    <Controller
                                        name="fullName"
                                        control={control}
                                        render={({ field }) => (
                                            <InputText 
                                                className="border-2 border-CinzaClaro rounded-md p-2 w-full hover:border-Coral focus:border-Coral outline-none placeholder:text-sm"
                                                id="fullName"
                                                { ...field }
                                                placeholder="Digite nome completo:"
                                            />
                                        )}
                                    />
                                    { errors.fullName && ( <span>{errors.fullName.message}</span> ) }
                                </div>
                                <div className="flex flex-col w-[40%]">
                                    <label className="text-CinzaEscuro text-lg font-Lato font-medium" htmlFor="email">Email: <span className="text-red-500">*</span></label>
                                    <Controller
                                        name="email"
                                        control={control}
                                        render={({ field }) => (
                                            <InputText 
                                                className="border-2 border-CinzaClaro rounded-md p-2 w-full hover:border-Coral focus:border-Coral outline-none placeholder:text-sm"
                                                id="email"
                                                { ...field }
                                                placeholder="Digite seu e-mail:"
                                            />
                                        )}
                                    />
                                </div>
                                <div className="flex flex-col w-[40%]">
                                    <label className="text-CinzaEscuro text-lg font-Lato font-medium" htmlFor="telephone">Telefone: <span className="text-red-500">*</span></label>
                                    <Controller
                                        name="telephone"
                                        control={control}
                                        render={({ field }) => (
                                            <InputMask 
                                                className="border-2 border-CinzaClaro rounded-md p-2 w-full hover:border-Coral focus:border-Coral outline-none placeholder:text-sm"
                                                id="telephone"
                                                { ...field }
                                                mask="(99) 99999-9999"
                                                placeholder="Digite seu telefone:"
                                            />
                                        )}
                                    />
                                </div>
                                <div className="flex flex-col w-[40%]">
                                    <label className="text-CinzaEscuro text-lg font-Lato font-medium" htmlFor="service">Serviço: <span className="text-red-500">*</span></label>
                                    <Controller
                                        name="service"
                                        control={control}
                                        render={({ field }) => (
                                            <InputText 
                                                className="border-2 border-CinzaClaro rounded-md p-2 w-full hover:border-Coral focus:border-Coral outline-none placeholder:text-sm"
                                                id="service"
                                                { ...field }
                                            />
                                        )}
                                    />
                                </div>
                                <div className="flex flex-col w-[40%]">
                                    <label className="text-CinzaEscuro text-lg font-Lato font-medium" htmlFor="date">Data: <span className="text-red-500">*</span></label>
                                    <Controller
                                        name="date"
                                        control={control}
                                        render={({ field }) => (
                                            <InputMask
                                                className="border-2 border-CinzaClaro rounded-md p-2 w-full hover:border-Coral focus:border-Coral outline-none placeholder:text-sm"
                                                id="date"
                                                { ...field }
                                                mask="99/99/9999"
                                                slotChar="dd/mm/aaaa"
                                                placeholder="Digite a data:"
                                            />
                                        )}
                                    />
                                </div>
                                <div className="flex flex-col w-[40%]">
                                    <label className="text-CinzaEscuro text-lg font-Lato font-medium" htmlFor="time">Horário: <span className="text-red-500">*</span></label>
                                    <Controller
                                        name="time"
                                        control={control}
                                        render={({ field }) => (
                                            <InputMask 
                                                className="border-2 border-CinzaClaro rounded-md p-2 w-full hover:border-Coral focus:border-Coral outline-none placeholder:text-sm"
                                                id="time"
                                                { ...field }
                                                mask="99:99"
                                                placeholder="Digite seu horário:"
                                            />
                                        )}
                                    />
                                </div>
                                <div className="flex flex-col w-[40%]">
                                    <label className="text-CinzaEscuro text-lg font-Lato font-medium" htmlFor="observation">Observação:</label>
                                    <Controller
                                        name="observation"
                                        control={control}
                                        render={({ field }) => (
                                            <InputTextarea 
                                                className="border-2 border-CinzaClaro rounded-md p-2 w-full hover:border-Coral focus:border-Coral outline-none placeholder:text-sm"
                                                id="observation"
                                                { ...field }
                                                autoResize
                                                rows={3}
                                                cols={10}
                                            />
                                        )}
                                    />
                                </div>
                                <div className="flex justify-between w-[90%]">
                                    <Button
                                        onClick={() => stepperRef.current?.prevCallback()}
                                        className="text-Branco text-sm uppercase font-Poppins font-medium bg-Coral rounded-md py-3 px-5 w-[25%] hover:bg-CoralEscuro group custom-icon-left"
                                        label="Voltar"
                                        iconPos="left"
                                        icon={`pi pi-arrow-up-left`}
                                        type="button"
                                    />
                                    <Button
                                        className="text-Branco text-sm uppercase font-Poppins font-medium bg-Coral rounded-md py-3 px-5 w-[25%] hover:bg-CoralEscuro"
                                        label="Finalizar"
                                        iconPos="right"
                                        icon={`pi pi-check`}
                                        type="submit"
                                    />
                                </div>
                            </div>
                        </StepperPanel>
                </Stepper>
            </div>
        </form>
    );
}