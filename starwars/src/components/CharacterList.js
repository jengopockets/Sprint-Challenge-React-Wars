import React from 'react';
import styled from 'styled-components';
import Person from './CharacterCard';
const Listdiv = styled.div`
display: flex;
justify-content: space-evenly;
flex-wrap: wrap;
`;
function List (props) {
    console.log(props.people)
    return (
        
        <Listdiv>
            {props.people.map(person => (
                <Person person={person} key={person.created} />
            ))}
        </Listdiv>
    );
}
export default List;