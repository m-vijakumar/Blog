import React ,{useEffect,useState}from 'react'
import Header from './Header'
import Footer from './Footer'

import "./../App.css"
 const Home = (props) => {

    const [posts, setPosts] = useState([])
    const [isSpinner,setSpinner] =useState(true);

    const showPosts = posts.map((post)=>{
        console.log(post)
        var date = new Date(post.createdOn)
        const postname = post.title.trim().replace(/ /g,"-")
        return <li key={post._id} > <h5><a  href={`/blog/${post._id}/${postname}`}>{post.title}</a>{" "}[{post.category}]<span style={{fontSize:"0.8rem"}}>{" "}{ date.toLocaleDateString().replace(/[/]/g,"-")}</span></h5> </li>
    })

    const getAllPosts = async()=>{
        const resp = await fetch("/api/admin/blog/all-posts");
        const postsData = await resp.json();
        await setPosts(postsData.data)
        console.log(postsData)
        setSpinner(false)
    }

    useEffect(() => {
       getAllPosts();
       
    }, [])

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
        <div>
            <Header />
            
            <div style={{fontFamily:"Poppins, sans-serif" ,padding:"5px"}}>
                <h3>My Blog Pages</h3>
                <ul>
                    {showPosts}
                </ul>
            </div>
            <Footer />
        </div>
    )
    }
}

export default  Home;