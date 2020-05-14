import React from 'react'
import '../App.css';
import Footer from './Footer'
import Header from './Header'

export default function Projects() {
    return (
        <div>
            <Header />
            <div className="App">
                <h2>Web devlopment M[Mongodb] E[ExpressJs] R[ReactJs] N[NodeJs]</h2>
                <ul>
                    <li>
                        <h4><a href="https://gitam-eclub.herokuapp.com/">Eclub</a></h4>
                        <p className="ml-4">gitam eclub website it contain user-permissions two levels of admins and dynamic website to manage </p>
                    </li>
                    <li>
                        <h4><a href="/">MyBlog</a></h4>
                        <p className="ml-4">dfvzdfdf</p>
                    </li>
                    <li>
                        <h4><a href="https://iqt.herokuapp.com/">IQT</a></h4>
                        <p className="ml-4">This is a simple quiz competion project having discussion(group-chat) leaderboard etc...</p>
                    </li>
                    <li>
                        <h4><a href="https://youtube-api-search123.herokuapp.com/">yt-downloader</a></h4>
                        <p className="ml-4">simple youtube downloader using youtube-apis</p>
                    </li>
                    
                    
                </ul>
                <h2>Data Structures</h2>
                <ul>
                    <li>
                        <h4><a href="https://github.com/munikotivijaykumar/Data-Structures">Data Structues</a></h4>
                        <p className="ml-4">All Bacis Data Structues in c++ view <a href="https://github.com/munikotivijaykumar/Data-Structures">src</a></p>
                    </li>
                </ul>
                <h2>Java projects</h2>
                <ul>
                    <li>
                        <h4><a href="https://github.com/munikotivijaykumar/TicTacToe">TicTacToe</a></h4>
                        <p className="ml-4">TicTacToe game in java using awt(UI) view <a href="https://github.com/munikotivijaykumar/TicTacToe/tree/master/src/javaapplication1">src</a></p>
                    </li>
                    <li>
                        <h4><a href="https://github.com/munikotivijaykumar/stopwatch">stopwatch</a></h4>
                        <p className="ml-4">simple stopwatch application using java threads and awt view <a href="https://github.com/munikotivijaykumar/stopwatch">src</a></p>
                    </li>
                    <li>
                        <h4><a href="https://github.com/munikotivijaykumar/student_info">student_info</a></h4>
                        <p className="ml-4">min project of student information using java swing and oracle database view <a href="https://github.com/munikotivijaykumar/student_info">src</a></p>
                    </li>
                </ul>
                <h2>Java Server Pages (JSP)</h2>
                <ul>
                    <li>
                        <h4><a href="https://github.com/munikotivijaykumar/bank">BankApplication</a></h4>
                        <p className="ml-4">simple CRUD bank application using jsp and oracle database view <a href="https://github.com/munikotivijaykumar/bank">src</a></p>
                    </li>
                </ul>
            </div>
            <Footer />
        </div>
    )
}
