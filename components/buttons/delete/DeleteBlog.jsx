'use client'

import styles from './DeleteBlog.module.css';

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from 'react';

const DeleteBlog = ({ id }) => {
    const router = useRouter();

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

    const deleteHandler = async () => {

        await axios.delete('http://localhost:3000/api/blogs/' + id)
            .then((result) => {
                alert('Blog is Deleted');
                router.replace('/blogs');
            }).catch((err) => {
                alert('Error Occured while Deleting Blog Data');
                console.log(err);
            });
        router.refresh();
    }

    return (
        <>
            {isadmin ? <Link href={'#'} className={styles.deletecss} onClick={deleteHandler}>Delete</Link> : null}
        </>
    );
}

export default DeleteBlog;