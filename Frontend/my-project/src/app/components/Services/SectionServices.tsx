"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import CardServices from "./CardServices";
import ImageLigths from "../../../../public/images/Lights/image-lights.png";
import ImagePlastic from "../../../../public/images/Plastic/image-plastic.png";
import ImagePainting from "../../../../public/images/Painting/image-painting.png";
import ImageHairstyle from "../../../../public/images/Hairs/image-hairstyle.png";
import ImageMakeup from "../../../../public/images/Makeups/image-makeup.png";
import ImageHenna from "../../../../public/images/Henna/image-henna.png";
import ImageNails from "../../../../public/images/Nails/image-nails.png";

export default function SectionServices() {
    return (
        <section className="flex justify-center items-center py-[10%] w-full">
            <Swiper className="w-[85%] mx-auto custom-swiper"
                modules={[Navigation]}
                navigation
                slidesPerView={3}
                spaceBetween={20}
            >
                <SwiperSlide className="flex justify-center items-center w-[5%]">
                    <CardServices
                        image={ImageLigths}
                        width={230}
                        height={230}
                        note={"4.5"}
                        reviews={"25"}
                        name={"Luzes"}
                    />
                </SwiperSlide>
                <SwiperSlide className="flex justify-center items-center w-[5%]">
                    <CardServices
                        image={ImagePlastic}
                        width={230}
                        height={230}
                        note={"4.5"}
                        reviews={"25"}
                        name={"Plástica"}
                    />
                </SwiperSlide>
                <SwiperSlide className="flex justify-center items-center w-[5%]">
                    <CardServices
                        image={ImagePainting}
                        width={230}
                        height={230}
                        note={"4.5"}
                        reviews={"25"}
                        name={"Pintura"}
                    />
                </SwiperSlide>
                <SwiperSlide className="flex justify-center items-center w-[5%]">
                    <CardServices
                        image={ImageHairstyle}
                        width={230}
                        height={230}
                        note={"4.5"}
                        reviews={"25"}
                        name={"Penteados"}
                    />
                </SwiperSlide>
                <SwiperSlide className="flex justify-center items-center w-[5%]">
                    <CardServices
                        image={ImageMakeup}
                        width={230}
                        height={230}
                        note={"4.5"}
                        reviews={"25"}
                        name={"Maquiagem"}
                    />
                </SwiperSlide>
                <SwiperSlide className="flex justify-center items-center w-[5%]">
                    <CardServices
                        image={ImageHenna}
                        width={230}
                        height={230}
                        note={"4.5"}
                        reviews={"25"}
                        name={"Henna"}
                    />
                </SwiperSlide>
                <SwiperSlide className="flex justify-center items-center w-[5%]">
                    <CardServices
                        image={ImageNails}
                        width={230}
                        height={230}
                        note={"4.5"}
                        reviews={"25"}
                        name={"Manicure"}
                    />
                </SwiperSlide>
            </Swiper>
        </section>
    );
}