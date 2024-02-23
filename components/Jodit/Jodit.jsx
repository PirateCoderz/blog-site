'use client'
import JoditEditor from "jodit-react";
import { useRef, useState } from "react";


const JoditComponent = ({ setJoditContent, Joditcontent}) => {
    const editor = useRef(null);
    // const [Joditcontent, setJoditContent] = useState(null);

    return ( 
        <JoditEditor
            ref={editor}
            // className={style.joditInput}
            style={{ color: '#fff' }}
            value={Joditcontent}
            onChange={newContent => setJoditContent(newContent)}
          />
     );
}
 
export default JoditComponent;