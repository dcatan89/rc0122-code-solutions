import React from 'react';
import ReactDOM from 'react-dom';
import Accordion from './accordion';
const Randomdex = [
  { topic: 'HTML', name: 'Bulbasaur', id: 1 },
  { topic: 'CSS', name: 'Charmander', id: 2 },
  { topic: 'JavaScript', name: 'Squirtle', id: 3 },
  { topic: 'React', name: 'Pikachu', id: 4 },
  { topic: 'Node', name: 'Jigglypuff', id: 5 }
];
ReactDOM.render(<Accordion dex={Randomdex} />, document.querySelector('#root'));
