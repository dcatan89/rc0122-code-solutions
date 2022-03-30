import React from 'react';
import * as ReactDOM from 'react-dom';

const h1 = React.createElement(
  'h1',
  [null],
  ['Hello, React']
);
const container = document.querySelector('#root');
ReactDOM.render(h1, container);
