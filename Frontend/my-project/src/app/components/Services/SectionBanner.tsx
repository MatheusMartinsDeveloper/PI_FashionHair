"use client"
import Image from "next/image";
import ImageHairstyle from "../../../../public/images/Hairs/image-hairstyle.png";
import ImageMakeup from "../../../../public/images/Makeups/image-makeup.png";
import ImageNail from "../../../../public/images/Nails/image-nails.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css"
import "swiper/css/effect-fade";

export default function SectionBanner() {
    return (
        <section className="w-full h-[70vh]">
            <Swiper className="relative bg-cover bg-center z-0 w-full h-full"
                modules={[Autoplay, EffectFade]}
                autoplay={{ delay: 3000 }}
            >
                <SwiperSlide className="bg-cover bg-center w-full h-full">
                    <Image 
                        className="bg-cover bg-center object-cover w-full h-full" 
                        src={ImageHairstyle} 
                        alt="Imagem Penteado" 
                        quality={100} 
                    />
                </SwiperSlide>
                <SwiperSlide className="bg-cover bg-center w-full h-full">
                    <Image 
                        className="bg-cover bg-center object-cover w-full h-full" 
                        src={ImageMakeup} 
                        alt="Imagem Maquiagem" 
                        quality={100} 
                    />
                </SwiperSlide>
                <SwiperSlide className="bg-cover bg-center w-full h-full">
                    <Image 
                        className=" bg-cover bg-center object-cover w-full h-full" 
                        src={ImageNail} 
                        alt="Imagem Unhas" 
                        quality={100} 
                    />
                </SwiperSlide>
            </Swiper>
            <div className="absolute top-[40%] left-[37%] z-50 w-full">
                <h2 className="text-Branco text-5xl uppercase font-Poppins font-medium">Nossos Serviços</h2>
            </div>
        </section>
    );
}