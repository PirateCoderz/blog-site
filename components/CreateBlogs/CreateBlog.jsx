'use client';

import JoditEditor from "jodit-react";
import { useRef, useState } from "react";
import style from './CreateBlog.module.css';
import HTMLReactParser from "html-react-parser";

const CreateBlog = () => {
    const editor = useRef(null);
    const [content, setContent] = useState('');

    return (
        <div style={{ background: '#fff', height:'90vh' }}>
            <h1 className={style.heading} >Create Your Blog Here</h1>
            
            <JoditEditor
                ref={editor}
                value={content}
                onChange={newContent => setContent(newContent)}
            />

            <div style={{padding:30}}>{HTMLReactParser(content)}</div>
        </div>
    );
}

export default CreateBlog;