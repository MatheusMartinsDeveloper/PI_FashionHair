import Image from "next/image";
import ImageHero from "../../../../public/images/image-hero.png";
import Button from "../Button";
import { FaArrowRight } from "react-icons/fa6";

export default function SectionHero() {
    return (
        <section className="flex justify-around w-full h-[90vh]">
            <div className="flex justify-center items-center bg-CinzaClaro w-1/2 h-full">
                <div className="flex flex-col justify-start gap-8">
                    <span className="text-CoralVibrante text-sm uppercase font-Poppins font-bold">Seja Bem-Vindo(a) a Fashion Hair</span>
                    <h1 className="text-PretoSuave text-6xl capitalize font-Poppins font-medium">Seu Momento <br /> De Beleza <br /> Começa Aqui</h1>
                    <p className="text-PretoSuave text-base font-Lato font-medium">Bem-vindo ao Fashion Hair! Aqui, sua jornada de beleza começa. <br />
                    No Fashion Hair, cada visita é uma experiência de estilo e elegância. <br />
                    Descubra o seu momento de beleza conosco.</p>
                    <Button 
                    className={`flex justify-center items-center gap-4 text-CoralVibrante text-base text-center uppercase font-Poppins font-semibold border-2 border-CoralVibrante rounded-full py-2 w-1/2 hover:text-Branco hover:bg-CoralVibrante`}
                    href={`/`}>
                        Serviços
                        <FaArrowRight />
                    </Button>
                </div>
            </div>
            <div className="relative bg-CoralVibrante w-1/2 h-full">
                <Image 
                    className="absolute top-44 border-y-4 border-r-4 border-Branco p-5"
                    src={ImageHero}
                    alt="Image Hero"
                    quality={100}
                    width={400}
                    height={400}
                />
            </div>
        </section>
    );
}