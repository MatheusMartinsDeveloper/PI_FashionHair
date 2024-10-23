import CardPromotion from "./CardPromotion";
import ImageHair from "../../../../public/images/Hairs/image-hairstyle.png";
import ImageMakeup from "../../../../public/images/Makeups/image-makeup.png";
import ImageNails from "../../../../public/images/Nails/image-nails.png";

export default function SectionPromotions() {
    return (
        <section className="flex flex-col items-center gap-10 bg-CinzaClaro py-[10%] w-full">
            <div>
                <h2 className="text-Coral text-4xl uppercase font-Poppins font-medium">Promoções</h2>
            </div>
            <div className="grid grid-cols-3 place-content-center place-items-center gap-5 w-full">
                <CardPromotion
                    src={ImageHair}
                    alt={`Imagem de ${ImageHair}`}
                    quality={100}
                    service="Corte de Cabelo"
                    discount="20"
                    oldprice="100"
                    price="80"
                />
                <CardPromotion
                    src={ImageMakeup}
                    alt={`Imagem de ${ImageMakeup}`}
                    quality={100}
                    service="Maquiagem"
                    discount="20"
                    oldprice="100"
                    price="80"
                />
                <CardPromotion
                    src={ImageNails}
                    alt={`Imagem de ${ImageNails}`}
                    quality={100}
                    service="Manicure"
                    discount="20"
                    oldprice="100"
                    price="80"
                />
            </div>
        </section>
    );
}