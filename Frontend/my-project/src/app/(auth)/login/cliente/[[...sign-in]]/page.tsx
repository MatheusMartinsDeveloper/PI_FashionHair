import Image from "next/image";
import { SignIn } from "@clerk/nextjs";
import ImageSignin from "../../../../../../public/images/auth/image-signin.png";

export default function SigninClient() {
    return (
        <main className="w-full">
            <div className="flex justify-around items-center w-full h-screen">
                <div className="flex justify-center items-center bg-CoralEscuro w-1/2 h-full">
                    <Image 
                        className="w-[65%]"
                        src={ImageSignin}
                        alt="Imagem Login"
                        quality={100}
                    />                    
                </div>
                <div className="flex justify-center items-center bg-CinzaClaro w-1/2 h-full">
                    <SignIn signUpUrl="/cadastro/cliente" />
                </div>
            </div>
        </main>
    );
}