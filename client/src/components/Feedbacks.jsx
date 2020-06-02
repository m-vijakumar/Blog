import React, { useEffect ,useState} from 'react'
// import {Link ,withRouter } from 'react-router-dom'
import AdminNavbar from './AdminNavbar'
import "./../App.css";
import Comment from './Comment';
import Footer from './Footer';

export default  function Feedbacks(props) {

    const [isSpinner1,setSpinner1] =useState(false);
    const [isSpinner,setSpinner]=useState(true);
    const [comments,setComments]=useState([]);
    const userlog= async ()=>{

    try{
    const resp = await fetch("/api/admin/auth/verfiy");
    const data = await resp.json();
    if(data.success === false){
        props.history.push("/admin/login");
     }
    }catch(e){
        console.log(e);
        props.history.push("/admin/login");
    }
    }
    const getAllCommemts = async()=>{
        const resp = await fetch("/api/admin/comments/getfeedbacks");
        const commentsData = await resp.json();
        if (commentsData.error === false) {
            await setComments(commentsData.feedbacks)
        } else {
            await setComments([])
        }
        
        // console.log(postsData)
        
    }
    const delComment = async(id) =>{
        try{
            if( !id  ){
        
              alert("Internal Error...!")
            }else{
            setSpinner1(true)
            // e.persist();
            const response = await fetch('/api/admin/comments/deletefeedback' , {
            method: "DELETE",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json"
        
            },
            mode:"cors",
            body :JSON.stringify({commentId:id})
          })
          const data = await response.json();
          // console.log(data)
          if (data.error === false) {
           
            // console.log(data.success)
            
             await getAllCommemts()
             
             setSpinner1(false)
             alert("Post Deleted...!")
            //return <Redirect to="/Dashboard" />
            
          }else{setSpinner1(false) ;alert("error"+data.msg) }
                return
            }
          }catch(e){setSpinner1(false) ;
             alert("Internal Error...")
             console.log(e)
            }
        setSpinner1(false)
          alert("Post Deleted...!")
    }

    const showComments = comments.map((comment)=>{

         return <Comment key={comment._id} comment={comment}  delComment={delComment}/>
    })

   const sp = <div className="spinner-border " role="status" id="spinner" style={{backgroundColor:"transparent"}}>
   <span className="sr-only">Loading...</span>
   </div> 
    useEffect(()=>{
        // console.log("sssss")
        userlog();
         getAllCommemts();
        
        setSpinner(false)

    },[])
    if (isSpinner) {
        return (
          <div className="d-flex justify-content-center " >
            <div className="spinner-border" role="status" id="spinner">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
        )
    }else{
    return (
        <div>
        <AdminNavbar />
        
        {isSpinner1? sp : ''}
        <div className="AdminApp">
        <h1>Welcome</h1>
            
            {showComments}
            
            
        </div>
        <Footer />
        </div>
        
    )
    }
}
