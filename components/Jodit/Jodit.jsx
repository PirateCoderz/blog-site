'use client'
import JoditEditor from "jodit-react";
import { useRef } from "react";


const JoditComponent = ({ setJoditContent, Joditcontent }) => {
    const editor = useRef(Joditcontent);
    // console.log(editor.current);
    // const [Joditcontent, setJoditContent] = useState(null);

    return (
        <JoditEditor
            ref={editor}
            // className={style.joditInput}
            style={{ color: '#fff' }}
            value={Joditcontent}
            onChange={setJoditContent(newContent => newContent)}
        />
    );
}

export default JoditComponent;