"use client";

import { useState, useContext, useRef } from "react";
import { IDSchedulingContext } from "@/app/context/IDSchedulingContext";
import { Stepper } from "primereact/stepper";
import { StepperPanel } from "primereact/stepperpanel";
import { InputText } from 'primereact/inputtext';
import { InputMask } from 'primereact/inputmask';
import { Calendar } from 'primereact/calendar';
import { InputTextarea } from 'primereact/inputtextarea';      
import { Button } from 'primereact/button';
import { Formik, Form } from "formik";
import * as Yup from 'yup';
import dataService from "../Services/dataServices.json";

type InitialValues = {
    fullName: string;
    email: string;
    telephone: string;
    serviceName: string;
    date: Date | null;
    time: Date | null;
    durationEstimated: string;
    observation?: string;
}

export default function CardScheduling() {
    const stepperRef = useRef(null);
    const { id } = useContext(IDSchedulingContext);
    const [currentStep, setCurrentStep] = useState<number>(1);
    const [loading, setLoading] = useState<boolean>(false);
    const service = dataService.find(item => item.id === id);

    const handleLoading = () => {
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }

    const handlePrevStep = () => setCurrentStep(currentStep - 1);
    const handleNextStep = () => setCurrentStep(currentStep + 1);

    const initialValues: InitialValues = {
        fullName: '',
        email: '',
        telephone: '',
        serviceName: '',
        date: new Date(),
        time: new Date(),
        durationEstimated: '',
        observation: ''
    }

    const validationSchema = Yup.object({});

    return (
        <div className="flex flex-col justify-center items-center w-full">
            <Stepper ref={stepperRef} activeStep={currentStep}>
                <StepperPanel header="Dados Pessoais"></StepperPanel>
                <StepperPanel header="Dados de Serviço"></StepperPanel>
                <StepperPanel header="Confirmação"></StepperPanel>
            </Stepper>

            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values) => { console.log(values) }}
            >
                {({ values, handleChange, handleSubmit }) => (
                    <Form className="bg-Branco rounded-bl-md rounded-br-md shadow-xl w-[60%]" onSubmit={handleSubmit}>

                        {currentStep === 1 && (
                            <div className="flex flex-col gap-14 py-10 w-full">
                                <div className="flex flex-col justify-start items-start gap-5 pl-10 w-full">
                                    <div className="flex flex-col w-[50%]">
                                        <label className="text-CinzaEscuro text-base font-Lato font-medium" htmlFor="fullName">Nome Completo:</label>
                                        <InputText 
                                            className="bg-Branco border-2 border-[#D1D5DB] rounded-md shadow-md text-CinzaEscuro placeholder:text-[#9CA3AF] focus:border-Coral p-2 outline-none"
                                            id="fullName"
                                            name="fullName"
                                            value={values.fullName}
                                            onChange={handleChange}
                                            placeholder="Nome Completo"
                                        />
                                    </div>
                                    <div className="flex flex-col w-[50%]">
                                        <label className="text-CinzaEscuro text-base font-Lato font-medium" htmlFor="email">Email:</label>
                                        <InputText 
                                            className="bg-Branco border-2 border-[#D1D5DB] rounded-md shadow-md text-CinzaEscuro placeholder:text-[#9CA3AF] focus:border-Coral p-2 outline-none"
                                            id="email"
                                            name="email"
                                            value={values.email}
                                            onChange={handleChange} 
                                            placeholder="Email"
                                        />
                                    </div>
                                    <div className="flex flex-col w-[50%]">
                                        <label className="text-CinzaEscuro text-base font-Lato font-medium" htmlFor="telephone">Telefone:</label>
                                        <InputMask 
                                            className="bg-Branco border-2 border-[#D1D5DB] rounded-md shadow-md text-CinzaEscuro placeholder:text-[#9CA3AF] focus:border-Coral p-2 outline-none"
                                            id="telephone"
                                            name="telephone"
                                            value={values.telephone}
                                            onChange={handleChange}
                                            placeholder="(99) 99999-9999"
                                            mask="(99) 99999-9999"
                                        />
                                    </div>
                                </div>
                                <div className="flex justify-end w-[95%]">
                                    <div className="w-[20%]">
                                        <Button
                                            className="flex justify-center items-center text-Branco text-base uppercase font-medium bg-Coral shadow-md shadow-slate-500 rounded-md p-3 w-full group transition-all delay-75 ease-in-out hover:bg-CoralEscuro"
                                            label="Continuar"
                                            icon="pi pi-arrow-up-right"
                                            iconPos="right"
                                            onClick={handleNextStep}
                                        />
                                    </div>
                                </div>
                            </div>
                        )}

                        {currentStep === 2 && (
                            <div className="flex flex-col gap-14 py-10 w-full">
                                <div className="flex flex-col justify-start items-start gap-5 pl-10 w-full">
                                   <div className="flex flex-col w-[50%]">
                                        <label className="text-CinzaEscuro text-base font-Lato font-medium" htmlFor="serviceName">Serviço:</label>
                                        <InputText 
                                            className="bg-Branco border-2 border-[#D1D5DB] rounded-md shadow-md text-CinzaEscuro placeholder:text-[#9CA3AF] focus:border-Coral p-2 outline-none"
                                            id="serviceName"
                                            name="serviceName"
                                            value={service?.name}
                                            disabled
                                        />
                                   </div>
                                   <div className="flex flex-col w-[50%]">
                                        <label className="text-CinzaEscuro text-base font-Lato font-medium" htmlFor="date">Data:</label>
                                        <Calendar
                                            className="custom-calendar-date bg-Branco border-2 border-[#D1D5DB] rounded-md shadow-md text-CinzaEscuro placeholder:text-[#9CA3AF] focus:border-Coral p-2 outline-none"
                                            id="date"
                                            name="date"
                                            value={values.date}
                                            onChange={handleChange}
                                            minDate={new Date()}
                                            dateFormat="dd/mm/yy"
                                        />
                                   </div>
                                   <div className="flex flex-col w-[50%]">
                                        <label className="text-CinzaEscuro text-base font-Lato font-medium" htmlFor="time">Horário:</label>
                                        <Calendar
                                            className="custom-calendar-input bg-Branco border-2 border-[#D1D5DB] rounded-md shadow-md text-CinzaEscuro placeholder:text-[#9CA3AF] focus:border-Coral p-2 outline-none"
                                            id="time"
                                            name="time"
                                            value={values.time}
                                            onChange={handleChange}
                                            timeOnly
                                            stepMinute={30}
                                            minDate={new Date(new Date().setHours(8, 0))}
                                            maxDate={new Date(new Date().setHours(18, 0))}
                                        />
                                   </div>
                                   <div className="flex flex-col w-[50%]">
                                        <label className="text-CinzaEscuro text-base font-Lato font-medium" htmlFor="durationEstimated">Duração:</label>
                                        <InputText 
                                            className="bg-Branco border-2 border-[#D1D5DB] rounded-md shadow-md text-CinzaEscuro placeholder:text-[#9CA3AF] focus:border-Coral p-2 outline-none"
                                            id="durationEstimated"
                                            name="durationEstimated"
                                            value={service?.duration}
                                            disabled
                                        />
                                   </div>
                                   <div className="flex flex-col w-[50%]">
                                        <label className="text-CinzaEscuro text-base font-Lato font-medium" htmlFor="observation">Observação:</label>
                                        <InputTextarea
                                            className="bg-Branco border-2 border-[#D1D5DB] rounded-md shadow-md text-CinzaEscuro placeholder:text-[#9CA3AF] focus:border-Coral p-2 outline-none"
                                            id="observation"
                                            name="observation"
                                            value={values.observation}
                                            onChange={handleChange}
                                        />
                                    </div> 
                                </div>
                                <div className="w-full">
                                    <div className="flex items-center w-full">
                                        <div className="flex justify-start pl-10 w-full">
                                            <div className="w-[40%]">
                                                <Button
                                                    className="custom-icon-left flex justify-center items-center text-Branco text-base uppercase font-medium bg-Coral shadow-md shadow-slate-500 rounded-md p-3 w-full group transition-all delay-75 ease-in-out hover:bg-CoralEscuro"
                                                    label="Voltar"
                                                    icon="pi pi-arrow-up-left"
                                                    iconPos="left"
                                                    onClick={handlePrevStep}
                                                />
                                            </div>
                                        </div>
                                        <div className="flex justify-end pr-10 w-full">
                                            <div className="w-[40%]">
                                                <Button
                                                    className="flex justify-center items-center text-Branco text-base uppercase font-medium bg-Coral shadow-md shadow-slate-500 rounded-md p-3 w-full group transition-all delay-75 ease-in-out hover:bg-CoralEscuro"
                                                    label="Continuar"
                                                    icon="pi pi-arrow-up-right"
                                                    iconPos="right"
                                                    onClick={handleNextStep}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {currentStep === 3 && (
                            <div className="flex flex-col gap-14 py-10 w-full">
                                <div className="flex flex-col justify-start items-start gap-5 pl-10 w-full">
                                    <div className="flex flex-col w-[50%]">
                                        <label className="text-CinzaEscuro text-base font-Lato font-medium" htmlFor="fullName">Nome Completo:</label>
                                        <InputText 
                                            className="bg-Branco border-2 border-[#D1D5DB] rounded-md shadow-md text-CinzaEscuro placeholder:text-[#9CA3AF] focus:border-Coral p-2 outline-none"
                                            id="fullName"
                                            name="fullName"
                                            value={values.fullName}
                                            onChange={handleChange}
                                            placeholder="Nome Completo"
                                        />
                                    </div>
                                    <div className="flex flex-col w-[50%]">
                                        <label className="text-CinzaEscuro text-base font-Lato font-medium" htmlFor="email">Email:</label>
                                        <InputText 
                                            className="bg-Branco border-2 border-[#D1D5DB] rounded-md shadow-md text-CinzaEscuro placeholder:text-[#9CA3AF] focus:border-Coral p-2 outline-none"
                                            id="email"
                                            name="email"
                                            value={values.email}
                                            onChange={handleChange} 
                                            placeholder="Email"
                                        />
                                    </div>
                                    <div className="flex flex-col w-[50%]">
                                        <label className="text-CinzaEscuro text-base font-Lato font-medium" htmlFor="telephone">Telefone:</label>
                                        <InputMask 
                                            className="bg-Branco border-2 border-[#D1D5DB] rounded-md shadow-md text-CinzaEscuro placeholder:text-[#9CA3AF] focus:border-Coral p-2 outline-none"
                                            id="telephone"
                                            name="telephone"
                                            value={values.telephone}
                                            onChange={handleChange}
                                            placeholder="(99) 99999-9999"
                                            mask="(99) 99999-9999"
                                        />
                                    </div>
                                    <div className="flex flex-col w-[50%]">
                                        <label className="text-CinzaEscuro text-base font-Lato font-medium" htmlFor="serviceName">Serviço:</label>
                                        <InputText 
                                            className="bg-Branco border-2 border-[#D1D5DB] rounded-md shadow-md text-CinzaEscuro placeholder:text-[#9CA3AF] focus:border-Coral p-2 outline-none"
                                            id="serviceName"
                                            name="serviceName"
                                            value={service?.name}
                                            disabled
                                        />
                                   </div>
                                   <div className="flex flex-col w-[50%]">
                                        <label className="text-CinzaEscuro text-base font-Lato font-medium" htmlFor="date">Data:</label>
                                        <Calendar
                                            className="custom-calendar-date bg-Branco border-2 border-[#D1D5DB] rounded-md shadow-md text-CinzaEscuro placeholder:text-[#9CA3AF] focus:border-Coral p-2 outline-none"
                                            id="date"
                                            name="date"
                                            value={values.date}
                                            onChange={handleChange}
                                            minDate={new Date()}
                                            dateFormat="dd/mm/yy"
                                        />
                                   </div>
                                   <div className="flex flex-col w-[50%]">
                                        <label className="text-CinzaEscuro text-base font-Lato font-medium" htmlFor="time">Horário:</label>
                                        <Calendar
                                            className="custom-calendar-input bg-Branco border-2 border-[#D1D5DB] rounded-md shadow-md text-CinzaEscuro placeholder:text-[#9CA3AF] focus:border-Coral p-2 outline-none"
                                            id="time"
                                            name="time"
                                            value={values.time}
                                            onChange={handleChange}
                                            timeOnly
                                            stepMinute={30}
                                            minDate={new Date(new Date().setHours(8, 0))}
                                            maxDate={new Date(new Date().setHours(18, 0))}
                                        />
                                   </div>
                                   <div className="flex flex-col w-[50%]">
                                        <label className="text-CinzaEscuro text-base font-Lato font-medium" htmlFor="durationEstimated">Duração:</label>
                                        <InputText 
                                            className="bg-Branco border-2 border-[#D1D5DB] rounded-md shadow-md text-CinzaEscuro placeholder:text-[#9CA3AF] focus:border-Coral p-2 outline-none"
                                            id="durationEstimated"
                                            name="durationEstimated"
                                            value={service?.duration}
                                            disabled
                                        />
                                   </div>
                                   <div className="flex flex-col w-[50%]">
                                        <label className="text-CinzaEscuro text-base font-Lato font-medium" htmlFor="observation">Observação:</label>
                                        <InputTextarea
                                            className="bg-Branco border-2 border-[#D1D5DB] rounded-md shadow-md text-CinzaEscuro placeholder:text-[#9CA3AF] focus:border-Coral p-2 outline-none"
                                            id="observation"
                                            name="observation"
                                            value={values.observation}
                                            onChange={handleChange}
                                        />
                                    </div> 
                                </div>
                                <div className="w-full">
                                    <div className="flex items-center w-full">
                                        <div className="flex justify-start pl-10 w-full">
                                            <div className="w-[40%]">
                                                <Button
                                                    className="custom-icon-left flex justify-center items-center text-Branco text-base uppercase font-medium bg-Coral shadow-md shadow-slate-500 rounded-md p-3 w-full group transition-all delay-75 ease-in-out hover:bg-CoralEscuro"
                                                    label="Voltar"
                                                    icon="pi pi-arrow-up-left"
                                                    iconPos="left"
                                                    onClick={handlePrevStep}
                                                />
                                            </div>
                                        </div>
                                        <div className="flex justify-end pr-10 w-full">
                                            <div className="w-[40%]">
                                                <Button
                                                    className="flex justify-center items-center text-Branco text-base uppercase font-medium bg-Coral shadow-md shadow-slate-500 rounded-md p-3 w-full group transition-all delay-75 ease-in-out hover:bg-CoralEscuro"
                                                    label="Finalizar"
                                                    icon="pi pi-arrow-up-right"
                                                    iconPos="right"
                                                    loading={loading}
                                                    onClick={handleLoading}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </Form>
                )}
            </Formik>
        </div>
    );
}