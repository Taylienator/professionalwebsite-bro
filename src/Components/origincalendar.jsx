import React from 'react'
import {Link} from 'react-router-dom';
import origincalendar from '../imagesandstuff/origincalendar.png';
import Navbar from './navbar';
export default class Origin extends React.Component{
    render(){
        return(
            <div>
                <div class='projectview'>
                <Navbar />
                    <div className='projectcontainer'>

                         <h1 class='headercal'>Origin Calendar</h1>
                            <div className='row'>
                                <div className='col-sm-6'>
                                    <img src={origincalendar} alt='picture of Origin Calendar' id='origincalendar' class='roundit'/>
                                    <button className='btn btn-outline-light text-dark'><Link to='/project' id='notxtdec'>Back</Link></button>
                                </div>

                                <div className='col-sm-6'><p class='origincalendarabout'><strong>Job:</strong> Build an Full-Stack Origin Code Academy Calendar that allows google calendar updates, auth tokens, database management and appointment scheduling with a team of developers.
                                <br />
                                <br />
                                <span class='origincalendarp'><strong>Task:</strong> Create a calendar that users can log into, store their login data to the database. Depending on who logs in, 
                                instructor or student, different authoritive actions and components become available.</span>
                                <br />
                                <br />
                                <span class='origincalendarp'><strong>My Job and Skills Used:</strong> Using ExpressJS, NodeJS, and MongoDB for server-side and backend capability. Needed to have an active model running locally alongside a mongodb instance, before being pushed to production. Used ReactJS for UI configuration and state manipulation, grabbing input directly
                                typed by users to grab their information. Used NodeJS to perform functional axios calls for C.R.U.D operations relative to the database. Used Loopback for api management. Check out the source code <a href='https://github.com/OriginCodeAcademy/origin-calendar' target='_blank' id='herelivetag'>here</a> or lets go <a id='herelivetag' target='_blank' href='https://origin-calendar.now.sh/'> live!</a></span>
                                </p>
                               </div>
                            </div>
                    </div>
                
            </div>
            </div>
        )
    }
}
