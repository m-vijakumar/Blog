import React, {useEffect, useState }  from 'react'

export default function Home() {

    const [isSpinner,setSpinner] =useState(true);

    useEffect( () => {
        setSpinner(false)
    }, []);

    if (isSpinner) {
        return (
          <div className="spinner-border" role="status" id="spinner">
            <span className="sr-only">Loading...</span>
          </div>
        )
    }else{

            return (
                <div className="App">
                <br /> <br />
                    <h1>Welcome </h1>
        
                    <p ><a href="/admin/register">Register</a>  /  <a href="/admin/login">  Login</a></p> 
                </div>
            )
        }
   
}
