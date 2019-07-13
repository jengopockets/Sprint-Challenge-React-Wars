import React from 'react';
import styled from 'styled-components';
const ButtonContainer = styled.div`
`;
const Button = styled.button`
background-color: blue;
`;

export default function Pagination (props) {
    return(
        <ButtonContainer>
            <Button>Next</Button>
            <Button>Previous</Button>
        </ButtonContainer>
    )
}