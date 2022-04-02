import React from 'react';
import ReactDOM from 'react-dom';

function Pokemon() {
  const pokedex = [
    { number: '001', name: 'Bulbasaur' },
    { number: '004', name: 'Charmander' },
    { number: '007', name: 'Squirtle' },
    { number: '025', name: 'Pikachu' },
    { number: '039', name: 'Jigglypuff' }
  ];
  const listPoke = pokedex.map(pokedex =>
    <li key={pokedex.name}>{pokedex.name}</li>
  );
  return (
    <ul>{listPoke}</ul>
  );
}

ReactDOM.render(
  <Pokemon />,
  document.querySelector('#root')
);
