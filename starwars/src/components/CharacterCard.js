import React from 'react';
import styled from 'styled-components';

const Person = props =>{

    return(
        <div className = "person">
            <div className="name">{props.person.name}</div>
            <div className="info">Gender: {props.person.gender}</div>
            <div className="info">Birth Year: {props.person.birth_year}</div>
            <div className="info">Eye color: {props.person.eye_color}</div>
            <div className="info">Height:{props.person.height}</div>
        </div>
    );
};

export default Person;