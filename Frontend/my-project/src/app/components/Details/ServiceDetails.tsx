import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { FaRegStar } from "react-icons/fa6";
import { MdFeedback } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";
import { Button } from "primereact/button";
import "swiper/css";
import "swiper/css/autoplay";
import Image from "next/image";
import dataService from "../Services/dataServices.json";

type ServiceDetailsProps = {
    id: string | string[];
}

export default function ServiceDetails({ id }: ServiceDetailsProps) {
    const service = dataService.find(indexService => indexService.id === id);

    return (
        <div className="flex justify-center items-center w-full">
            <div className="flex justify-center items-start bg-CinzaClaro shadow-2xl rounded-lg pt-5 px-5 w-[80%] h-full">
                <Swiper className="flex justify-center items-center w-[40%]"
                    modules={[Autoplay]}
                    autoplay={{
                        delay: 3500
                    }}
                    rewind={true}
                >
                    {service?.image.map(item => (
                        <SwiperSlide key={item}>
                            <Image className="rounded-lg w-[90%] h-full"
                                src={item} 
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
                            <h1 className="text-CoralVibrante text-3xl uppercase font-Poppins font-normal tracking-widest">{service?.name}</h1>
                        </div>
                        <div>
                            <p className="text-PretoSuave text-xl font-Lato font-normal">{service?.description}</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5">
                        <div className="flex items-center gap-4">
                            <span className="text-PretoSuave text-xl uppercase font-Poppins font-medium">Avaliação:</span>
                            <span className="flex items-center gap-2 text-PretoSuave text-xl font-Lato font-normal">
                                <FaRegStar className="text-CoralVibrante" /> {service?.note}
                            </span>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="text-PretoSuave text-xl uppercase font-Poppins font-medium">Reviews:</span>
                            <span className="flex items-center gap-2 text-PretoSuave text-xl font-Lato font-normal">
                                <MdFeedback className="text-CoralVibrante" /> {service?.reviews}
                            </span>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="text-PretoSuave text-xl uppercase font-Poppins font-medium">Preço:</span>
                            <span className="flex items-center gap-2 text-PretoSuave text-xl font-Lato font-normal">{service?.price}</span>
                        </div>
                    </div>
                    <div className="flex gap-5">
                        <span className="text-PretoSuave text-xl uppercase font-Poppins font-medium">Benefícios:</span>
                        <div className="flex flex-col items-start gap-2">
                            <p className="flex items-center gap-2 text-PretoSuave text-xl font-Lato font-normal">{service?.benefits[0]}</p>
                            <p className="flex items-center gap-2 text-PretoSuave text-xl font-Lato font-normal">{service?.benefits[1]}</p>
                            <p className="flex items-center gap-2 text-PretoSuave text-xl font-Lato font-normal">{service?.benefits[2]}</p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center w-full">
                        <Button className="flex justify-center items-center gap-5 bg-CoralVibrante text-Branco text-base uppercase font-Poppins font-medium rounded-lg p-3 w-full transition-all delay-75 ease-in-out hover:scale-105"                 
                        >Agendar <FaCalendarAlt />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}