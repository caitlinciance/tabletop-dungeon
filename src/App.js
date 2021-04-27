import React, { Component } from 'react';
import './App.css';
import Main from "./components/MainCompontent.js";
import Directory from './components/DirectoryComponent';


class App extends Component {
    render() {
        return (
            <div className="App">
               <Main /> 
               <Directory />
            </div>
        );
    }
}

export default App;