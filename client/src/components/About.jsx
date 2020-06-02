import React ,{useState,useEffect,useRef} from 'react';
import Header from './Header'
import '../App.css';
import Footer from './Footer';
import {Button , Modal} from "react-bootstrap"
import Typed from "typed.js"
// import 'bootstrap/dist/css/bootstrap.min.css';

class TypedReact extends React.Component {
    componentDidMount() {
    
      const options = {
          strings: ["Web Development","Cyber Security","Data Structures","Network Security"],
          typeSpeed: 100,
          loop: true,
          backDelay: 1100,
          backSpeed: 60
      };
      // this.el refers to the <span> in the render() method
      this.typed = new Typed(this.el, options);
    }
  
    render() {
      return (
        
          <div className="type-wrap" style={{textAlign:"center"}}>
          <h3>
            <span
              style={{ whiteSpace: 'pre' }}
              ref={(el) => { this.el = el; }}
            /></h3>
          </div>
        
      );
    }
  }

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
  
  
function About() {
    const abortController = new AbortController()
    const [modelStatus, setModelStatus] = useState(false);
    const [comment , setComment] = useState({})
    const [isSpinner,setSpinner] =useState(true);
    const [isSpinner1,setSpinner1] =useState(false);
    const [message , setMessage] = useState("");
    const el = useRef(null);
    const typing = ()=>{

     
        var typed = new Typed(el.c,{
            strings: "vijay",
			typeSpeed: 80,
			loop: true,
			backDelay: 1100,
			backSpeed: 30  
        })

}
    useEffect(()=>{    
        setSpinner(false)
        // typing()
        return ()=> abortController.abort()
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
          <div className="d-flex justify-content-center " >
              <div className="spinner-border" role="status" id="spinner">
                  <span className="sr-only">Loading...</span>
              </div>
          </div> 
        )
    }else{
      return(
       
     
    <div >
     
        <Header />
        
        <div className=" App" >
        
            <div className="row justify-content-around">
                <div className="col-10 col-md-8 ">
                    <h2>Munikoti VijayKumar</h2>
                    <li>munikotivijaykumar@gmail.com</li>
                    <li><a href="https://github.com/munikotivijaykumar" target="_blank" rel="noopener noreferrer" >https://github.com/munikotivijaykumar</a></li>
                    <li><a href="https://www.linkedin.com/in/munikoti-vijaykumar-28726114a" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/munikoti-vijaykumar-28726114a</a></li>
                </div>
                <div className="col-6 col-md-4">
                    <img src="vijayedit.jpg" className="logo" alt="profilepic "/>
                </div>
            </div>

        </div>
        <div className="App" >
        <h1 className="typehead">I Am Interested In</h1>
        <TypedReact />

        </div>
        <div className="App" >
        
        </div>
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
        
       <Footer />
    </div>
  );
}
}
export default About;
