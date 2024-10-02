import Image, { StaticImageData } from "next/image";
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";

type CardReviewsProps = {
    image: StaticImageData,
    width?: number,
    height?: number,
    name: string,
    review: string | React.ReactNode
}

export default function CardReviews({ image, width, height, name, review }: CardReviewsProps) {
    return (
        <div className="flex justify-center items-center bg-CoralVibrante rounded-lg w-full h-full">
            <div className="flex justify-center w-1/2">
                <Image className="border-4 border-Branco rounded-full"
                    src={image}
                    alt={`Image de ${name}`}
                    quality={100}
                    width={width}
                    height={height}
                />
            </div>
            <div className="flex flex-col justify-center items-start gap-5 text-nowrap w-[60%]">
                <FaQuoteLeft className="text-Branco" size={30} />
                <h3 className="text-Branco text-lg font-Poppins font-medium">{name}</h3>
                <p className="text-Branco text-base font-Lato font-normal">{review}</p>
                <FaQuoteRight className="text-Branco" size={30} />
            </div>
        </div>
    );
}