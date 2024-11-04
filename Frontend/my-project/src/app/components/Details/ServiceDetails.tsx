import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { FaRegStar } from "react-icons/fa6";
import { MdFeedback } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";
import "swiper/css";
import "swiper/css/autoplay";
import axios from "axios";
import Image from "next/image";
import Button from "../Button";

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

    useEffect(() => {
        const getService = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/services/details/${id}`)
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
                        <Button className="flex justify-center items-center gap-5 bg-Coral text-Branco text-lg uppercase font-Poppins font-medium rounded-lg p-3 w-full transition-all delay-75 ease-in-out hover:bg-CoralEscuro"                 
                            href={`/servicos/detalhes/${id}/agendamento`}
                        >Agendar <FaCalendarAlt />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}