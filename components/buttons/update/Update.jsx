'use client';
import Link from "next/link";
import styles from './Update.module.css';
import { useEffect, useState } from "react";
import axios from "axios";


const UpdateBtn = ({ id }) => {

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

    return (
        <>
            {isadmin ? <Link href={'/update/' + id} className={styles["updatebtn"]} >Update</Link> : null}
        </>
    );
}

export default UpdateBtn;