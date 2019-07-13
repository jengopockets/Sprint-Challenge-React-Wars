import React from 'react';
import styled from 'styled-components';
const ButtonContainer = styled.div`
`;
const Button = styled.button`
background-color: blue;
`;
const DisabledButton = styled.button`
background: none;
color: grey;
border: none;
outline: none;
font-size: 0.8rem;
font-weight: 800;
`;

export default function Pagination (props) {
    return(
        <ButtonContainer>
            {!props.prevPage ? <DisabledButton >Previous</DisabledButton> : <Button onClick={() => props.fetchCharacters(props.prevPage)} >Previous</Button>}
            <Button onClick={() => props.fetchCharacters(props.nextPage)}>Next</Button>
        </ButtonContainer>
    )
}