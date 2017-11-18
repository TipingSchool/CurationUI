import React, { Component } from 'react';
import './App.css';
import config from '../../config';
import axios from 'axios';

const uri = config.api_Url;
export default class Addrss extends Component {

    constructor(props) {
        super(props);
        this.state = {
            url : "",
            cat : ""
        }
    }

    sendUrlReq = (e) => {
        console.log(this.props.flag)
        e.preventDefault();
        axios.post(`${uri}/addnewurl`,{
            url : this.state.inputValue
        }
      ).then(function(response){
        if(response.status == false ) {
            console.log("Something bad happened!!!")
        }
        if(response.status == true ) {

        }
      });
    }

    sendCatReq = (e) => {
        e.preventDefault();
        axios.post(`${uri}/addnewcat`,{
            url : this.state.inputValue
        }
      ).then(function(response){
        if(response.status == false ) {
            console.log("Something bad happened!!!")
        }
      });
    }

    updateURL = (e) => {
        e.preventDefault();
        this.setState({url : e.target.value})
    }

    updateCAT = (e) => {
        e.preventDefault();
        this.setState({cat : e.target.value})
    }

    render() {
        return (
            <div className = 'App'>
                 <div className='rss-container'>
                    <form className='addrss'>
                        Add Rss<input type="text" value={this.state.url} onChange={ this.updateURL}/>
                        <input type="submit" value="Submit" onClick={this.sendUrlReq} />
                    </form>
                </div>

                <div className='cat-container'>
                    <form className='addcat'>
                        Add Category<input type="text" value={this.state.cat} onChange={ this.updateCAT}/>
                        <input type="submit" value="Submit" onClick={this.sendCatReq} />
                    </form>
                </div>

            </div>
        )
    }
}