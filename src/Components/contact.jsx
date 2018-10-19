import React, {Component}from 'react'
import Navbar from './navbar'
import Github from '../imagesandstuff/github.svg'
import Email from '../imagesandstuff/emailicon.svg'
import {Link} from 'react-router-dom'

export default class Contact extends React.Component{
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
                    <div className='container container-contact'>
                        <div className='header contactheader'>
                            <h1 id='contactmeheader'>Feel free to contact me, always looking for opportunities!</h1>
                         <a href='https://github.com/Taylienator' id='contactmeatag'  target='_blank'><img src={Github} alt='a picture of github' id='iconcontact' className='contactmegithub'/> Check out my Github!</a>
                         <br />
                         <a href='mailto:taylorgreatlakes@yahoo.com' id='contactmeatag'  target='_blank'><img src={Email} alt='a picture of github' id='iconcontact' className='contactmeemail'/>Send me an email!</a>
                         </div>
                        


                        
                        </div>
                        </div>
            
        )
    }

}