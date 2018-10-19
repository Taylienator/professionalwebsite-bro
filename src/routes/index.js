import React from 'react'
 import { BrowserRouter, Route} from 'react-router-dom';
import Aboutme from '../Components/aboutme';
import Project from '../Components/projectviews';
import Contact from '../Components/contact';
import App from '../App'
import OriginCalendar from '../Components/origincalendar';
import WeatherApp from '../Components/weatherapplication';
import MovieApp from '../Components/movieproject';
import Body from '../Components/body';

export default () =>{
     return <BrowserRouter>    
        <div>
            <Route path="/" exact component={App} />
            <Route path ="/aboutme" exact component={Aboutme} />
            <Route path ="/contact" exact component={Contact} />
            <Route path ="/project" exact component={Project} />
            <Route path ="/project/origin" component={OriginCalendar} />
            <Route path ="/project/weatherapplication" component={WeatherApp} />
            <Route path ="/project/movieapp" component={MovieApp} />
            <Route path ="/project/body" component={Body} />


        </div>
    </BrowserRouter>
 }