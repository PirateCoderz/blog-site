"use client"

import axios from "axios";
import styles from './logoutbtn.module.css'
import { useRouter } from "next/navigation";

const LogoutBtn = () => {
    const router = useRouter();

    const logoutHandler = async () => {
        const res = await axios.get('/api/users/logout');
        console.log(res.data.success);

        router.push('/login');
    }
    return (
        <button onClick={logoutHandler} className={styles.logoutbtn}>Logout</button>
     );
}
 
export default LogoutBtn;