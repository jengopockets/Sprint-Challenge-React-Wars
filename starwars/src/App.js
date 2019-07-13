import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import List from './components/CharacterList';
import Pagination from './components/Pagination'
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
  const [nextpage, setNextPage]=useState('')
  const [prevPag, setPrevPage]=useState('')
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() =>{
  fetch("https://swapi.co/api/people/")
    .then(res => res.json())
    .then( apiData => {
      setPeople(apiData.results);
      setNextPage(apiData.next);
      setPrevPage(apiData.prev)
    })
    .catch(err => console.log("There was an Error", err))
  }, []);

  const fetchCharacters = url => {
    setPeople({})
    fetch(url)
    .then(res => res.json())
    .then( apiData => {
      setPeople(apiData.results);
      setNextPage(api.next);
      setPrevPage(api.previous);
        })
        .catch(err => console.log("Here there be an Error", err))
  }
  return (
    <Maindiv>
      <Header>React Wars</Header>
      <List people={people}/>
      <Pagination />
    </Maindiv>
  );
}

export default App;
