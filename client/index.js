'use strict';
//implementacja komponentow 
// global = > reactDom renderuje aplikacje w elemencie o id app
//plik wejsciowy do webpacka
import React from 'react';
import ReactDOM from 'react-dom';
import App from ' ./app';

ReactDOM.render(<App />, document.getElementById('app'));