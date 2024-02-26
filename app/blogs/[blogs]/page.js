import Image from "next/image";
import '../Blogs.css';
import HTMLReactParser from "html-react-parser";
import axios from "axios";
import UpdateBtn from "@/components/buttons/update/Update";

let metaTitle;
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



export async function generateMetadata ({params}) {
    

    await axios.get("http://localhost:3000/api/blogs/" + params.blogs).then((response) => {
        const metaTitle = response.data.result.heading;
    }).catch((err) => {
        console.log("Error in setting Title")
        console.log(err.message);
    });
    return metaTitle;
}