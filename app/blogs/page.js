import BlogCards from "@/components/Cards/BlogCards";
import style from './Blogs.module.css';

const Blogs = () => {
    return ( 
        <div className={style.blogs}>
            <h2 className={style.heading}>Blogs</h2>
            <BlogCards />
        </div>
     );
}
 
export default Blogs;