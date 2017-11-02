import React, { Component } from 'react';
import './App.css';

export default class UserActionPanel extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className='userActionUI'> 
            <div className ="userPanelItem" onClick = {this.props.selectAll}><p>Select All</p></div>
            <div className ="userPanelItem"><p>Unselect All</p></div>
            <div className ="userPanelItem" onClick = { this.props.multiplePublish}><p>Publish Selected</p></div>
            <div className ="userPanelItem" onClick={this.props.multipleArchive}><p>Archive Selected</p></div>
            <div className ="userPanelItem" onClick={this.props.multipleDelete}><p>Delete Selected</p></div>
        </div>
        )
    }
}