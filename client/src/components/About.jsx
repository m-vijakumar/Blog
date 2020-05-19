import React from 'react';
import Header from './Header'
import '../App.css';
import Footer from './Footer';
// import 'bootstrap/dist/css/bootstrap.min.css';
    
function About() {

  return (
      
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

        <div className="App">

            <div className="container" >
                <form action="/" method="get">
                
                <div class="form-group ">
                    <label >Name</label>                
                        <input type="text" class="form-control"  placeholder=" your name"/>
                </div>
                <div class="form-group">
                    <label >Comment</label>
                    <textarea class="form-control" rows="3" placeholder="Write your comment..."></textarea>
                </div>
                <div style={{textAlign :"center"}}>
                    <button type="submit" class="btn btn-light " >Leave Comment</button>
                </div>
                

                </form>
       
            </div>

           
         </div>
        
       <Footer />
    </div>
  );
}

export default About;
