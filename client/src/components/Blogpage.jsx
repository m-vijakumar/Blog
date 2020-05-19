import React ,{useState,useEffect} from 'react'
import { useLocation, useHistory } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
const Markdown = require('react-markdown');
export default function Blogpage() {
    const [content, setContent] = useState("");
    const [postId , setPostId] = useState("");
    // const [postName , setPostName] = useState("");
    const location = useLocation();
    const history = useHistory();
    const getContent = async(e)=>{
        // e.persist();
        console.log(postId)
        const response = await fetch('/api/admin/blog/post' , {
            method: "POST",
            headers: {
            Accept: "application/json",
            "Content-Type": "application/json"

            },
            mode:"cors",
            body :JSON.stringify({postId:location.pathname.split("/")[2]})
        })
    
        const data = await response.json();
        console.log(data.data)
        setContent(data.data.content)

    }

    useEffect(()=>{
        try {
            
            // setPostId(location.pathname.split("/")[2]);
            getContent();
        } catch (error) {
            history.push("/")
        }
    },[])
    return (
        <>
        <Header />
    <div className="jumbotron" style={{backgroundColor:"transparent"}}>

        <Markdown source={content} escapeHtml={false} />
    </div>
    <Footer/>
    </>
    )
}
