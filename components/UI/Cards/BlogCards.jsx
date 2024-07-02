import axios from "axios";
import Card from "./Card";
import style from './Card.module.css';

const BlogCards = async () => {

    let data;
     await axios.get('http://localhost:3000/api/blogs').then((response) => {
        data = response.data.result;
    }).catch((err) => {
        console.log(err);
    });

    return (
        <div className={style.cards}>
            {data.map((n) => {
                return (
                    <Card key={n._id} id={n._id} slug={n.slug} featureImg={n.featureImg} heading={n.heading} content={n.content} />
                )
            })
            }
        </div>
    );
}

export default BlogCards;