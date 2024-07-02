'use client'

// import adminData from '@/utils/helpers/AdminData';
import styles from './DeleteBlog.module.css';

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from 'react';

const DeleteBlog = ({ id }) => {
    const router = useRouter();
    const [isadmin, setadmin] = useState(false);

    useEffect(() => {
        // adminfunc();
    }, []);

    const adminfunc = async () => {
        const temp = await adminData();
        setadmin(temp);
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