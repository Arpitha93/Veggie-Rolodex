import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css'; 

class App1 extends Component {
    constructor() {
        super();

        this.state = {
            veggie1: {
                name: 'Potato'
            },
            veggie2: {
                name: 'Tomato'
            },
            veggie3: {
                name: 'Beans'
            },
            veggie4: {
                name: 'Onion'
            },
            veggie5: {
                name: 'Bellpepper'
            }

        };
    }

    render() {
        return (
        <div className='App'>
            <h1> { this.state.veggie1.name } </h1>
            <h1> { this.state.veggie2.name } </h1>
            <h1> { this.state.veggie3.name } </h1>

        </div>
        );
    }
}

export default App1;