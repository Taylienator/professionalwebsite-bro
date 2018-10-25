import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Navbar from '../Components/navbar'
import Aboutpic from '../imagesandstuff/aboutme.JPG'
import Footer from '../Components/footer'
import Bootstrap from '../imagesandstuff/bootstrap.svg'
import css3 from '../imagesandstuff/css3.svg'
import express from '../imagesandstuff/express.svg'
import gulp from '../imagesandstuff/gulp.svg'
import grunt from '../imagesandstuff/grunt.svg'
import heroku from '../imagesandstuff/heroku.svg'
import html5 from '../imagesandstuff/html5.svg'
import javascript from '../imagesandstuff/javascript.svg'
import jquery from '../imagesandstuff/jquery.svg'
import mocha from '../imagesandstuff/mocha.svg'
import mongodb from '../imagesandstuff/mongodb.svg'
import nodejs from '../imagesandstuff/nodejs.svg'
import profilepic from '../imagesandstuff/profilepic.jpeg'
import react from '../imagesandstuff/react.svg'


export default class Aboutme extends React.Component{
   
            render(){
                return(
                    <div className='aboutview'>
                        <div className='flex-container'>
                            <ul className='flexitem'>
                                <li><Link to='/' className='navlink'>Home</Link></li>
                                <li><Link to ='/aboutme' className='navlink'>About</Link></li>
                                <li><Link to='/project' className='navlink'>Projects</Link></li>
                                <li><Link to='/contact' className='navlink'>Contact</Link></li>
                            </ul>
                         </div>
                            <div className='container projectcontainer'>
                            <div className='row aboutrow'>
                    <div className='col-sm-6 aboutp'>
                        <p className='aboutp1'>Hello there! Welcome to my portfolio!<br />
                        My name is Taylor and I am a junior full-stack developer currently residing in San Diego, Ca. 
                        <br />
                        
                        <br />
                        As a young kid, my older brother and I would mod Star Wars games and create web pages on the computer
                            when we weren't allowed to browse the internet. Now, I get to program front-end and back-end code. Programming is like 
                            a fun, challenging, and never-ending game for me. I really like to implement logic in order to produce condensed and 
                            proficient code. 
                            <br />
                            <br />I currently am focusing on everything with the full-stack, whether it be helping a startup company in 
                            producing fully functional applications, or working as a backend developer and learning ways to simplify database management 
                            in a safe and practical way. Take a look at some of my projects!
                            
                        </p>

                    </div>
                    <div className='col-sm-6'>
                    <img src={profilepic} alt='picture of myself' id='personalpic' className='rounded' />
                    </div>
                </div>
                            
                            
                            </div>
                            
                        
        
                        
                    
        
                    
                    
                    
                    </div>
                )
            
           
        
    }
    }    
