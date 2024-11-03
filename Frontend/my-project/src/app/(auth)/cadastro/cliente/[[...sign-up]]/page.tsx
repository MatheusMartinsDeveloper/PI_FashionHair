import Image from "next/image"
import { SignUp } from "@clerk/nextjs";
import ImageSignup from "../../../../../../public/images/auth/image-signup.png";

export default function SignupClient() {
    return (
        <main className="w-full">
            <div className="flex justify-around items-center w-full h-screen">
                <div className="flex justify-center items-center bg-CinzaClaro w-1/2 h-full">
                    <SignUp signInUrl="/login/cliente" />
                </div>
                <div className="flex justify-center items-center bg-CoralEscuro w-1/2 h-full">
                    <Image 
                        className="w-[65%]"
                        src={ImageSignup}
                        alt="Imagem Login"
                        quality={100}
                    />                    
                </div>
            </div>
        </main>
    );
}