import React ,{useState} from 'react'
const Markdown = require('react-markdown');
export default function Blogpage() {
    const [content, setContent] = useState("");

    const handleChange = (e)=>{
        setContent(e.target.value)
    }
    return (
    <div>
        <div>
            <textarea onChange={handleChange} rows="15" cols="15" className="form-control" 
            placeholder="Enter Html Code For Your Blog Page bootstrap 4.4.1 already addeed use 4.4.1 
             https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"></textarea>
        </div>

        <div>
        <Markdown source={content} escapeHtml={false} />
        </div>
    </div>
    )
}
