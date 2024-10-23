"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import CardReviews from "./CardReviews";
import Person from "../../../../public/images/persons/image-person.png";
import Person2 from "../../../../public/images/persons/image-person2.png";
import Person3 from "../../../../public/images/persons/image-person3.png";


export default function SectionReviews() {
    return (
        <section className="relative flex flex-col justify-center items-center gap-10 bg-CinzaClaro w-full h-[95vh]">
            <div>
                <h2 className="text-Coral text-3xl uppercase font-Poppins font-medium">Feedback de nossos clientes</h2>
            </div>
            <Swiper className="flex justify-center w-[65%] h-[60%]"
                modules={[Navigation]}
                navigation={{ prevEl: '.custom-prev-button', nextEl: '.custom-next-button' }}
                slidesPerView={1}
            >
                <SwiperSlide className="flex justify-center items-center w-full h-full">
                    <CardReviews
                        image={Person}
                        width={260}
                        name={`Ana Carolina Mendes`}
                        review={<>O atendimento foi excelente desde o momento em que cheguei. <br />
                        Fiz uma hidratação e o resultado foi incrível, meus cabelos nunca estiveram tão macios. <br />
                        Com certeza voltarei! A equipe foi atenciosa e o ambiente super agradável.</>}
                    />
                </SwiperSlide>
                <SwiperSlide className="flex justify-center items-center w-full h-full">
                    <CardReviews 
                        image={Person2}
                        width={260}
                        name={`Mariana Souza`}
                        review={<>A equipe é super profissional e atenciosa, fiquei muito satisfeita com o corte que fiz. <br />
                        Além disso, o ambiente é bem acolhedor. <br />
                        Saí do salão me sentindo renovada e com certeza voltarei para experimentar outros serviços.</>}
                    />
                </SwiperSlide>
                <SwiperSlide className="flex justify-center items-center w-full h-full">
                    <CardReviews
                        image={Person3}
                        width={260}
                        name={`Larissa Oliveira`}
                        review={<>Adorei o cuidado e a dedicação da equipe com os detalhes. <br />
                        Fiz as unhas e fiquei super satisfeita com o resultado. Voltarei sempre que puder! <br />
                        O atendimento foi rápido e, mesmo assim, o resultado foi impecável.</>}
                    />
                </SwiperSlide>
            </Swiper>
            <div className="flex justify-center items-center gap-7 w-full">
                <div className="custom-prev-button"><FaArrowLeft /></div>
                <div className="custom-next-button"><FaArrowRight /></div>
            </div>
        </section>
    );
}