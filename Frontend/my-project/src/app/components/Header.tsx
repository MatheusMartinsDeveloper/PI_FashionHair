"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/images/logo.png";
import { FaArrowRight } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import {  UserButton, useUser } from "@clerk/nextjs"

export default function Header() {
    const [content, setContent] = useState<boolean>(false);
    const { isSignedIn, user } = useUser();
    const href = user?.publicMetadata.role === "admin" ? "/dashboard/admin" : "/dashboard";

    return (
        <header className="flex justify-around items-center bg-Branco w-full">
            <div className="flex items-center gap-5">
                <Image 
                    src={Logo}
                    alt="Logo"
                    quality={100}
                    width={100}
                    height={100}
                />
                <h1 className="text-CinzaEscuro text-xl font-Poppins font-medium">Carol Fashion Hair</h1>
            </div>
            <nav className="flex items-center gap-8">
                <Link href={`/`} className="text-CinzaEscuro text-md uppercase font-Lato font-normal hover:text-Coral">
                    Inicio
                </Link>
                <Link href={`/servicos`} className="text-CinzaEscuro text-md uppercase font-Lato font-normal hover:text-Coral">
                    Serviços
                </Link>
                <Link href={`/sobre`} className="text-CinzaEscuro text-md uppercase font-Lato font-normal hover:text-Coral">
                    Sobre
                </Link>
            </nav>
            { isSignedIn ? (
                <>
                    <div className="flex items-center gap-5">
                        <div>
                            <span className="text-CinzaEscuro text-sm font-Poppins font-medium">{user.fullName}</span>
                        </div>
                        <div className="scale-125">
                            <UserButton>
                                <UserButton.MenuItems>
                                    <UserButton.Link
                                        label="Dashboard"
                                        labelIcon={<FaCalendarAlt />}
                                        href={href}
                                    />
                                </UserButton.MenuItems>
                            </UserButton>
                        </div>
                    </div>
                </>
            ) : (
            <div className="relative w-[15%]">
                <button onClick={() => setContent(!content)} className="flex justify-center items-center gap-3 border-2 border-Coral rounded-full bg-Coral py-2 w-full text-Branco text-base font-Poppins font-medium uppercase group transition-all delay-75 ease-in-out hover:bg-CoralEscuro">
                    Login <FaArrowRight className="-rotate-45 transition-all delay-75 ease-in-out group-hover:rotate-0" />
                </button>
                { content && (
                <div className="absolute top-14 z-50 flex flex-col justify-start bg-CinzaClaro shadow-2xl rounded-md p-5 w-full transition-all ease-in-out delay-75">
                    <Link className="flex items-center gap-2 p-2 text-CinzaEscuro text-sm font-Poppins font-normal uppercase transition-all delay-75 hover:text-CoralEscuro" 
                        href={`/login/cliente`}>
                        <FaUser />
                        Login | Cliente
                    </Link>
                    <Link className="flex items-center gap-2 p-2 text-CinzaEscuro text-sm font-Poppins font-normal uppercase transition-all delay-75 hover:text-CoralEscuro" 
                        href={`/login/admin`}>
                        <FaUserTie />
                        Login | Admin
                    </Link>
                </div>
                )}
            </div>
            )}
        </header>
    );
}