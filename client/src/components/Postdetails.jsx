import React from 'react'
import '../App.css'
function Postdetails(props) {
   
   const getStyle =()=>{
        return{
            backgroundColor : '#50D689  ',
            padding : '10px ',
            textDecoration : props.todo.completed ?
            'line-through' : 'none'
     }}

  

  const updatePost =() =>{
      
  }
  const delPost =() =>{
      
  }


    return (

        <div style={getStyle()}>
           
            <h3>  
             {"  "}{props.post.title}
             <button onClick={updatePost} style={updateButton}>update</button>
             <button onClick={delPost} style={delButton}>del</button>
             </h3>
             
        </div>
    );
}

const updateButton = {
    backgroundColor : '#1C1D1C ',
    color: "#fff",
    border:'none',
    padding : '5px 10px',
    borderRadius : '50%',
    cursor :'pointer',
    float:'right'
}
const delButton = {
    backgroundColor : '#1C1D1C ',
    color: "#fff",
    border:'none',
    padding : '5px 10px',
    borderRadius : '50%',
    cursor :'pointer',
    float:'right'
}


export default Postdetails;
