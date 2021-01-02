import React ,{useState,useEffect,useRef} from 'react';
import '../App.css';
import {Button , Modal} from "react-bootstrap"
// import 'bootstrap/dist/css/bootstrap.min.css';

function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton style={{border:"none"}}>
          
        </Modal.Header>
        <Modal.Body style={{textAlign:"center"}}>
          <h2>{props.data}</h2>
         
        </Modal.Body>
        <Modal.Footer style={{border:"none"}}>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  
function CommmentLayout() {
    const abortController = new AbortController()
    const [modelStatus, setModelStatus] = useState(false);
    const [comment , setComment] = useState({})
    const [isSpinner,setSpinner] =useState(true);
    const [isSpinner1,setSpinner1] =useState(false);
    const [message , setMessage] = useState("");
    const el = useRef(null);

    useEffect(()=>{ 
      setTimeout(() => {
        setSpinner(false)
      }, 2000);   
        
      
    },[])

    const handleChange = e => {
        setComment({ ...comment, [e.target.name]: e.target.value });
        //console.log("vijay")
      };
    const handleSubmit =async(e)=>{
        setSpinner1(true)
        e.preventDefault();
        try{
            if( ! comment.message ){
        
              setMessage("fill the details")
            }else{
            const commentData = {
             
              name : comment.name,
              message: comment.message
            };
            await setComment({})
            e.persist();
            
            const response = await fetch('/api/admin/comments' , {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json"
        
            },
            mode:"cors",
            body :JSON.stringify(commentData)
          })
          const data = await response.json();
          // console.log(data)
          if (data.error === false) {
           
            // console.log(data.success)
             
             setSpinner1(false)
             setMessage("Thank You ...! ") 

             setModelStatus(true)
            //return <Redirect to="/Dashboard" />
            
          }else{
              setSpinner1(false) ;
              setMessage("internal Error...!") 
              setModelStatus(true)
            }
        
            }
          }catch(e){setSpinner1(false) ;
             setMessage("Internal Error...")
             console.log(e)
             setModelStatus(true)
            }
        setSpinner1(false)
        document.getElementById("commentform").reset();
        setModelStatus(true)
    }
    const sp1 =  <button  class="btn btn-light " type="button" disabled>
    <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
    Sending...
  </button>
  
  const sp =  <button type="submit" class="btn btn-light " onClick={handleSubmit}>{isSpinner1 ? sp1 :"Leave Comment"}</button> 


    if (isSpinner) {
        return (
          <div class="d-flex justify-content-center">
            <div class="spinner-border" style={{width:"4rem",height:"4rem",marginTop:"150px",marginRight:"5%"}} role="status" >
              <span class="sr-only">Loading...</span>
            </div>
          </div> 
        )
    }else{
      return(
        
      <div>
        <div className="App">
          <MyVerticallyCenteredModal
          show={modelStatus}
          onHide={() => setModelStatus(false)}
          data = {message}
          />

          <div className="container"  onChange={handleChange} >
              <form id="commentform"> 
                  <div class="form-group ">
                      <label >Name</label>                
                          <input type="text" class="form-control" name="name"  placeholder=" your name"/>
                  </div>
                  <div class="form-group">
                      <label >Comment</label>
                      <textarea class="form-control" rows="3" name="message" placeholder="Write your comment..."></textarea>
                  </div>
                  <div style={{textAlign :"center"}}>
                  {isSpinner1 ? sp1 :sp }
                  </div>
              </form>
          </div>
  
         </div>
        
    </div>
  );
}
}
export default CommmentLayout;
