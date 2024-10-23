import Image from "next/image";
import ImageHero from "../../../../public/images/image-hero.png";
import Button from "../Button";
import { FaArrowRight } from "react-icons/fa6";

export default function SectionHero() {
    return (
        <section className="flex justify-around w-full h-[90vh]">
            <div className="flex justify-center items-center bg-CinzaClaro w-1/2 h-full">
                <div className="flex flex-col justify-start gap-8">
                    <span className="text-Coral text-sm uppercase font-Poppins font-bold">Seja Bem-Vindo(a) a Fashion Hair</span>
                    <h1 className="text-CinzaEscuro text-6xl capitalize font-Poppins font-medium">Seu Momento <br /> De Beleza <br /> Começa Aqui</h1>
                    <p className="text-CinzaEscuro text-base font-Lato font-medium">Bem-vindo ao Fashion Hair! Aqui, sua jornada de beleza começa. <br />
                    No Fashion Hair, cada visita é uma experiência de estilo e elegância. <br />
                    Descubra o seu momento de beleza conosco.</p>
                    <Button 
                    className={`flex justify-center items-center gap-4 text-Branco text-base text-center uppercase font-Poppins font-semibold bg-Coral border-2 border-Coral rounded-full py-2 w-1/2 group transition-all delay-75 ease-in-out hover:bg-CoralEscuro`}
                    href={`/`}>
                        Serviços
                        <FaArrowRight className="-rotate-45 transition-all delay-75 ease-in-out group-hover:rotate-0" />
                    </Button>
                </div>
            </div>
            <div className="relative bg-Coral w-1/2 h-full">
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