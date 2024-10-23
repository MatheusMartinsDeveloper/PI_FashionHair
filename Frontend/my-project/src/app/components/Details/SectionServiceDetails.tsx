import { useContext } from "react";
import { IDSchedulingContext } from "@/app/context/IDSchedulingContext";
import ServiceDetails from "./ServiceDetails";

export default function SectionServiceDetails() {
    const { id } = useContext(IDSchedulingContext);

    return (
        <section>
            <ServiceDetails id={id} />
        </section>
    );
}