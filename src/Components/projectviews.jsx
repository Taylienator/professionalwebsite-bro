import React from 'react'
import Navbar from './navbar';
import reduxpic from '../imagesandstuff/reduxpic.png';
import moviefinder from '../imagesandstuff/moviefinder1.png';
import origincalendar from '../imagesandstuff/origincalendar.png';
import weatherapp from '../imagesandstuff/weatherapp.png';
import { Link, Route } from 'react-router-dom'

export default class ProjectViews extends React.Component{
    render(){
        return(
            <div className='projectview'>
               <div className='flex-container'>
                            <ul className='flexitem'>
                                <li><Link to='/' className='navlink'>Home</Link></li>
                                <li><Link to ='/aboutme' className='navlink'>About</Link></li>
                                <li><Link to='/project' className='navlink'>Projects</Link></li>
                                <li><Link to='/contact' className='navlink'>Contact</Link></li>
                            </ul>
                         </div>
                    <div className='container projectcontainer'>
                       <h1 className='headerproj'>Hey there! Let's take a look at a few of my projects:</h1>
                       <div className="row">
                        <div className='col-sm-12 projectviewlink'>
                             <Link to='/project/origin' className='calendarlink1'>Origin Calendar</Link>
                            <Link to='/project/movieapp' className='calendarlink2'>Movie Finder</Link>
                            <Link to='/project/weatherapplication' className='calendarlink3'>Weather App</Link>
                        </div>
                        </div>
                    </div>
                    
                

                
            

            
            
            
            </div>
        )
    }
}