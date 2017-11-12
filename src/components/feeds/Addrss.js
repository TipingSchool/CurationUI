import React, { Component } from 'react';
import './App.css';
import config from '../../config';
import axios from 'axios';

const uri = config.api_Url;
export default class Addrss extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputValue : ""
        }
    }

    sendreq = (e) => {
        e.preventDefault();
        axios.post(`${uri}/autoadd`,{
            url : this.state.inputValue
        }
      ).then(function(response){
        if(response == null ) {
            console.log("Something bad happened!!!")
        }
      });
    }

    updateInputValue = (e) => {
        e.preventDefault();
        this.setState({inputValue : e.target.value})
    }

    render() {
        return (
            <div className = 'App'>
                 <div className='addrss-container'>
                    <form className='addrss'>
                        Add Rss<input type="text" value={this.state.inputValue} onChange={ this.updateInputValue}/>
                        <input type="submit" value="Submit" onClick={this.sendreq} />
                    </form>
                </div>
            </div>
        )
    }
}