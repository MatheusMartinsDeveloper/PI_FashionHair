import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/images/logo.png";
import { FaArrowRight } from "react-icons/fa6";

export default function Header() {
    return (
        <header className="flex justify-around items-center w-full">
            <div className="flex items-center gap-5">
                <Image 
                    src={Logo}
                    alt="Logo"
                    quality={100}
                    width={100}
                    height={100}
                />
                <h1 className="text-PretoSuave text-xl font-Poppins font-medium">Carol Fashion Hair</h1>
            </div>
            <nav className="flex items-center gap-8">
                <Link href={`/`} className="text-PretoSuave text-md uppercase font-Lato font-normal hover:text-CoralVibrante">
                    Inicio
                </Link>
                <Link href={`/servicos`} className="text-PretoSuave text-md uppercase font-Lato font-normal hover:text-CoralVibrante">
                    Serviços
                </Link>
                <Link href={`/sobre`} className="text-PretoSuave text-md uppercase font-Lato font-normal hover:text-CoralVibrante">
                    Sobre
                </Link>
            </nav>
            <div className="w-[15%]">
                <Link href={`/`} className="flex justify-center items-center gap-3 border-2 border-CoralVibrante rounded-full py-2 w-full text-CoralVibrante text-base font-Poppins font-medium uppercase hover:text-Branco hover:bg-CoralVibrante">
                    Login <FaArrowRight />
                </Link>
            </div>
        </header>
    );
}