import React ,{useState ,useEffect}from 'react'
import { useLocation, useHistory } from 'react-router-dom';
import AdminNavbar from './AdminNavbar';
import Footer from './Footer';
import Editor from './Editor';
export default function Update(props) {
    const [content, setContent] = useState("");
    const [postId , setPostId] = useState("");
    const [message, setMessage] = useState("");
    const [isSpinner,setSpinner] =useState(true);
    const [isSpinner1,setSpinner1] =useState(false);
    const location = useLocation();
    const history = useHistory();

    const getPostContent = async(e)=>{
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
            
            body :JSON.stringify({postId:location.pathname.split("/")[4]})
        })
    
        const data = await response.json();
        if (data.error === false) {
          setContent(data.data.content)
        } else {
          alert("error..!");
          props.history.push("/admin/dashboard");
        }
        // console.log(data.data)
      }catch(err){
        alert("error..!");
        props.history.push("/admin/dashboard");
      }

    }


    useEffect(()=>{

      
        try {
            
            setPostId(location.pathname.split("/")[4]);
            getPostContent();
            setSpinner(false)
        } catch (error) {
            history.push("/")
        }

    },[])      

    const getContent = (content)=>{
        setContent(content)
    }
    const handleSubmit = async (e) => {
         
        try{
        if( !postId ||!content ){
    
          setMessage("fill the details")
        }else{
            
        const postdata = {
         
          postId: postId,
          content : content
        };
     
        setSpinner1(true)
        e.persist();
        const response = await fetch('/api/admin/blog/update' , {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
    
        },
        mode:"cors",
        body :JSON.stringify(postdata)
      })
      const data = await response.json();
      // console.log(data)
      if (data.error === false) {
       
        // console.log(data.success)
         props.history.push("/admin/dashboard");
         setSpinner1(false)
        //  setShow(true)
        //return <Redirect to="/Dashboard" />
        
      }else{setSpinner1(false) ;alert("intrnal Error...!") }
    
        }
      }catch(e){setSpinner1(false) ;
         alert("Internal Error...")
         console.log(e)
        }
      }

      const sp1 =  <button className="btn btn-primary float-right " type="button" disabled>
      <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
      Updating...
    </button>
    
    const sp =  <input type="button" name="register"  value={isSpinner1 ? sp1 :"Update Post"} className="btn btn-primary float-right" onClick={handleSubmit} />
        if (isSpinner) {
          return (
            <div className="d-flex justify-content-center " >
              <div className="spinner-border" role="status" id="spinner">
                  <span className="sr-only">Loading...</span>
              </div>
            </div>
          )
      }else{
        return(
            
        <>
        <AdminNavbar />
        <div>
            
            <div className="container " >{isSpinner1 ? sp1 :sp }</div>
            <div  className="container">
            
            <div className="form-group ">
            <label >Title</label>                
                <input type="text" className="form-control md-2" name="title"  placeholder="title" value={location.pathname.split("/")[5]} disabled/>
            </div>           
            </div>
            
            <Editor getContent={getContent} setContent={content} />
        </div>
            <Footer />
        </>
    )
}
}
