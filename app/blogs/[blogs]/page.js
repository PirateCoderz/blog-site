import Image from "next/image";
import styles from '../Blogs.module.css';
import HTMLReactParser from "html-react-parser";
import axios from "axios";
import UpdateBtn from "@/components/buttons/update/Update";

const Blog = async (n) => {
    const id = n.params.blogs;
    let data;

    await axios.get("http://localhost:3000/api/blogs/" + id).then((response) => {
        data = response.data.result;
        // console.log(data);
    }).catch((err) => {
        console.log(err.message);
    });

    return ( 
        <div className={styles.blogPage}>
            <h1 className={styles.heading}>{data.heading}</h1> 
            <UpdateBtn id={id} />
            {/* <button className={styles.updatebtn} id={id}>Update</button> */}
            <div className={styles.imageDiv}><Image src={`${data.featureImg}`} title={data.featureImg} height={500} width={1000} alt={data.featureImg} /></div>
            <div className={styles.contentDiv}>{HTMLReactParser(data.content)}</div>
        </div>
     );
}
 
export default Blog;