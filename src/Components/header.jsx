import React, {Component} from 'react';
import github from '../imagesandstuff/github.svg'
import stickdue from '../Components/stickdue.gif'

export default class Header extends React.Component{
    render(){
        return(
        <div>
            <div id='mynameandstuff'>
               
                    {/* <img src={github} id='github'/> */}
                    <h2 id='maintitlesub'><strong class='full'>FULL-</strong><a class='stack'>STACK</a> <br/ ><a class='developer'>DEVELOPER</a></h2>
                        
                        
                        

                        
            </div>
            
            
        </div>
        
        )
    }
}