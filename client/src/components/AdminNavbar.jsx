import React from 'react';
import {Navbar , Nav } from 'react-bootstrap'


function AdminNavbar(props){

 const  logger = async()=>{

  try{
    const resp = await fetch("/api/admin/logout",{
      method:"DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
  
      },
      mode:"cors"
    });
    const data = await resp.json();
        
         if(data.success === true){
            
            props.history.push("/admin/login");
         }else{
          props.history.push("/admin/login");
         }
    }catch(e){
        console.log(e);
        props.history.push("/admin/login");
    }


  }
    return(

        <Navbar bg="dark" variant="dark" expand="sm">
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/admin/dashboard">Dashboard</Nav.Link>
            
            <Nav.Link onClick={logger} href="/admin/login" >Logout</Nav.Link>
          
          </Nav>
         
        </Navbar.Collapse>
      </Navbar>

   
    )
}

export default AdminNavbar ;