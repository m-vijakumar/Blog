import React from 'react'
import ReactMarkdown from 'react-markdown'

export default function Comment(props) {

    const delComment = async() =>{
        props.delComment(props.comment._id)
      }

    return (
        <div className="postStyle ">
           
            <div>  
            <button onClick={delComment} className="delButton" value={props.comment._id}>delete</button>
             <h3>{"  "}{props.comment.name}</h3>
             <p style={{whiteSpace: "pre-wrap"}}>{"  "}{props.comment.message}</p>
             
             </div>
             
        </div>
    )
}
