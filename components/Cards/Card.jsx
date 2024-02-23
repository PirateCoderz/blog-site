import HTMLReactParser from 'html-react-parser';
import style from './Card.module.css';
import Image from 'next/image';
import Link from 'next/link';


const Card = ({ id, image, heading, content }) => {
    return (
        <div className={style.card}>
            <div><Image src={`${image}`} width={330} height={200} alt={image} /></div>
            <div className={style.heading}><h2>{heading}</h2></div>
            <div className={style.content}>
                {HTMLReactParser(content)}
                <div className={style.overlay}></div>
            </div>
            <div className={style.buttonDiv}><Link href={"/blogs/" + id} className={style.button}>Read More</Link></div>
        </div>
    );
}

export default Card;