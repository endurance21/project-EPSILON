import React, { Component }  from 'react';
import './main.css'
import { Button } from 'react-bootstrap';
const EventDescription = ()=> {

    return (
        <div className = "eventDescription-wrapper">
            <div> Event Description </div>
            <input className = "eventDescription-input">
            </input>
            <button >
                Submit
            </button>
        </div>

    )

}

export default EventDescription;