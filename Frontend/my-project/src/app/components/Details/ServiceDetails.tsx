import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { FaRegStar } from "react-icons/fa6";
import { MdFeedback } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";
import "swiper/css";
import "swiper/css/autoplay";
import axios from "axios";
import { Dialog } from "primereact/dialog";
import { useUser } from "@clerk/nextjs";
import { Button } from "primereact/button";
import Image from "next/image";
import ButtonComponent from "../Button";

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

type ServiceDetailsProps = {
    id: string | string[];
}

export default function ServiceDetails({ id }: ServiceDetailsProps) {
    const [service, setService] = useState<Service | null>(null);
    const [dialogVisible, setDialogVisible] = useState(false);
    const { isSignedIn } = useUser();

    const handleDialogVisible = () => {
        if (!isSignedIn) {
            setDialogVisible(true);
        } else {
            window.location.href = `/servicos/detalhes/${id}/agendamento`
        }
    }

    const footerContent = (
        <div className="flex justify-end items-center gap-5 w-full">
            <Button className="text-Branco text-sm uppercase font-Poppins font-medium bg-Coral shadow-md shadow-gray-500 rounded-md p-2.5 w-[30%] hover:bg-CoralEscuro group"
                label="Voltar" icon="pi pi-arrow-left" iconPos="left" onClick={() => setDialogVisible(false)} />
            <Button className="text-Branco text-sm uppercase font-Poppins font-medium bg-Coral shadow-md shadow-gray-500 rounded-md p-2.5 w-[30%] hover:bg-CoralEscuro"
                label="Logar" icon="pi pi-external-link" iconPos="right" autoFocus onClick={() => window.location.href = "/login/cliente"} />
        </div>
    );

    useEffect(() => {
        const getService = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/service/details/${id}`)
                setService(response.data);
            } catch (error) {
                console.error("The Error:", error);
            }
        }

        getService();
    }, [id]);

    useEffect(() => {
        console.log(service);
    }, [service]);

    return (
        <div key={service?.id} className="flex justify-center items-center bg-CinzaClaro py-32 w-full">
            <div className="flex justify-center items-start bg-Branco shadow-2xl rounded-lg py-5 px-5 w-[80%] h-full">
                <Swiper className="flex justify-center items-center w-[40%]"
                    modules={[Autoplay]}
                    autoplay={{
                        delay: 3500
                    }}
                    rewind={true}
                >
                    {service?.images?.map((item, index) => (
                        <SwiperSlide key={index}>
                            <Image className="rounded-lg w-[90%] h-full"
                                src={item?.url} 
                                alt="Image Serviço" 
                                quality={100} 
                                width={400}
                                height={400}
                            />                
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="flex flex-col justify-around items-start pl-5 w-[60%] min-h-[35em]">
                    <div className="flex flex-col gap-5 w-full">
                        <div>
                            <h1 className="text-Coral text-3xl uppercase font-Poppins font-medium tracking-widest">{service?.name}</h1>
                        </div>
                        <div className="w-[80%]">
                            <p className="text-CinzaEscuro text-xl font-Lato font-normal">{service?.description}</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5">
                        <div className="flex items-center gap-4">
                            <span className="text-CinzaEscuro text-xl uppercase font-Poppins font-medium">Avaliação:</span>
                            <span className="flex items-center gap-2 text-CinzaEscuro text-xl font-Lato font-normal">
                                <FaRegStar className="text-Coral" /> {service?.note}
                            </span>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="text-CinzaEscuro text-xl uppercase font-Poppins font-medium">Reviews:</span>
                            <span className="flex items-center gap-2 text-CinzaEscuro text-xl font-Lato font-normal">
                                <MdFeedback className="text-Coral" /> {service?.reviews}
                            </span>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="text-CinzaEscuro text-xl uppercase font-Poppins font-medium">Preço:</span>
                            <span className="flex items-center gap-2 text-CinzaEscuro text-xl font-Lato font-normal">{service?.price}</span>
                        </div>
                    </div>
                    <div className="flex gap-5">
                        <span className="text-CinzaEscuro text-xl uppercase font-Poppins font-medium">Benefícios:</span>
                        <div className="flex flex-col items-start gap-2">
                            <p className="flex items-center gap-2 text-CinzaEscuro text-xl font-Lato font-normal">{service?.benefits[0]}</p>
                            <p className="flex items-center gap-2 text-CinzaEscuro text-xl font-Lato font-normal">{service?.benefits[1]}</p>
                            <p className="flex items-center gap-2 text-CinzaEscuro text-xl font-Lato font-normal">{service?.benefits[2]}</p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center w-full">
                        <ButtonComponent className="flex justify-center items-center gap-5 bg-Coral text-Branco text-lg uppercase font-Poppins font-medium rounded-lg p-3 w-full transition-all delay-75 ease-in-out hover:bg-CoralEscuro"                 
                            onClick={handleDialogVisible}
                            href={``}
                            //href={`/servicos/detalhes/${id}/agendamento`}
                        >Agendar <FaCalendarAlt />
                        </ButtonComponent>
                    </div>
                </div>
            </div>
            <div>
                <Dialog
                    className="flex flex-col gap-5 bg-Branco shadow-2xl rounded-md p-5 w-[30%] h-[20%]"
                    maskClassName="bg-gray-500 bg-opacity-50" 
                    headerClassName="text-CinzaEscuro text-2xl font-Poppins font-medium"
                    modal={true}
                    header={"Login"} 
                    footer={footerContent}
                    visible={dialogVisible} 
                    draggable={false}
                    onHide={() => {if (!dialogVisible) return; setDialogVisible(false); }}>
                    <p className="text-CinzaEscuro text-lg font-Lato font-normal">Você precisa estar logado para realizar um agendamento!</p>
                </Dialog>
            </div>
        </div>
    );
}