import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom'
import logo from './logo.svg';
import Navbar from './Components/navbar'
import Header from './Components/header';
import Footer from './Components/footer';
import github from './imagesandstuff/github.svg';
import homeimage from './imagesandstuff/homeimage.jpg';
import Bootstrap from './imagesandstuff/bootstrap.svg'
import css3 from './imagesandstuff/css3.svg'
import express from './imagesandstuff/express.svg'
import gulp from './imagesandstuff/gulp.svg'
import grunt from './imagesandstuff/grunt.svg'
import heroku from './imagesandstuff/heroku.svg'
import html5 from './imagesandstuff/html5.svg'
import javascript from './imagesandstuff/javascript.svg'
import jquery from './imagesandstuff/jquery.svg'
import mocha from './imagesandstuff/mocha.svg'
import mongodb from './imagesandstuff/mongodb.svg'
import nodejs from './imagesandstuff/nodejs.svg'
import profilepic from './imagesandstuff/profilepic.jpeg'

import './App.css';


class App extends Component {
  render() {
    return (
      <div className='aboutview'>
          <div className='flex-container'>
          <ul className='flexitem'>
                                <li><Link to='/' className='navlink'>Home</Link></li>
                                <li><Link to ='/aboutme' className='navlink'>About</Link></li>
                                <li><Link to='/project' className='navlink'>Projects</Link></li>
                                <li><Link to='/contact' className='navlink'>Contact</Link></li>
                            </ul>
          </div>
           

    <header className="masthead text-center text-white d-flex">
      <div className="container my-auto">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <h1 className="text-uppercase">
              <strong id="headername">TAYLOR LAKE<blink></blink></strong>
            </h1>
            
          </div>
          <div className="col-lg-8 mx-auto">
            <p className="text-faded mb-5" id="fsd">FULL-STACK DEVELOPER</p>
            <Link to='/aboutme' className="btn btn-outline-light text-white" href="#about" id="findoutmore">FIND OUT MORE!</Link>
          </div>
        </div>
      </div>
      </header>  
      </div>
      
      
    

      
      
      
      
      
      
      
      
      
      
      
      
      
     
     
    );
  }

}

export default App;




















