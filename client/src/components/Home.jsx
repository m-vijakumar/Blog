import React ,{useEffect,useState}from 'react'
import Header from './Header'
import Footer from './Footer'
import "./../App.css"
 const Home = () => {

    const [posts, setPosts] = useState([])
    const [isSpinner,setSpinner] =useState(true);

    const showPosts = posts.map((post)=>{
        const postname = post.title.trim().replace(/ /g,"-")
        return <li key={post._id} > <h6><a href={`/blog/${post._id}/${postname}`}>{post.title}</a>{" "}{post.createdOn}{" "}[{post.category}]</h6> </li>
    })

    const getAllPosts = async()=>{
        const resp = await fetch("/api/admin/blog/all-posts");
        const postsData = await resp.json();
        await setPosts(postsData.data)
        console.log(postsData)
        
    }

    useEffect(() => {
       getAllPosts();
       setSpinner(false)
    }, [])

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
            <Header />
            
            <div>
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