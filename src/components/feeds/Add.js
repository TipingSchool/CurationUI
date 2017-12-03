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
        console.log("asdasdasD" + this.props.flag)
        e.preventDefault();
        if(this.state.cat.length == 0) {
            alert("Validation Failed");
            return;
        }
        axios.post(`${uri}/addnewurl`,{
            url : this.state.inputValue
        }
      ).then(function(response){

        console.log("inside");
        console.log(response);
        if(response.status == false ) {
            alert("Something bad happened!!!")
        }
        if(response.status == true ) {
            alert(this.state.url + " Added!!!");
        }
      });
    }

    sendCatReq = (e) => {
        e.preventDefault();
        if(this.state.cat.length == 0) {
            alert("Validation Failed");
            return;
        }
        axios.post(`${uri}/addnewcat`,{
            cat : this.state.cat
        }
      ).then(function(response){
        if(response.status == false ) {
            console.log("Something bad happened!!!");
        }
        if(response.status == true) {
            alert(this.state.cat + " Added!!!");
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
            <div className = 'add-container'>
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