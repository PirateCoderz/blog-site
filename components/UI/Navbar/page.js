'use client';

import Link from "next/link";

import React from "react";
import { useState } from "react";

import NavbarPage from "./NavbarPage";
import styles from './NavbarPage.module.css';
import LogoutBtn from "@/components/buttons/LogoutBtn/LogoutBtn";

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className={styles.header}>
           <div className={styles.logoDiv}>
            <Link href={'/'} className={styles.logo} >Pi<span>rate</span>&nbsp;Blogs</Link>
           </div>

            <div className={styles.toggleBtn}>
                <svg onClick={toggleMenu} className={isOpen ? styles.svgOpen : styles.svgClosed}
                    xmlns="http://www.w3.org/2000/svg"
                    width={48}
                    height={48}
                    viewBox="0 0 24 24">
                    <path
                        fill="#fff"
                        d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
                    />
                </svg>

                <svg onClick={toggleMenu} className={isOpen ? styles.svgClosed : styles.svgOpen}
                    xmlns="http://www.w3.org/2000/svg"
                    width={48}
                    height={48}
                    viewBox="0 0 24 24">
                    <path fill="#fff"
                        d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z" />
                </svg>
            </div>
            {/* <NavbarPage className={styles.navbar} /> */}
            <NavbarPage className={styles.navbar} isOpen={isOpen} toggleMenu={toggleMenu} />

            <div className={styles.extraOption}>
                <div className={styles.callOption}>
                    <span className={styles.callOptionText}>Call For Appointment</span>
                    <span className={styles.callOptionText}><Link href={'tel:+923462076541'}>+92 346 2076541</Link></span>
                </div>
                {/* <LogoutBtn /> */}
                <LogoutBtn />
            </div>
        </header>
    );
}

export default Navbar;