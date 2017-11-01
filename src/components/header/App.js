import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Search from '../search/App.js';
import './App.css';

const navbar_style = {
    textDecoration : 'none',
    color : 'white', 
};

class App extends Component{
    
    render(){
        return(
            <header className="App-header">
                <ul className='nav-span'>
                    <li className='nav-span'><Link to='/' style={ navbar_style }>Home</Link></li>
                    <li className='nav-span'><Link to='/feeds' style={ navbar_style }>Feeds</Link></li>
                    <li className='nav-span'>Login</li>
                    <Search className='nav-span' />
                </ul>
            </header>
        );
    }
}


export default App;