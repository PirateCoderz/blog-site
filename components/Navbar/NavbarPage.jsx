'use client'
import Link from "next/link";
import style from './NavbarPage.module.css';


const NavbarPage = ({ isOpen, toggleMenu }) => {
    return (
        <nav className={`${isOpen ? style.menuOpen : style.menuClosed} ${style.navbar}`}>
            <ul className={style.ul }>
                <li>
                    <Link href={'/'} >Home</Link>
                </li>
                <li>
                    <Link href={'/create-blog'} >Create Blog</Link>
                </li>
                <li>
                    <Link href={'/services'} >Services</Link>
                </li>
                <li>
                    <Link href={'/blogs'} >Blogs</Link>
                </li>
                <li>
                    <Link href={'/contact-us'}>Contact Us</Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavbarPage;