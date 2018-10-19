import React from 'react'
import {Link} from 'react-router-dom';
import origincalendar from '../imagesandstuff/origincalendar.png';
import Weather from '../imagesandstuff/weatherapp.png';
import Navbar from './navbar';

export default class Origin extends React.Component{
    render(){
        return(
            <div>
                <div class='projectview'>
                <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
      <div className="container">
        <a className="navbar-brand" href="#page-top"></a>
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to='/' className="nav-link" href="#about">Home</Link>
            </li>
            <li className="nav-item">
              <Link to='/aboutme' className="nav-link" href="#services">About</Link>
            </li>
            <li className="nav-item">
              <Link to='/project' className="nav-link" href="#portfolio">Projects</Link>
            </li>
            <li className="nav-item">
              <Link to='/contact' className="nav-link" href="#contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
                    <div className='projectcontainer'>

                         <h1 class='headercal'>Weather Application</h1>
                            <div className='row'>
                                <div className='col-sm-6'>
                                    <img src={Weather} alt='picture of Origin Calendar' id='origincalendar' class='roundit'/>
                                    <button className='btn btn-outline-light text-dark'><Link to='/project' id='notxtdec'>Back</Link></button>
                                </div>

                                <div className='col-sm-6'><p class='origincalendarabout'><strong>Job:</strong> Build a Weather Application that can return weather data of any location in the world.
                                <br />
                                <br />
                                <span className='origincalendarp'><strong>Task:</strong> Create functional in app database calls to the Weather api to return info relative to the call itself. Use React-Redux for action and reducer implementation to handle state more accurately.</span>
                                <br />
                                <br />
                                <span class='origincalendarp'><strong>My Job and Skills Used:</strong> Used ExpressJS, NodeJS, to spin up a local server. Wrote the app with React with the Redux library to render data passed into the component from the store. Check out the source code <a href='https://github.com/Taylienator/Weather-Application' target='_blank' id='herelivetag'>here</a> or lets go <a id='herelivetag' target='_blank' href='https://weather-app-tl.herokuapp.com/'> live!</a></span>
                                </p>
                               </div>
                            </div>
                    </div>
                
            </div>
            </div>
        )
    }
}
