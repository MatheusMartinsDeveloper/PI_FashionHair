import { FaCheckCircle } from "react-icons/fa";

type CardBenefits = {
    name: string,
    benefit: string,
    benefit2: string,
    benefit3?: string
}

export default function CardBenefits({ name, benefit, benefit2, benefit3 }: CardBenefits) {
    return (
        <div className="relative flex flex-col justify-center items-start gap-3 bg-Branco shadow-lg rounded-md p-5 w-[70%] h-full">
            <div className="flex justify-center">
                <FaCheckCircle className="absolute -top-5 left-[43%] text-Coral" size={50} />
            </div>
            <div className="flex justify-center items-center mt-[5%] w-full">
                <h3 className="text-Coral text-base uppercase font-Poppins font-semibold">{name}</h3>
            </div>
            <div className="flex flex-col justify-center items-start gap-2 text-nowrap w-full">
                <span className="text-CinzaEscuro text-base font-Lato font-medium">{benefit}</span>
                <span className="text-CinzaEscuro text-base font-Lato font-medium">{benefit2}</span>
                <span className="text-CinzaEscuro text-base font-Lato font-medium">{benefit3}</span>
            </div>
        </div>
    );
}