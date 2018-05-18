import React from 'react';

import './Person.css'


const person = (props) => {
    //return <p>Person name is {props.name} and age {props.age} </p>

    const style = {
        '@media (min-width: 500px)': {
            width: '45px'
        }
    }

    return (
        <div className="Person">
            <p onClick={props.click}>Person name is = {props.name} and age = {props.age} </p>
            <p>ttt{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
}

export default person;