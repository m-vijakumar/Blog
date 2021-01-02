import React ,{useState,useEffect} from 'react'
import { useLocation, useHistory } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import '../App.css';
import { Helmet } from 'react-helmet';
import CommmentLayout from './CommentLayout';
const Markdown = require('react-markdown');
export default function Blogpage(props) {
    const [content, setContent] = useState("");
    const [postId , setPostId] = useState("");
    const [postName , setPostName] = useState("Blog");
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
            setPostName(location.pathname.split("/")[3]);
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
        <Helmet >
          <title>{postName}| Munikoti Vijaykumar</title>
          <meta name="description" content={postName} />

          <meta property="og:site_name" content="munikotivijaykumar" />
          <meta property="og:type" content="Blog" />
          <meta property="og:title" content={postName} />
          <meta name="theme-color" content="#ffffff" />   
          <meta property="og:url" content="http://munikotivijaykumar.xyz" />
          <meta name="twitter:title" content={postName}/>
          <meta name="twitter:description" content={postName} />
          <meta property="og:description" content={postName} />
        
          
    <link rel="apple-touch-icon" sizes="57x57" href="images/apple-touch-icon.png"/>
    <link rel="apple-touch-icon" sizes="60x60" href="images/apple-touch-icon.png"/>
    <link rel="apple-touch-icon" sizes="72x72" href="images/apple-touch-icon.png"/>
    <link rel="apple-touch-icon" sizes="76x76" href="images/apple-touch-icon.png"/>
    <link rel="apple-touch-icon" sizes="114x114" href="../../public/images/apple-touch-icon.png"/>
    <link rel="apple-touch-icon" sizes="120x120" href="../../public/images/apple-touch-icon.png"/>
    <link rel="apple-touch-icon" sizes="144x144" href="../../public/images/apple-touch-icon.png"/>
    <link rel="icon" type="image/png" sizes="152x152" href="images/android-chrome-512x512.png"/>
    <link rel="icon" type="image/png" sizes="192x192" href="../../public/images/android-chrome-192x192.png"/>
    
    <link rel="icon" type="image/png" sizes="32x32" href="../../public/images/favicon-32x32.png"/>
    <link rel="icon" type="image/png"  sizes="16x16" href="../../public/images/favicon-16x16.png"/>

    <link rel="manifest" href="../../public/images/site.webmanifest.json" />

        </Helmet>
        <Header />
    <div className="jumbotron" id="blogcontainer" style={{backgroundColor:"transparent"}}>

        <Markdown source={content.toString()} escapeHtml={false} />

        <br />
        <h5 className="mb-4"> Please Leave Your Comment  <i className="fas	fas fa-comment-dots ml-2"></i></h5>
        <CommmentLayout />
    </div>
    
    <Footer />
    </>
    )
  }
}