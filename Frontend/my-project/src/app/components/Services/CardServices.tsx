import { FaRegStar } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import Image from "next/image";
import Button from "../Button";

type ImageObject = {
    url: string;
}

type Service = {
    id?: string;
    images: ImageObject[];
    name?: string;
    description?: string;
    time?: string;
    date?: string;
    price?: string;
    note?: string;
    reviews?: string;
    benefits?: string[];
}

type CardServicesProps = {
    service: Service;
}

export default function CardServices({ service }: CardServicesProps) {
    return (
        <>
            <div className="flex flex-col gap-5 bg-Branco shadow-2xl"
            key={service.id}>
                <div className="flex items-center w-full">
                    <Image className="rounded-tl-lg rounded-tr-lg w-full"
                        src={service.images[0].url} 
                        alt="Image Serviço" 
                        quality={100} 
                        width={430}
                        height={430}
                    />
                </div>
                <div className="flex flex-col pb-5">
                    <div className="flex justify-between items-center px-5">
                        <div className="flex items-center gap-3">
                            <FaRegStar className="text-CinzaEscuro text-xl" />
                            <span className="text-CinzaEscuro text-lg font-Lato font-medium">{service.note}</span>
                        </div>
                        <div>
                            <span className="text-CinzaEscuro text-lg font-Lato font-medium">{service.reviews} Reviews</span>
                        </div>
                    </div>
                    <div className="flex justify-center items-center mt-[10%] w-full">
                        <Button className="flex justify-center items-center gap-4 text-Branco text-base text-center uppercase font-Poppins font-semibold bg-Coral border-2 border-Coral rounded-lg py-2 w-[90%] group transition-all delay-75 ease-in-out hover:bg-CoralEscuro" 
                            href={`/servicos/detalhes/${service.id}`}>Detalhes <FaArrowRight className="-rotate-45 transition-all delay-75 ease-in-out group-hover:rotate-0" /></Button>
                    </div>
                </div>
            </div>
        </>
    );
}