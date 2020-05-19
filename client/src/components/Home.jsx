import React ,{useEffect,useState}from 'react'
import Header from './Header'
import Footer from './Footer'
 const Home = () => {

    const [posts, setPosts] = useState([])
    const showPosts = posts.map((post)=>{
        const postname = post.title.replace(' ',/[-]/g)
        return <li key={post._id} > <h6><a href={`/blog/${post._id}/${post.title}`}>{post.title}</a>{" "}{post.createdOn}{" "}[{post.category}]</h6> </li>
    })
    const getAllPosts = async()=>{
        const resp = await fetch("/api/admin/blog/all-posts");
        const postsData = await resp.json();
        await setPosts(postsData.data)
        console.log(postsData)
        
    }

    useEffect(() => {
       getAllPosts();
    }, [])
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

export default  Home;