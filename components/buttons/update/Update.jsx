import Link from "next/link";
import styles from './Update.module.css';

const UpdateBtn = ({ id }) => {
    return ( 
    <Link href={'/update/'+id} className={styles["updatebtn"]} >Update</Link>
     );
}
 
export default UpdateBtn;