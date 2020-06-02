import React ,{useState,useEffect} from 'react'
import { useLocation, useHistory } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
const Markdown = require('react-markdown');
export default function Blogpage(props) {
    const [content, setContent] = useState("");
    const [postId , setPostId] = useState("");
    const [isSpinner,setSpinner] =useState(true);
    // const [postName , setPostName] = useState("");
    const location = useLocation();
    const history = useHistory();
    const getContent = async(e)=>{
        // e.persist();
        // console.log(postId)
        try{
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
        // console.log(data.data)
        if (data.error === false) {
            setContent(data.data.content)
            setSpinner(false)
          } else {
        
            props.history.push("/404");
          }
          // console.log(data.data)
        }catch(err){
         
          props.history.push("/404");
        }

    }

    useEffect(()=>{

        const aboutController = new AbortController()
        try {
            
            setPostId(location.pathname.split("/")[2]);
            getContent();
            // setSpinner(false)
        } catch (error) {
            history.push("/")
        }

        return ()=>aboutController.abort()
    },[])
    if (isSpinner) {
        return (
            <div class="d-flex justify-content-center">
            <div class="spinner-border" style={{width:"4rem",height:"4rem",marginTop:"150px",marginRight:"5%"}} role="status" >
              <span class="sr-only">Loading...</span>
            </div>
          </div>
        )
    }else{
    return (
        <>
        <Header />
    <div className="jumbotron" id="blogcontainer" style={{backgroundColor:"transparent"}}>

        <Markdown source={content.toString()} escapeHtml={false} />
    </div>
    <Footer/>
    </>
    )
  }
}