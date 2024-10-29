"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import CardServices from "./CardServices";
import dataService from "./dataServices.json";

export default function SectionServices() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const getResponse = await axios.get("http://localhost:3001/services/getAllServices")
                setData(getResponse.data);
            } catch (error) {
                console.error("The Error:", error);
            }
        }

        getData();
    }, []);

    useEffect(() => {
        console.log(data);
    }, [data]);

    return (
        <section className="flex justify-center items-center bg-CinzaClaro py-32 w-full">
            <div className="flex justify-center items-center w-full">
                <div className="grid grid-cols-3 justify-center items-center gap-10 w-[80%]">
                    <CardServices service={dataService[0]} />
                    <CardServices service={dataService[1]} />
                    <CardServices service={dataService[2]} />
                    <CardServices service={dataService[3]} />
                    <CardServices service={dataService[4]} />
                    <CardServices service={dataService[5]} />
                    <CardServices service={dataService[6]} />
                </div>
            </div>
        </section>
    );
}