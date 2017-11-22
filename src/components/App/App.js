import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Market from '../Market';
import Farm from '../Farm';
import Budget from '../Budget';

import './App.css';

class App extends Component {
    render() {
        return (
            <div>
                <Market />
                <Farm />
                <Budget />
            </div>
        );
    } //render
} //App

export default App;
