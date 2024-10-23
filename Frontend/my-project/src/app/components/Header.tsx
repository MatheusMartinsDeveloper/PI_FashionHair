import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/images/logo.png";
import { FaArrowRight } from "react-icons/fa6";

export default function Header() {
    return (
        <header className="flex justify-around items-center bg-Branco w-full">
            <div className="flex items-center gap-5">
                <Image 
                    src={Logo}
                    alt="Logo"
                    quality={100}
                    width={100}
                    height={100}
                />
                <h1 className="text-CinzaEscuro text-xl font-Poppins font-medium">Carol Fashion Hair</h1>
            </div>
            <nav className="flex items-center gap-8">
                <Link href={`/`} className="text-CinzaEscuro text-md uppercase font-Lato font-normal hover:text-Coral">
                    Inicio
                </Link>
                <Link href={`/servicos`} className="text-CinzaEscuro text-md uppercase font-Lato font-normal hover:text-Coral">
                    Serviços
                </Link>
                <Link href={`/sobre`} className="text-CinzaEscuro text-md uppercase font-Lato font-normal hover:text-Coral">
                    Sobre
                </Link>
            </nav>
            <div className="w-[15%]">
                <Link href={`/login`} className="flex justify-center items-center gap-3 border-2 border-Coral rounded-full bg-Coral py-2 w-full text-Branco text-base font-Poppins font-medium uppercase group transition-all delay-75 ease-in-out hover:bg-CoralEscuro">
                    Login <FaArrowRight className="-rotate-45 transition-all delay-75 ease-in-out group-hover:rotate-0" />
                </Link>
            </div>
        </header>
    );
}