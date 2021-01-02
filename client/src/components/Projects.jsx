import React from 'react'
import '../App.css';
import Footer from './Footer'
import Header from './Header'
import { Helmet } from 'react-helmet';

export default function Projects() {
    return (
        <div>
        <Helmet >
  
        <title> Projects | Munikoti Vijaykumar</title>
        <meta name="description" content="MunikotiVijaykumar - projects" />
       
        </Helmet>
            <Header />
            <div className="App">
                <h3>Web devlopment<span style={{fontSize:"0.8em"}} className="m-2">[ M E R N ]</span> </h3>
                <ul>

                    <li>
                        <h5><a href="https://gitam-eclub.herokuapp.com/">Eclub</a></h5>
                        <p className="ml-4">gitam eclub website it contain user-permissions two levels of admins and dynamic website to manage and to update events conducted by Eclub </p>
                    </li>       
                                    
                    <li>
                        <h5><a href="https://github.com/munikotivijaykumar/Dashboard-collegeinfo">Business Dashboard</a></h5>
                        <p className="ml-4">Application for display business dashboard which is graphical representation of business report to improve business</p>
                    </li>
                    <li>
                        <h5><a href="https://github.com/munikotivijaykumar/aws-storage">aws-storage</a></h5>
                        <p className="ml-4">A simple application which user can store files and download it again, in this application I used aws s3
                        bucket to Store file in cloud and only the user can access the files </p>
                    </li>
                    <li>
                        <h5><a href="https://github.com/munikotivijaykumar/2FAuth">2FAuth</a></h5>
                        <p className="ml-4">This Mini Project is 2 Factor Authentication via Email, Otp, OAuth Google using Passport js for signin OR signup </p>
                    </li>
                    <li>
                        <h5><a href="https://iqt.herokuapp.com/">IQT</a></h5>
                        <p className="ml-4">This is a simple quiz application of programming questions, and community chat(group-chat) using Scoket.io where you can 
                        discuss about the questions and sort the users according to the score.</p>
                    </li>                 
                    
                </ul>
                <h3>Data Structures</h3>
                <ul>
                    <li>
                        <h5><a href="https://github.com/munikotivijaykumar/Data-Structures">Data Structues</a></h5>
                        <p className="ml-4">All Bacis Data Structues in c++ view <a href="https://github.com/munikotivijaykumar/Data-Structures">src</a></p>
                    </li>
                </ul>
                <h3>Java projects</h3>
                <ul>
                    <li>
                        <h5><a href="https://github.com/munikotivijaykumar/TicTacToe">TicTacToe</a></h5>
                        <p className="ml-4">TicTacToe game in java using awt(UI) view <a href="https://github.com/munikotivijaykumar/TicTacToe/tree/master/src/javaapplication1">src</a></p>
                    </li>
                    
                    <li>
                        <h5><a href="https://github.com/munikotivijaykumar/bank">Bank Application</a> [ J S P ] </h5>
                        <p className="ml-4">simple CRUD bank application using jsp and oracle database view <a href="https://github.com/munikotivijaykumar/bank">src</a></p>
                    </li>
                </ul>
            </div>
            <Footer />
        </div>
    )
}
