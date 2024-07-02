import HTMLReactParser from 'html-react-parser';
import style from './Card.module.css';
import Image from 'next/image';
import Link from 'next/link';
import DeleteBlog from '../../buttons/delete/DeleteBlog';


const Card = ({ id, slug, featureImg, heading, content }) => {
    return (
        <div className={style.card}>
            <div><Image src={featureImg} className={style.single_image} width={330} priority={true} height={200} alt={featureImg} /></div>
            <div className={style.heading}><h2>{heading}</h2></div>
            <div className={style.content}>
                {HTMLReactParser(content)}
                <div className={style.overlay}></div>
            </div>
            <div className={style.buttonDiv}>
                <Link href={"/blogs/" + slug} className={style.button}>Read More</Link>
                <DeleteBlog id={id} />
                </div>
        </div>
    );
}

export default Card;