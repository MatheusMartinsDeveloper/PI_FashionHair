import Image, { StaticImageData } from "next/image";
import { FaRegStar } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import Button from "../Button";

type CardServicesProps = {
    image: StaticImageData,
    width?: number,
    height?: number,
    note: string,
    reviews: string,
    name: string
}

export default function CardServices({ image, width, height, name, note, reviews }: CardServicesProps) {
    return (
        <div className="shadow-xl rounded-md w-full">
            <div className="rounded-md w-full">
                <Image className={"rounded-tl-md rounded-tr-md w-full"}
                    src={image}
                    alt={`Imagem de ${name}`}
                    quality={100}
                    width={width}
                    height={height}
                />
            </div>
            <div className="flex justify-between items-center p-4 w-full">
                <span className="flex items-center gap-2 text-PretoSuave text-base font-Lato font-normal"><FaRegStar /> {note}</span>
                <span className="flex items-center gap-2 text-PretoSuave text-base font-Lato font-normal">{reviews} Reviews</span>
            </div>
            <div className="flex justify-start p-4 w-full">
                <h2 className="text-CoralVibrante text-lg font-Lato font-medium">{name}</h2>
            </div>
            <div className="w-full">
                <Button className="flex justify-center items-center gap-3 text-CoralVibrante text-base uppercase font-Poppins font-medium border-2 border-CoralVibrante rounded-md p-2 w-full hover:text-Branco hover:bg-CoralVibrante"
                href={`/`}>Detalhes <FaArrowRight /></Button>
            </div>
        </div>
    );
}