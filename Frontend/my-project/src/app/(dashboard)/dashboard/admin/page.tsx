"use client";
import { usePathname } from "next/navigation";
import Scheduling from "@/app/components/Dashboard/Admin/Scheduling";
import ButtonComponent from "@/app/components/Button";
import { FaCalendarAlt } from "react-icons/fa";
import { MdOutlineWork } from "react-icons/md";
import { SiCashapp } from "react-icons/si";
import { IoBackspaceSharp } from "react-icons/io5";

export default function Dashboard() {
    const pathname = usePathname();
    let layout;

    if (pathname === "/dashboard/admin") layout = <Scheduling />;

    return (
        <div className="flex w-full">
            <aside className="flex justify-center items-center bg-CinzaClaro w-[15%] h-screen">
                <div className="flex flex-col justify-between items-center w-full h-[90%]">
                    <div className="flex flex-col gap-5 w-full">
                        <div className="w-full">
                            <ButtonComponent 
                                className={`flex justify-start pl-5 items-center gap-5 rounded-md py-3 cursor-pointer w-full text-CinzaEscuro text-base uppercase font-Lato font-normal delay-75 ease-in-out hover:bg-gray-300 ${pathname === "/dashboard/admin" ? "bg-gray-300" : ""}`}
                                href={``}
                            >
                                <FaCalendarAlt /> Agendamentos
                            </ButtonComponent>
                        </div>
                        <div className="w-full">
                            <ButtonComponent
                                className={`flex justify-start pl-5 items-center gap-5 rounded-md py-3 cursor-pointer w-full text-CinzaEscuro text-base uppercase font-Lato font-normal delay-75 ease-in-out hover:bg-gray-300 ${pathname === "/dashboard/admin/services" ? "bg-gray-300" : ""}`}
                                href={`/dashboard/admin/services`} 
                            >
                                <MdOutlineWork /> Serviços
                            </ButtonComponent>
                        </div>
                        <div className="w-full">
                            <ButtonComponent 
                                className={`flex justify-start pl-5 items-center gap-5 rounded-md py-3 cursor-pointer w-full text-CinzaEscuro text-base uppercase font-Lato font-normal delay-75 ease-in-out hover:bg-gray-300 ${pathname === "/dashboard/admin/finance" ? "bg-gray-300" : ""}`}
                                href={`/dashboard/admin/finance`}
                            >
                                <SiCashapp /> Finanças
                            </ButtonComponent>
                        </div>
                    </div>
                    <div className="flex justify-center w-full">
                        <ButtonComponent 
                            className="flex justify-start pl-5 items-center gap-5 bg-gray-300 rounded-md py-3 cursor-pointer w-full text-CinzaEscuro text-base uppercase font-Lato font-normal delay-75 ease-in-out hover:bg-gray-500 hover:text-Branco"
                            href={`/`}
                        >
                            <IoBackspaceSharp /> Voltar
                        </ButtonComponent>
                    </div>
                </div>
            </aside>
            <main className="bg-Branco w-full">
                {layout}
            </main>
        </div>
    );
}