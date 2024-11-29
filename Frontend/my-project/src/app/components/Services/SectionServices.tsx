"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import CardServices from "./CardServices";

export default function SectionServices() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const getResponse = await axios.get("http://localhost:3001/service/getAllServices")
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
                    { data.length > 0 && <CardServices service={data[0]} /> }
                    { data.length > 0 && <CardServices service={data[1]} /> }
                    { data.length > 0 && <CardServices service={data[2]} /> }
                    { data.length > 0 && <CardServices service={data[3]} /> }
                    { data.length > 0 && <CardServices service={data[4]} /> }
                    { data.length > 0 && <CardServices service={data[5]} /> }
                    { data.length > 0 && <CardServices service={data[6]} /> }
                </div>
            </div>
        </section>
    );
}