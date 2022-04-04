import React from 'react';
import ReactDOM from 'react-dom';

const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];
function Pokemon(props) {
  const poke = props.pokedex;
  const listPoke = poke.map(pokedex =>
    <li key={pokedex.name}>{pokedex.name}</li>
  );
  return (
    <ul>{listPoke}</ul>
  );
}

ReactDOM.render(
  <Pokemon pokedex={pokedex}/>,
  document.querySelector('#root')
);
