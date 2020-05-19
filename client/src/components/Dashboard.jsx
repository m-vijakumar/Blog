import React, { useEffect ,useState} from 'react'
// import {Link ,withRouter } from 'react-router-dom'
import AdminNavbar from './AdminNavbar'
import "./../App.css"
import Postdetails from './Postdetails';
import Editor from './Editor';

export default  function Dashboard(props) {

    
    const [isSpinner,setSpinner]=useState(true);
    const [posts,setPosts]=useState([]);
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
    const showPosts = posts.map((post)=>{

        return <Postdetails  post={post}/>
    })
    const getAllPosts = async()=>{
        const resp = await fetch("/api/admin/blog/all-posts");
        const postsData = await resp.json();
        await setPosts(postsData.data)
        console.log(postsData)
        
    }
    useEffect(()=>{
        console.log("sssss")
        userlog();
        getAllPosts();
        
        setSpinner(false)
    },[])
    if (isSpinner) {
        return (
          <div className="spinner-border " role="status" id="spinner">
          <span className="sr-only">Loading...</span>
          </div> 
        )
    }else{
    return (
        <div>
        <AdminNavbar />
        <div className="App">
        
            <h1>Welcome</h1>
            <Editor status={"create"}/>
            
            
        </div>
        </div>
        
    )
    }
}
