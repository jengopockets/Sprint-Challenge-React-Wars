import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import List from './components/CharacterList';
import './App.css';
const Maindiv = styled.div `
width: 80%;
height: fit-content;
padding: 20px;
padding-bottom: 45px;
margin: 50px auto;
border: 10px solid red;
border-radius: 12px;
display: flex;
flex-direction: column;
text-align:center;
`;
const Header = styled.h1 `
color: #443e3e;
text-shadow: 1px 1px 5px blue;
text-align: center;
font-size: 4rem;
color: red;
margin: 20px auto;`;
const App = () => {
  const [people, setPeople]=useState([])
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() =>{
    axios
    .get('https://swapi.co/api/people/')
    .then(res => setPeople(res.data.results));
  }, []);
console.log(people)
  return (
    <Maindiv>
      <Header>React Wars</Header>
      <List people = {people}/>
    </Maindiv>
  );
}

export default App;
