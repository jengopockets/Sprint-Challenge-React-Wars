import React from 'react';
import styled from 'styled-components';
const Name = styled.div `
width: 100%;
text-align: center;
font-size: 2rem;
`;
const Info = styled.div `
width: 100%;
padding: 1%;
opacity: 1;
text-align: left;
`;
const PersonInfo = styled.div `
background-color: blue;
margin: 10px 2%;
padding: 10px 2%;
border-radius: 12px;
width: 15%;
color: white;
opacity: 0.75;
`

const Person = props =>{

    return(
        <PersonInfo>
            <Name>{props.person.name}</Name>
            <Info>Gender: {props.person.gender}</Info>
            <Info>Birth Year: {props.person.birth_year}</Info>
            <Info>Eye color: {props.person.eye_color}</Info>
            <Info>Height:{props.person.height}</Info>
        </PersonInfo>
    );
};

export default Person;