import React from 'react'
import {Link} from 'react-router-dom';
import origincalendar from '../imagesandstuff/origincalendar.png';
import Weather from '../imagesandstuff/weatherapp.png';
import Movie from '../imagesandstuff/moviefinder1.png'
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

                         <h1 class='headercal'>Movie Application</h1>
                            <div className='row'>
                                <div className='col-sm-6'>
                                    <img src={Movie} alt='picture of Origin Calendar' id='origincalendar' class='roundit'/>
                                    <button className='btn btn-outline-light text-dark'><Link to='/project' id='notxtdec'>Back</Link></button>
                                   
                                </div>

                                <div className='col-sm-6'><p class='origincalendarabout'><strong>Job:</strong> Build a Movie Application that can return specific data from the OMDB API.
                                <br />
                                <br />
                                <span className='origincalendarp'><strong>Task:</strong> Create an app that can render out specific movie content depending on what has been called. </span>
                                <br />
                                <br />
                                <span class='origincalendarp'><strong>My Job and Skills Used:</strong> Wrote the app with ReactJS. Implemented React-router and React-redux for state manipulation. As user typed in a movie, React would grab that data and pass it into an axios call, which would then make that call to the movie api and pass the information back to the component. Check out the source code <a href='https://github.com/Taylienator/Movie-Finder-Data' target='_blank' id='herelivetag'>here</a> or lets go <a id='herelivetag' target='_blank' href='https://movie-finder-fpxotaqcks.now.sh/#/'> live!</a></span>
                                </p>
                               </div>
                            </div>
                    </div>
                
            </div>
            </div>
        )
    }
}
