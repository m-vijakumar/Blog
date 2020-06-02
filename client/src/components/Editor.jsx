import React ,{useState,useEffect} from 'react'
const Markdown = require('react-markdown');
export default function Editor(props) {
    const [content, setContent] = useState("");

    const handleChange = (e)=>{
        setContent(e.target.value)
        props.getContent(e.target.value)
    }
    const setdata = async()=>{
        // console.log(props.setContent)
        await setContent(props.setContent)
    }
    useEffect(() => {
        const aboutController = new AbortController()
        setdata()
        return ()=>aboutController.abort()
    }, [props])
    return (
    <div>
    <h3>{props.status}</h3>
        <div className="jumbotron" style={{background:" transparent"}}>
            <textarea onChange={handleChange} defaultValue={content}rows="15" cols="15" className="form-control" 
            placeholder="Enter Html Code For Your Blog Page bootstrap 4.4.1 already addeed use 4.4.1 
             https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"></textarea>
        </div>

        <div className="jumbotron" id="blogcontainer" style={{background:" transparent",border:"1px solid black"}}>
        <Markdown source={content.toString()} escapeHtml={false} />
        </div>
    </div>
    )
}
