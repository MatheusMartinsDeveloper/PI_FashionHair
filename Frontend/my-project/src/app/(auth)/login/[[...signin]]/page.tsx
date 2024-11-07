"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { SignIn } from "@clerk/nextjs";
import ImageSignin from "../../../../../public/images/auth/image-signin.png";
import ImageSigninAdmin from "../../../../../public/images/auth/image-signin-admin.png";

export default function Signin() {
    const pathName = usePathname();

    let imageSrc = ImageSignin;

    if (pathName.includes("cliente")) imageSrc = ImageSignin;
    else if (pathName.includes("admin")) imageSrc = ImageSigninAdmin;

    return (
        <main className="w-full">
            <div className="flex justify-around items-center w-full h-screen">
                <div className="flex justify-center items-center bg-CoralEscuro w-1/2 h-full">
                    <Image 
                        className="w-[65%]"
                        src={imageSrc}
                        alt="Imagem Login"
                        quality={100}
                    />                    
                </div>
                <div className="flex justify-center items-center bg-CinzaClaro w-1/2 h-full">
                    <SignIn routing="hash" signUpUrl="/cadastro/cliente" />
                </div>
            </div>
        </main>
    );
}