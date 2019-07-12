import React from 'react';
import Person from './CharacterCard';

function List(props) {
    return (
        <div>
            {props.people.map(person => (
                <Person person={person} key={person.created} />
            ))}
        </div>
    );
}
export default List;