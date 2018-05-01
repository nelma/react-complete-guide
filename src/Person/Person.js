import React from 'react';

import './Person.css'


const person = (props) => {
    //return <p>Person name is {props.name} and age {props.age} </p>

    return (
        <div className="Person">
            <p onClick={props.click}>Person name is = {props.name} and age = {props.age} </p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
}

export default person;