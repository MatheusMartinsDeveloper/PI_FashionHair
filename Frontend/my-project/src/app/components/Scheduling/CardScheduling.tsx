"use client";
import { useState, useEffect, useRef } from "react";
import { useParams } from "next/navigation";
import { Stepper } from "primereact/stepper";
import { StepperPanel } from "primereact/stepperpanel";
import { InputText } from 'primereact/inputtext';
import { InputMask } from 'primereact/inputmask';
import { Calendar } from 'primereact/calendar';
import { InputTextarea } from 'primereact/inputtextarea';      
import { Button } from 'primereact/button';
import { Dialog } from "primereact/dialog";
import { Formik, Form, Field, ErrorMessage, FieldProps } from "formik";
import * as Yup from 'yup';
import axios from "axios";

type Image = {
    url: string;
}

type Service = {
    id: string;
    images: Image[];
    name: string;
    description: string;
    time: string;
    date: string;
    price: string;
    note: string;
    reviews: string;
    benefits: string[];
}

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
    const [service, setService] = useState<Service | null>(null);
    const { id } = useParams();
    const stepperRef = useRef(null);
    const [currentStep, setCurrentStep] = useState<number>(1);
    const [dialogConfirm, setDialogConfirm] = useState<boolean>(false);
    //const [loadingConfirm, setLoadingConfirm] = useState<boolean>(false);

    const handleSubmitValues = () => {}

    const activeDialogConfirm = () => {
        setDialogConfirm(true);
    }

    const handlePrevStep = () => setCurrentStep(currentStep - 1);
    const handleNextStep = () => setCurrentStep(currentStep + 1);

    const footerDialogConfirm = (
        <div className="flex justify-between items-center gap-5 w-full">
            <Button className="text-Branco text-sm uppercase font-Poppins font-medium bg-Coral shadow-md shadow-gray-500 rounded-md p-2.5 w-[30%] hover:bg-CoralEscuro group"
                label="Voltar" icon="pi pi-arrow-left" iconPos="left" onClick={() => setDialogConfirm(false)} />
            <Button className="text-Branco text-sm uppercase font-Poppins font-medium bg-Coral shadow-md shadow-gray-500 rounded-md p-2.5 w-[30%] hover:bg-CoralEscuro"
                label="Finalizar" icon="pi pi-check" iconPos="right" autoFocus /*loading={loadingConfirm}*/ onClick={handleSubmitValues} />
        </div>
    );

    useEffect(() => {
        const getResponse= async () => {
            try {
                const response = await axios.get(`http://localhost:3001/services/details/${id}`)
                setService(response.data);
            } catch (error) {
                console.error("The Error:", error);
            }
        }

        getResponse();
    }, [id]);

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

    const validationSchema = Yup.object().shape({
        fullName: Yup.string()
            .required("Esse campo é obrigatório!"),
        email: Yup.string()
            .email("Esse campo é do tipo email!")
            .required("Este campo é obrigatório!"),
        telephone: Yup.string()
            .required("Este campo é obrigatório!")

    });

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
                onSubmit={handleSubmitValues}
            >
                {({ values, handleChange, handleSubmit, errors, touched }) => (
                    <Form className="bg-Branco rounded-bl-md rounded-br-md shadow-xl w-[60%]" onSubmit={handleSubmit}>

                        {currentStep === 1 && (
                            <div className="flex flex-col gap-14 py-10 w-full">
                                <div className="flex flex-col justify-start items-start gap-5 pl-10 w-full">
                                    <div className="flex flex-col w-[50%]">
                                        <label className="text-CinzaEscuro text-base font-Lato font-medium" htmlFor="fullName">Nome Completo: <span className="text-red-500">*</span></label>
                                        <Field name="fullName">
                                        {({ field }: FieldProps) => (
                                            <InputText 
                                                {...field}
                                                className={`bg-Branco border-2 border-[#D1D5DB] rounded-md shadow-md text-CinzaEscuro placeholder:text-[#9CA3AF] focus:border-Coral p-2 outline-none ${touched.fullName && errors.fullName ? `border-red-500` : ``}`}
                                                id="fullName"
                                                name="fullName"
                                                value={values.fullName}
                                                onChange={handleChange}
                                                placeholder="Nome Completo"
                                            />
                                        )}
                                        </Field>
                                        <ErrorMessage
                                            className="text-sm text-red-500 font-Poppins font-medium" 
                                            name="fullName" 
                                            component={`span`} 
                                        />
                                    </div>
                                    <div className="flex flex-col w-[50%]">
                                        <label className="text-CinzaEscuro text-base font-Lato font-medium" htmlFor="email">Email: <span className="text-red-500">*</span></label>
                                        <Field name="email">
                                        {({ field }: FieldProps) => (
                                            <InputText 
                                                {...field}
                                                className={`bg-Branco border-2 border-[#D1D5DB] rounded-md shadow-md text-CinzaEscuro placeholder:text-[#9CA3AF] focus:border-Coral p-2 outline-none ${touched.email && errors.email ? `border-red-500` : ``}`}
                                                id="email"
                                                name="email"
                                                value={values.email}
                                                onChange={handleChange} 
                                                placeholder="Email"
                                            />
                                        )}
                                        </Field>
                                        <ErrorMessage
                                            className="text-sm text-red-500 font-Poppins font-medium" 
                                            name="email" 
                                            component={`span`} 
                                        />
                                    </div>
                                    <div className="flex flex-col w-[50%]">
                                        <label className="text-CinzaEscuro text-base font-Lato font-medium" htmlFor="telephone">Telefone: <span className="text-red-500">*</span></label>
                                        <Field name="telephone">
                                        {({ field }: FieldProps) => (
                                            <InputMask
                                                {...field} 
                                                className={`bg-Branco border-2 border-[#D1D5DB] rounded-md shadow-md text-CinzaEscuro placeholder:text-[#9CA3AF] focus:border-Coral p-2 outline-none ${touched.telephone && errors.telephone ? `border-red-500` : ``}`}
                                                id="telephone"
                                                name="telephone"
                                                value={values.telephone}
                                                onChange={handleChange}
                                                placeholder="(99) 99999-9999"
                                                mask="(99) 99999-9999"
                                            />
                                        )}
                                        </Field>
                                        <ErrorMessage
                                            className="text-sm text-red-500 font-Poppins font-medium" 
                                            name="telephone" 
                                            component={`span`} 
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
                                        <label className="text-CinzaEscuro text-base font-Lato font-medium" htmlFor="date">Data: <span className="text-red-500">*</span></label>
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
                                        <label className="text-CinzaEscuro text-base font-Lato font-medium" htmlFor="time">Horário: <span className="text-red-500">*</span></label>
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
                                            value={service?.time}
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
                                            disabled
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
                                            disabled
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
                                            disabled
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
                                            disabled
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
                                            disabled
                                        />
                                   </div>
                                   <div className="flex flex-col w-[50%]">
                                        <label className="text-CinzaEscuro text-base font-Lato font-medium" htmlFor="durationEstimated">Duração:</label>
                                        <InputText 
                                            className="bg-Branco border-2 border-[#D1D5DB] rounded-md shadow-md text-CinzaEscuro placeholder:text-[#9CA3AF] focus:border-Coral p-2 outline-none"
                                            id="durationEstimated"
                                            name="durationEstimated"
                                            value={service?.time}
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
                                            disabled
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
                                                    onClick={activeDialogConfirm}
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
            <div>
                <Dialog
                    className="flex flex-col gap-5 bg-Branco shadow-2xl rounded-md p-5 w-[30%] h-[20%]"
                    maskClassName="bg-gray-500 bg-opacity-50" 
                    headerClassName="text-Coral text-2xl text-center font-Poppins font-medium"
                    modal={true}
                    header={"Confirmação"} 
                    footer={footerDialogConfirm}
                    visible={dialogConfirm} 
                    draggable={false}
                    onHide={() => {if (!dialogConfirm) return; setDialogConfirm(false); }}>
                    <p className="text-CinzaEscuro text-lg text-center font-Lato font-normal">Você deseja finalizar esse agendamento?</p>
                </Dialog>
            </div>
        </div>
    );
}