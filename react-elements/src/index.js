import React from 'react';
import * as ReactDOMClient from 'react-dom/client';

const h1 = React.createElement(
  'h1',
  [null],
  ['Hello, React']
);
const container = document.querySelector('#root');
const root = ReactDOMClient.createRoot(container);

root.render(h1);
