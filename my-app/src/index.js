import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './App/App.jsx'
import Card from './Card/Card.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <Card/>
  </React.StrictMode>
);


