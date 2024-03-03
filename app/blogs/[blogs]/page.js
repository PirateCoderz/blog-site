import Image from "next/image";
import '../Blogs.css';
import HTMLReactParser from "html-react-parser";
import axios from "axios";
import UpdateBtn from "@/components/buttons/update/Update";

let metaTitle;


export function generateMetadata ({params}) {

    return {title:metaTitle};
}

const Blog = async (n) => {
    const id = n.params.blogs;
    let data;

    await axios.get("http://localhost:3000/api/blogs/" + id).then((response) => {
        data = response.data.result;
        metaTitle = data.heading + " | WH Tribute";
        // console.log(data);
    }).catch((err) => {
        console.log(err.message);
    });

    

    return (
        <div className={'blogPage'}>
            <div style={{position:"relative"}} >
                <h1 className={'heading'}>{data.heading}</h1>
                <UpdateBtn id={id} />
            </div>
            <div className={'imageDiv'}><Image src={`${data.featureImg}`} title={data.heading} height={500} width={1000} alt={data.featureImg} /></div>
            <div className={'contentDiv'}>{HTMLReactParser(data.content)}</div>
        </div>
    );
}

export default Blog;