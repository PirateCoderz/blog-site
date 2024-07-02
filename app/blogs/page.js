import BlogCards from "@/components/UI/Cards/BlogCards";
import './Blogs.css';

const Blogs = () => {
    return (
        <div className={'blogs'}>
            <h2 className={'heading'}>Blogs</h2>
            <BlogCards />
        </div>
    );
}

export default Blogs;


export function generateMetadata() {
    return {
        title: "Blogs | WH Tribute"
    };
}