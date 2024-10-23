import CardBenefits from "./CardBenefits";

export default function SectionBenefits() {
    return (
        <section className="flex flex-col justify-center items-center gap-20 bg-CinzaClaro py-[10%] w-full">
            <h2 className="text-Coral text-4xl uppercase font-Poppins font-medium">O que você vai encontrar aqui</h2>
            <div className="flex flex-col justify-center items-center gap-10 w-[70%] h-full">
                <div className="flex justify-around items-center gap-5 w-full h-full">
                    <CardBenefits 
                        name={`Coloração`}
                        benefit={`Coloração Tradicional`} 
                        benefit2={`Mechas e Reflexos`}
                    />
                    <CardBenefits 
                        name={`Tratamentos Capilares`} 
                        benefit={`Hidratação`} 
                        benefit2={`Escova Progressiva`} 
                    />
                    <CardBenefits 
                        name={`Estética Profissional`} 
                        benefit={`Limpeza de Pele`} 
                        benefit2={`Maquiagem Profissional`} 
                    />
                </div>
                <div className="flex justify-around items-center gap-5 w-full h-full">
                    <CardBenefits 
                        name={`Unhas`}
                        benefit={`Manicure`} 
                        benefit2={`Pedicure`} 
                    />
                    <CardBenefits 
                        name={`Promoções e Descontos`}
                        benefit={`Ofertas Especiais`} 
                        benefit2={`Descontos para Clientes Recorrentes`} 
                    />
                    <CardBenefits 
                        name={`Ambiente e Comodidades`} 
                        benefit={`Ambiente Confortável`} 
                        benefit2={`WI-FI Gratuito`} 
                    />
                </div>
            </div>
        </section>
    );
}