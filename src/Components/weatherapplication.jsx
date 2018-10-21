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
                <div className='flex-container'>
                            <ul className='flexitem'>
                                <li><Link to='/' className='navlink'>Home</Link></li>
                                <li><Link to ='/aboutme' className='navlink'>About</Link></li>
                                <li><Link to='/project' className='navlink'>Projects</Link></li>
                                <li><Link to='/contact' className='navlink'>Contact</Link></li>
                            </ul>
                         </div>
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
