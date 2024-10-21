"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import CardServices from "./CardServices";
import dataService from "./dataServices.json";

export default function SectionServices() {
    return (
        <section className="flex justify-center items-center mt-[5%] w-full">
            <Swiper className="flex justify-center items-center w-[70%]"
                modules={[Navigation]}
                navigation
            >
                <SwiperSlide className="flex justify-center items-center gap-10 w-full">
                    <CardServices service={dataService[0]} />
                    <CardServices service={dataService[1]} />
                    <CardServices service={dataService[2]} />
                </SwiperSlide>
                <SwiperSlide className="flex justify-center items-center gap-10 w-full">
                    <CardServices service={dataService[3]} />
                    <CardServices service={dataService[4]} />
                    <CardServices service={dataService[5]} />
                </SwiperSlide>
                <SwiperSlide className="flex justify-start items-center gap-10 w-full">
                    <CardServices service={dataService[6]} />
                </SwiperSlide>
            </Swiper>
        </section>
    );
}