'use client';

import Image from "next/image";
import NavbarPage from "./NavbarPage";
import style from './NavbarPage.module.css';
import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";
import LogoutBtn from "../buttons/LogoutBtn/LogoutBtn";

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [isadmin, setisadmin] = useState(false);

    useEffect(() => {
        adminData();
    }, []);

    
    const adminData = async () => {
        await axios.get('/api/users/admin').then((result) => {
            console.log(result.data.result.isAdmin);
            const temp = result.data.result.isAdmin;
            setisadmin(temp);
        }).catch((err) => {
            console.log("Error while calling admin api")
        });
    }
    
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    
    return (
        <header className={style.header}>
            <Image src={'/main.jpg'} width={100} height={50} priority="true" alt="Logo Image" />

            <div className={style.toggleBtn}>
                <svg onClick={toggleMenu} className={isOpen ? style.svgOpen : style.svgClosed}
                    xmlns="http://www.w3.org/2000/svg"
                    width={48}
                    height={48}
                    viewBox="0 0 24 24">
                    <path
                        fill="#fff"
                        d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
                    />
                </svg>

                <svg onClick={toggleMenu} className={isOpen ? style.svgClosed : style.svgOpen}
                    xmlns="http://www.w3.org/2000/svg"
                    width={48}
                    height={48}
                    viewBox="0 0 24 24">
                    <path fill="#fff"
                        d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z" />
                </svg>
            </div>
            {/* <NavbarPage className={style.navbar} /> */}
            <NavbarPage className={style.navbar} isOpen={isOpen} toggleMenu={toggleMenu} />

            <div className={style.extraOption}>
                <div className={style.callOption}>
                    <span className={style.callOptionText}>Call For Appointment</span>
                    <span className={style.callOptionText}><Link href={'tel:+923462076541'}>+92 346 2076541</Link></span>
                </div>
                {isadmin ? <LogoutBtn /> : null}
            </div>
        </header>
    );
}

export default Navbar;