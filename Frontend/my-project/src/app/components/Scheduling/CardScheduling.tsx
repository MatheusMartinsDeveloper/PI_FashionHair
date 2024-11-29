"use client";
import { useState, useEffect, useRef } from "react";
import { useAuth } from "@clerk/nextjs";
import { useParams } from "next/navigation";
import { Stepper } from "primereact/stepper";
import { StepperPanel } from "primereact/stepperpanel";
import { InputText } from 'primereact/inputtext';
import { InputMask } from 'primereact/inputmask';
import { InputTextarea } from 'primereact/inputtextarea';      
import { Button } from 'primereact/button';
//import { Dialog } from "primereact/dialog";
import { Formik, Form, Field, ErrorMessage, FieldProps, FormikHelpers } from "formik";
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
    service: string;
    date: string | null;
    time: string | null;
    observation?: string;
}

export default function CardScheduling() {
    const [service, setService] = useState<Service | null>(null);
    const { id } = useParams();
    const stepperRef = useRef(null);
    const [currentStep, setCurrentStep] = useState<number>(1);
    //const [dialogConfirm, setDialogConfirm] = useState<boolean>(false);
    //const [loadingConfirm, setLoadingConfirm] = useState<boolean>(false);
    const { getToken } = useAuth();
    
    const handleSubmitValues = async (values: unknown, { setSubmitting, resetForm }: FormikHelpers<InitialValues>) => {
        const token = await getToken();

        if (!token) console.log("Token not foung!");

        console.log(values);

        try {
            const response = await axios.post("http://localhost:3001/scheduling/createScheduling",
                values,
                { 
                    headers: {
                        'Content-Type': "application/json",
                        'Authorization': `Bearer ${token}`
                    } 
                }
            );
            
            console.log(response.data);
            console.log(values);
            console.log(token);
            resetForm();
        } catch (error) {
            console.error("The Error in Request POST:", error);
        } finally {
            setSubmitting(false);
        }
    }

    /*const activeDialogConfirm = () => {
        setDialogConfirm(true);
    }*/

    const handlePrevStep = () => setCurrentStep(currentStep - 1);
    const handleNextStep = () => setCurrentStep(currentStep + 1);

    /*const footerDialogConfirm = (
        <div className="flex justify-between items-center gap-5 w-full">
            <Button className="text-Branco text-sm uppercase font-Poppins font-medium bg-Coral shadow-md shadow-gray-500 rounded-md p-2.5 w-[30%] hover:bg-CoralEscuro group"
                label="Voltar" icon="pi pi-arrow-left" iconPos="left" onClick={() => setDialogConfirm(false)} 
            />
            <Button className="text-Branco text-sm uppercase font-Poppins font-medium bg-Coral shadow-md shadow-gray-500 rounded-md p-2.5 w-[30%] hover:bg-CoralEscuro"
                label="Concluir" icon="pi pi-check" iconPos="right" autoFocus loading={loadingConfirm} onClick={handleSubmitValues}
            />
        </div>
    );*/

    useEffect(() => {
        const getResponse= async () => {
            try {
                const response = await axios.get(`http://localhost:3001/services/details/${id}`)
                setService(response.data);
                console.log(response.data);
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
        service: service ? service?.name: '',
        date: '',
        time: '',
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
                {({ values, handleChange, handleSubmit, isSubmitting, errors, touched }) => (
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
                                        <label className="text-CinzaEscuro text-base font-Lato font-medium" htmlFor="service">Serviço:</label>
                                        <InputText 
                                            className="bg-Branco border-2 border-[#D1D5DB] rounded-md shadow-md text-CinzaEscuro placeholder:text-[#9CA3AF] focus:border-Coral p-2 outline-none"
                                            id="service"
                                            name="service"
                                            value={service?.name || ''}
                                            onChange={handleChange}
                                            disabled
                                        />
                                   </div>
                                   <div className="flex flex-col w-[50%]">
                                        <label className="text-CinzaEscuro text-base font-Lato font-medium" htmlFor="date">Data: <span className="text-red-500">*</span></label>
                                        <InputMask
                                            className="custom-calendar-date bg-Branco border-2 border-[#D1D5DB] rounded-md shadow-md text-CinzaEscuro placeholder:text-[#9CA3AF] focus:border-Coral p-2 outline-none"
                                            id="date"
                                            name="date"
                                            value={values.date}
                                            onChange={handleChange}
                                            mask="99/99/9999"
                                            placeholder="dd/mm/aaaa"
                                            slotChar="dd/mm/aaaa"
                                        />
                                   </div>
                                   <div className="flex flex-col w-[50%]">
                                        <label className="text-CinzaEscuro text-base font-Lato font-medium" htmlFor="time">Horário: <span className="text-red-500">*</span></label>
                                        <InputMask
                                            className="custom-calendar-input bg-Branco border-2 border-[#D1D5DB] rounded-md shadow-md text-CinzaEscuro placeholder:text-[#9CA3AF] focus:border-Coral p-2 outline-none"
                                            id="time"
                                            name="time"
                                            value={values.time}
                                            onChange={handleChange}
                                            mask="99:99"
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
                                        <label className="text-CinzaEscuro text-base font-Lato font-medium" htmlFor="service">Serviço:</label>
                                        <InputText 
                                            className="bg-Branco border-2 border-[#D1D5DB] rounded-md shadow-md text-CinzaEscuro placeholder:text-[#9CA3AF] focus:border-Coral p-2 outline-none"
                                            id="service"
                                            name="service"
                                            value={service?.name}
                                            onChange={handleChange}
                                            disabled
                                        />
                                   </div>
                                   <div className="flex flex-col w-[50%]">
                                        <label className="text-CinzaEscuro text-base font-Lato font-medium" htmlFor="date">Data:</label>
                                        <InputMask
                                            className="custom-calendar-date bg-Branco border-2 border-[#D1D5DB] rounded-md shadow-md text-CinzaEscuro placeholder:text-[#9CA3AF] focus:border-Coral p-2 outline-none"
                                            id="date"
                                            name="date"
                                            value={values.date}
                                            onChange={handleChange}
                                            mask="99/99/9999"
                                            placeholder="dd/mm/aaaa"
                                            slotChar="dd/mm/aaaa"
                                            disabled
                                        />
                                   </div>
                                   <div className="flex flex-col w-[50%]">
                                        <label className="text-CinzaEscuro text-base font-Lato font-medium" htmlFor="time">Horário:</label>
                                        <InputMask
                                            className="custom-calendar-input bg-Branco border-2 border-[#D1D5DB] rounded-md shadow-md text-CinzaEscuro placeholder:text-[#9CA3AF] focus:border-Coral p-2 outline-none"
                                            id="time"
                                            name="time"
                                            value={values.time}
                                            onChange={handleChange}
                                            mask="99:99"
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
                                                    type="submit"
                                                    label="Finalizar"
                                                    icon="pi pi-arrow-up-right"
                                                    iconPos="right"
                                                    disabled={isSubmitting}
                                                    
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
            {/*<div>
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
            </div>*/}
        </div>
    );
}