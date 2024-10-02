import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/images/logo.png";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

export default function Footer() {
    return (
        <footer className="flex justify-center items-center bg-Branco py-4 w-full">
            <div className="flex flex-col items-center gap-5 py-5 w-[70%]">
                <div className="flex justify-between items-center w-full">
                    <div className="flex items-center">
                        <Image 
                            src={Logo} 
                            alt="Logo" 
                            quality={100}
                            width={90}
                            height={90}
                        />
                        <h1 className="text-PretoSuave text-lg font-Poppins font-medium">Carol Fashion Hair</h1>
                    </div>
                    <div className="flex items-center gap-4">
                        <Link href={"/"} className="border-2 rounded-lg p-2 hover:border-CoralVibrante">
                            <IoLogoWhatsapp size={20} />
                        </Link>
                        <Link href={"/"} className="border-2 rounded-lg p-2 hover:border-CoralVibrante">
                            <FaFacebook size={20} />
                        </Link>
                        <Link href={"/"} className="border-2 rounded-lg p-2 hover:border-CoralVibrante">
                            <FaSquareInstagram size={20} />
                        </Link>
                    </div>
                </div>
                <div className="flex flex-grow bg-CoralVibrante w-full h-0.5"></div>
                <div className="flex justify-between w-full">
                    <div className="flex flex-col items-start gap-3">
                        <div>
                            <h1 className="text-PretoSuave text-lg uppercase font-Poppins font-medium">Navegue</h1>
                        </div>
                        <nav className="flex flex-col">
                            <Link className="text-gray-800 text-base uppercase font-Lato font-normal hover:text-CoralVibrante"
                            href={"/"}>Inicio</Link>
                            <Link className="text-gray-800 text-base uppercase font-Lato font-normal hover:text-CoralVibrante"
                            href={"/servicos"}>Serviços</Link>
                            <Link className="text-gray-800 text-base uppercase font-Lato font-normal hover:text-CoralVibrante"
                            href={"/sobre"}>Sobre</Link>
                        </nav>
                    </div>
                    <div className="flex flex-col items-start gap-3">
                        <div>
                            <h1 className="text-PretoSuave text-lg uppercase font-Poppins font-medium">Contato</h1>
                        </div>
                        <div className="flex flex-col gap-3">
                            <div className="flex gap-3">
                                <span className="text-gray-800 font-Poppins uppercase font-medium">Endereço:</span>
                                <span className="text-gray-500 text-base font-Lato font-normal">Cidade: Viradouro, Bairro: Centro <br />
                                Rua: Carlos Gomes, Número: 199A</span>
                            </div>
                            <div className="flex gap-3">
                                <span className="text-gray-800 font-Poppins uppercase font-medium">Email:</span>
                                <span className="text-gray-500 text-base font-Lato font-normal">caroltonagarcia@hotmail.com</span>
                            </div>
                            <div className="flex gap-3">
                                <span className="text-gray-800 font-Poppins uppercase font-medium">Telefone:</span>
                                <span className="text-gray-500 text-base font-Lato font-normal">(17) 99161-7285</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-start gap-3">
                        <div>
                            <h1 className="text-PretoSuave text-lg uppercase font-Poppins font-medium">Horários</h1>
                        </div>
                        <div className="flex flex-col gap-3">
                            <div className="flex gap-3">
                                <span className="text-gray-800 font-Poppins uppercase font-medium">Terça a Sexta:</span>
                                <span className="text-gray-500 text-base font-Lato font-normal">08:00hr ás 11:00hr <br /> 13:00hr ás 18:00hr</span>
                            </div>
                            <div className="flex gap-3">
                                <span className="text-gray-800 font-Poppins uppercase font-medium">Sábado:</span>
                                <span className="text-gray-500 text-base font-Lato font-normal">07:00hr ás 18:00hr</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}