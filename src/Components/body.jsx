import React from 'react'

export default class Body extends React.Component{
    render(){
        return(<div>
                 <h1>Testing list item</h1>
                    <ul id='test-1'>
                        <li id='test-2'>San Diego</li>
                        <li id='test-2'>Houston</li>
                        <li id='test-2'>Boston</li>
                        <li id='test-2' >New York</li>
                        <li id='test-2'>Los Angeles</li>
                    </ul>

               </div>
        )
    }
}