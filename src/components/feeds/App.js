import React, { Component } from 'react';
import './App.css';
import UserActionPanel from "./userActionPanel";
import FeedCard from './feedcard';
import axios from 'axios';
import config from '../../config';

const UriPlaceholder = config.api_Url;
let selected = [] ; //Array Containing the Selected Feeds for User Action
let selectAll = false; //to Select All Active Feeds, will work in lazy loading too.

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      feeds:[],
      userActionPanelActive : false      
    }
  }

  componentWillReceiveProps(nextProp){
    var currentLocation = this.props.location.pathname + this.props.location.search
    var nextLocation = nextProp.location.pathname  + nextProp.location.search
    if(currentLocation !== nextLocation){
      var self = this;
      axios.get(`${UriPlaceholder}${nextLocation}`).then(function(response){
        self.setState({feeds:response.data});
       }).catch(function (error){
         console.log(error);
       });
    }
}

  componentWillMount(){
     var self = this;
     axios.get(`${UriPlaceholder}${ self.props.location.pathname + self.props.location.search}`).then(function(response){
       self.setState({feeds:response.data});
      })
      .catch(function (error){
        console.log(error);
      });
      console.log(self.props.location.pathname + self.props.location.search)
  }

  deleteFeedAction = (feedIndexNumber, feedObjectId) => {
      var self = this;
        axios.post(`${UriPlaceholder}${self.props.match.url}`,{
            feedObjectId :  feedObjectId,
            action : "delete"
        }
      ).then(function(response){
        console.log("delete post sent");
      });

      let currentFeed = this.state.feeds;
      currentFeed.splice(feedIndexNumber, 1);
      this.setState({
        feeds : currentFeed
      });
  }

  archiveFeedAction = (feedIndexNumber, feedObjectId) => {
    var self = this;
    axios.post(`${UriPlaceholder}${self.props.match.url}`,{
      feedObjectId : feedObjectId,
      action : "archive"
    }).then(function(response){
      console.log("post archived");
    });

    let currentFeed = this.state.feeds;
    currentFeed.splice(feedIndexNumber, 1);
    this.setState({
      feeds : currentFeed
    });
  }

  publishFeedAction = (feedIndexNumber, feedObjectId) => {
    var self = this;
    axios.post(`${UriPlaceholder}${self.props.match.url}`,{
      feedObjectId : feedObjectId,
      action : "publish"
    }).then(function(response){
      console.log("post published");
    });

    let currentFeed = this.state.feeds;
    currentFeed.splice(feedIndexNumber, 1);
    this.setState({
      feeds : currentFeed
    });
  }

// User Actions Methods ... 

  toogleUserActionPanel = (selectCounter) => {
    if(selectCounter == 0)
    this.setState({userActionPanelActive : false });
    else 
    this.setState({userActionPanelActive : true });
  }

  addSelectedToArray= (feedIndexNumber,feedObjectId) => {
    selected.push({feedIndexNumber : feedIndexNumber , feedObjectId : feedObjectId});
    
  }

  removeSelectedFromArray = (feedIndexNumber,feedObjectId) => {
    selected.forEach(function(element) {
      if(element.feedObjectId == feedObjectId) {
        selected.splice(element.feedIndexNumber,1);
      }
    }, this);
    console.log(selected);
  }
  multiplePublish = () => {
    //console.log(selected);
    selected.map( (value,i) => 
      { 
          this.publishFeedAction(value.feedIndexNumber,value.feedObjectId) ; 
          console.log("published" + value) ;
      } 
    )

    selected = [];
    selectAll = false;
    //console.log("new selected = " + selected);
  }

  multipleDelete = () => {
      selected.map( (value,i) => 
      { 
          this.publishFeedAction(value.feedIndexNumber,value.feedObjectId) ; 
          console.log("published" + value) ;
      } 
    )

    selected = [];
    selectAll = false;
    //console.log("new selected = " + selected);
  }

  multipleArchive = () => {
      selected.map( (value,i) => 
      { 
          this.publishFeedAction(value.feedIndexNumber,value.feedObjectId) ; 
          console.log("published" + value) ;
      } 
    )

    selected = [];
    selectAll = false;
  }

  selectAll = () => {
    selectAll = true;
    //console.log("in select all");
    this.forceUpdate();
  }

  unSelectAll = () => {
    selectAll = false;
    console.log("in unselect all");
    this.forceUpdate();
  }



    render(){
      return(
        <div className="App">
          <div className="stat"/>
          <div className='grid-container'>
          <div className='filters'>
          
          </div>
          <div>
          {this.state.userActionPanelActive ? <UserActionPanel multiplePublish={  this.multiplePublish } multipleArchive = {  this.multipleArchive} multipleDelete = {  this.multipleDelete}   selectAll = {  this.selectAll } unSelectAll = {  this.unSelectAll}/>: null }
              {this.state.feeds.map((value,i) =>{
                if(selectAll) {
                  this.addSelectedToArray(value.feedIndexNumber,value.feedObjectId);
                  return <FeedCard key={i} {...value} indexNumber = {i} deleteFeedAction = { this.deleteFeedAction } archiveFeedAction = { this.archiveFeedAction } publishFeedAction = { this.publishFeedAction }  toogleUserActionPanel = {  this.toogleUserActionPanel  }  addSelectedToArray = { this.addSelectedToArray } selectAll = { true} removeSelectedFromArray = {  this.removeSelectedFromArray}/>
                }
                else {
                  this.removeSelectedFromArray(value.feedIndexNumber,value.feedObjectId);
                  return <FeedCard key={i} {...value} indexNumber = {i} deleteFeedAction = { this.deleteFeedAction } archiveFeedAction = { this.archiveFeedAction } publishFeedAction = { this.publishFeedAction }  toogleUserActionPanel = {  this.toogleUserActionPanel  }  addSelectedToArray = { this.addSelectedToArray } selectAll = { false } removeSelectedFromArray = {  this.removeSelectedFromArray}/>
                }
                
              }) } 
          </div>
          </div>  
        </div>
      );
    }
}
  
export default App;
