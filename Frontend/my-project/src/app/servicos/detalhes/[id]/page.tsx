"use client"
import { useParams } from "next/navigation";
import ServiceDetails from "@/app/components/Details/ServiceDetails";

export default function Detalhes() {
    const { id } = useParams();

    return (
        <main className="w-full">
            <ServiceDetails id={id} />
        </main>
    );
}