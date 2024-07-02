"use client"
import axios from "axios";
import styles from './logoutbtn.module.css'
import { useRouter } from "next/navigation";
// import adminData from "@/utils/helpers/AdminData";
import { useState } from "react";

const LogoutBtn = () => {

    const router = useRouter();
    const [isadmin, setadmin] = useState(false);

    const logoutHandler = async () => {
        const res = await axios.get('/api/users/logout');
        console.log(res.data.success);
        router.push('/login');
    }
    return (
        <>
        {isadmin ? <button onClick={logoutHandler} className={styles.logoutbtn}>Logout</button>: null}
        </>
     );
}
 
export default LogoutBtn;