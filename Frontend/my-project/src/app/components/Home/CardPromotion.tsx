import Image, { StaticImageData } from "next/image";

type CardPromotionProps = {
    src: StaticImageData,
    alt: string,
    quality: number,
    width?: number,
    height?: number,
    service: string,
    discount: string,
    oldprice: string,
    price: string
}

export default function CardPromotion({ src, alt, quality, width, height, service, discount, oldprice, price }: CardPromotionProps) {
    return (
        <div className="flex flex-col justify-center items-center gap-4 w-[85%]">
            <Image className="rounded-md w-full"
                src={src}
                alt={alt}
                quality={quality}
                width={width}
                height={height}
            />
            <div className="flex flex-col justify-center items-center">
                <span className="text-PretoSuave text-xl font-Poppins font-medium">{service} - {discount}% OFF</span>
                <div className="flex items-center gap-4">
                    <span className="text-PretoSuave text-base line-through font-Lato font-normal">R${oldprice}</span>
                    <span className="text-PretoSuave text-base font-Lato font-normal">agora por</span>
                    <span className="text-PretoSuave text-base font-Lato font-normal">R${price}</span>
                </div>
            </div>
        </div>
    );
}