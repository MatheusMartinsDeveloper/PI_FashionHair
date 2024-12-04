"use client";
import { useState, useEffect } from "react";
import { UserButton, useUser } from "@clerk/nextjs";
import { Paginator, PaginatorPageChangeEvent } from "primereact/paginator";
//import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { InputIcon } from "primereact/inputicon";
import { IconField } from "primereact/iconfield";
import { format } from "date-fns";
import axios from "axios";

type Scheduling = {
    fullName: string;
    email: string;
    telephone: string;
    service: string;
    date: string;
    time: string;
    observation: string;
    userId: string;
}

export default function Scheduling() {
    const [services, setServices] = useState<Scheduling[]>([]);
    //const [visible, setVisible] = useState<boolean>(false);
    const [month, setMonth] = useState(new Date().getMonth() + 1);
    const [year, setYear] = useState(new Date().getFullYear());
    const { user } = useUser();

    const monthNames = [
        "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
        "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ];

    const handleOnChangePage = (event: PaginatorPageChangeEvent) => {
        const newPage = event.page;

        if (newPage > month) {
            if (month === 11) {
                setMonth(0);
                setYear(year + 1);
            } else {
                setMonth(month + 1);
            }
        } else  {
            if (month === 0) {
                setMonth(month + 1);
                setYear(year - 1);
            } else {
                setMonth(month - 1);
            }
        }
    }

    useEffect(() => {
        const request = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/scheduling/schedulingByMonthAndYear?month=${month}&year=${year}`);
                const data = await response.data;

                const formattedData = data.map((item: Scheduling) => ({
                    ...item,
                    date: format(new Date(item.date), 'dd/MM/yyyy')
                }));

                setServices(formattedData);
            } catch (error) {
                console.error(`Error in request: ${error}`);
            }
        }

        request();
    }, [month, year]);

    useEffect(() => {
        console.log(services);
    }, [services]);

    return (
        <div className="py-10 px-16 space-y-10 w-full">
            <header className="flex justify-between items-center w-full">
                <div>
                    <h2 className="text-CinzaEscuro text-2xl uppercase font-Poppins font-medium">Agendamentos</h2>
                </div>
                <div className="flex items-start gap-5">
                    <div className="flex flex-col place-items-end">
                        <h3 className="text-CinzaEscuro text-xl font-Poppins font-medium">{user?.fullName}</h3>
                        <span className="text-CinzaEscuro text-sm font-Lato font-normal">Administrador</span>
                    </div>
                    <UserButton />
                </div>
            </header>
            <div className="flex justify-between items-center w-full">
                <div>
                    <Paginator 
                        onPageChange={handleOnChangePage}
                        first={month}
                        rows={1}
                        totalRecords={12}
                        template={{ 
                            layout: "PrevPageLink CurrentPageReport NextPageLink",
                            CurrentPageReport: () => (
                                <span className="text-CinzaEscuro text-base font-Poppins font-normal px-5">{monthNames[month]}, {year}</span>
                            ) 
                        }}
                    />
                </div>
                <div>
                    <IconField className="space-x-5 bg-zinc-100 shadow-xl rounded-lg p-3" iconPosition="left" >
                        <InputIcon className="pi pi-search text-CinzaEscuro text-sm" />
                        <InputText className="text-CinzaEscuro text-sm outline-none bg-zinc-100" placeholder="Pesquisar" />
                    </IconField>
                </div>
            </div>
            <div className="flex flex-wrap gap-16 w-full">
                { services?.length > 0 ? (
                    services.map((item: Scheduling, index: number) => (
                        <div className="bg-zinc-100 shadow-2xl border-l-8 border-Coral rounded-md p-3 w-[20%]" key={index}>
                            <div>
                                <div className="flex justify-between w-full">
                                    <div className="flex flex-col gap-2">
                                        <h2 className="text-CinzaEscuro text-lg font-Poppins font-medium">{item.fullName}</h2>
                                        <span className="text-CinzaEscuro text-base font-Lato font-normal">{item.service}</span>
                                        <span className="text-CinzaEscuro text-base font-Lato font-normal">{item.date}</span>
                                    </div>
                                    <div>
                                        <Button
                                            //onClick={() => setVisible(true)}
                                            className="cursor-pointer hover:text-Coral"
                                            icon={"pi pi-ellipsis-h"} 
                                        />
                                    </div>
                                </div>
                            </div>
                            { /*<Dialog 
                                className="bg-zinc-100 shadow-lg rounded-md w-[50%] h-[50%]"
                                header={"Informação Agendamento"} 
                                visible={visible}
                                modal
                                maskClassName="bg-zinc-50 bg-opacity-10"
                                onHide={() => setVisible(false)} 
                            >
                                <div>
                                    <div>
                                        <div>
                                            <span>Nome:</span>
                                            <span>{item.fullName}</span>
                                        </div>
                                        <span></span>
                                        <span></span>
                                    </div>
                                    <div></div>
                                </div>
                            </Dialog>
                            */}
                        </div>
                    ))
                ) : null }
            </div>
        </div>
    );
}