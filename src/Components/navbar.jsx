
import React, {Component} from 'react'
import { Link, Route } from 'react-router-dom'



export default class Navbar extends React.Component{
    render(){
                return(
                 

                  <nav className="navbar navbar-expand-lg navbar-light fixed-top">
  <ul className="navbar ml-auto hellonav">
  <li className="nav-item">
              <Link to='/' className="nav-link" href="#about" id='navitembro'>Home</Link>
            </li>
            <li className="nav-item">
              <Link to='/aboutme' className="nav-link" href="#services" id='navitembro'>About</Link>
            </li>
            <li className="nav-item">
              <Link to='/project' className="nav-link" href="#portfolio" id='navitembro'>Projects</Link>
            </li>
            <li className="nav-item">
              <Link to='/contact' className="nav-link" href="#contact" id='navitembro'>Contact</Link>
            </li>
  </ul>
</nav>
     
      
      )
    }

}