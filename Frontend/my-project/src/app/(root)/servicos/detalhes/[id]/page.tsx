"use client";

import { useParams } from "next/navigation";
import SectionServiceDetails from "@/app/components/Details/SectionServiceDetails";
import { IDSchedulingContext } from "@/app/context/IDSchedulingContext";

export default function Detalhes() {
    const { id } = useParams();

    return (
        <IDSchedulingContext.Provider value={{ id }}>
            <main className="w-full">
                <SectionServiceDetails />
            </main>
        </IDSchedulingContext.Provider>
    );
}