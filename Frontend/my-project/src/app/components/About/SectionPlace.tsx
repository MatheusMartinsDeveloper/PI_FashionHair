import Image from "next/image";
import imagePlace from "../../../../public/images/Places/image-place.png";
import imagePlace2 from "../../../../public/images/Places/image-place2.png";
import imagePlace3 from "../../../../public/images/Places/image-place3.png";
import imagePlace4 from "../../../../public/images/Places/image-place4.png";
import imagePlace5 from "../../../../public/images/Places/image-place5.png";
import imagePlace6 from "../../../../public/images/Places/image-place6.png";

export default function SectionPlace() {
    return (
        <section className="flex flex-col justify-center items-center gap-10 bg-CinzaClaro py-32 w-full">
            <div>
                <h2 className="text-Coral text-3xl uppercase font-Poppins font-medium">Imagens do Salão</h2>
            </div>
            <div className="grid grid-cols-3 gap-5 w-[70%]">
                <Image className="rounded-md" src={imagePlace} alt="Imagem do Salão" quality={100} />
                <Image className="rounded-md" src={imagePlace2} alt="Imagem do Salão" quality={100} />
                <Image className="rounded-md" src={imagePlace3} alt="Imagem do Salão" quality={100} />
                <Image className="rounded-md" src={imagePlace4} alt="Imagem do Salão" quality={100} />
                <Image className="rounded-md" src={imagePlace5} alt="Imagem do Salão" quality={100} />
                <Image className="rounded-md" src={imagePlace6} alt="Imagem do Salão" quality={100} />
            </div>
        </section>
    );
}