import Link from "next/link";
import styles from './Update.module.css';

const UpdateBtn = async ({ id }) => {
    const isadmin = false;
    return (
        <>
            {isadmin? <Link href={'/update/' + id} className={styles["updatebtn"]} >Update</Link> : null}
        </>
    );
}

export default UpdateBtn;