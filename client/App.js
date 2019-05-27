'use strict';
//tworzenie czatu public
// zaimportowanie react, i modul socket.io, dzieki niemu laczymy server pracujacy w czasie rzeczywistym
import React, { Component } from 'react';
import { hot } from react-hot-loader;
import io from 'socket.io-client'; 

const socket = io ('/'); // nawiazanie polaczenie przez arg. (io)  zaimportowanie modulu u gory, => jesli wstawimy id => arg. dla prywatnych wiadomosci

// definiowanie klasy i wyeksportowanie na zewnatrz modulu dla komponentow
class App extends Component {

};

export default hot(module)(App); // App opakowane jest w funkcje hot => react-hot-loader 

// konstruktor dla poczatkowego stanu aplikacji 

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {users: [], message: [], text: '', name: ''};
    }
};