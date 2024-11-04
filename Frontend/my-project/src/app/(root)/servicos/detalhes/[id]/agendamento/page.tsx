"use client"
import { useParams } from "next/navigation";
import { IDSchedulingContext } from "@/app/context/IDSchedulingContext";
import SectionScheduling from "@/app/components/Scheduling/SectionScheduling";

export default function Agendamento() {
    const { id } = useParams();

    return (
        <IDSchedulingContext.Provider value={{ id }}>
            <main className="w-full">
                <SectionScheduling />
            </main>
        </IDSchedulingContext.Provider>
    );
}