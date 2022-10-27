import React, { Component } from 'react'


class Contact extends Component{
    render(){
        function madeIt(){
            console.log("We're real")
        };

        return(
            <div>
            <h1> I'd love to get in contact with you!</h1>
            {madeIt()}
        </div>
        )
    }
}


export default Contact
