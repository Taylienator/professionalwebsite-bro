import React from 'react'

export default class Body extends React.Component{
    render(){
        return(<div className='flex-container'>
                 <ul className='flexitem'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Projects</li>
                    <li>Contact</li>
                 </ul>

              </div>
        )
    }
}