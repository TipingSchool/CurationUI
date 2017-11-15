import React, { Component } from 'react';
import './App.css';
import UserActionPanel from "./userActionPanel";
import FeedCard from './feedcard';
import Facets from '../facets/App'
import axios from 'axios';
import config from '../../config';

const UriPlaceholder = config.api_Url;
let selected = [] ; //Array Containing the Selected Feeds for User Action
let selectAll = false; //to Select All Active Feeds, will work in lazy loading too.
let unSelectAll = false;


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
      })
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

   unpublishFeedAction = (feedIndexNumber, feedObjectId) => {
     var self=this;
    axios.post(`${UriPlaceholder}${self.props.match.url}`,{
          feedObjectId : feedObjectId,
          action : "unpublish"
    }).then(function(response){
      console.log("post unpublished");
    }).catch(function(error){
       console.log(error);
    });

    let currentFeed = this.state.feeds;
    currentFeed.splice(feedIndexNumber,1);
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
    selectAll = false;
    unSelectAll = false;
    
  }

  removeSelectedFromArray = (feedIndexNumber,feedObjectId) => {
    selected.forEach(function(element) {
      if(element.feedObjectId == feedObjectId) {
        selected.splice(element.feedIndexNumber,1);
      }
    }, this);
    selectAll = false ;
    unSelectAll = false;
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
          this.deleteFeedAction(value.feedIndexNumber,value.feedObjectId) ; 
          console.log("Deleted" + value) ;
      } 
    )

    selected = [];
    selectAll = false;
    //console.log("new selected = " + selected);
  }

  multipleArchive = () => {
      selected.map( (value,i) => 
      { 
          this.archiveFeedAction(value.feedIndexNumber,value.feedObjectId) ; 
          console.log("Archived" + value) ;
      } 
    )

    selected = [];
    selectAll = false;
  }

  multipleUnpublish =() =>{
    selected.map( (value,i)=>
    {
      this.unpublishFeedAction(value.feedIndexNumber,value.feedObjectId);
      console.log("Unpublished" + value);
    })
    selected= [];
    selectAll = false;
  }

  selectAll = () => {
    selectAll = true;
    //console.log("in select all");
    unSelectAll = false;
    this.forceUpdate();
  }

  unSelectAll = () => {
    selectAll = false;
    unSelectAll = true;
    
    this.forceUpdate();
  }



    render(){
      return(
        <div className="App">
          <div className="stat"/>
          <div className='grid-container'>
          <div className='filters'>
            <Facets/>
          </div>
          <div>
          {this.state.userActionPanelActive ? <UserActionPanel multiplePublish={  this.multiplePublish } multipleArchive = {  this.multipleArchive} multipleDelete = {  this.multipleDelete} multipleUnpublish = { this.multipleUnpublish }  selectAll = {  this.selectAll } unSelectAll = {  this.unSelectAll}/>: null }
              {this.state.feeds.map((value,i) =>{

                if(selectAll) {
                  this.addSelectedToArray(value.feedIndexNumber,value.feedObjectId);
                  selectAll = true;
                  return <FeedCard key={i} {...value} indexNumber = {i} deleteFeedAction = { this.deleteFeedAction } archiveFeedAction = { this.archiveFeedAction } publishFeedAction = { this.publishFeedAction } unpublishFeedAction = { this.unpublishFeedAction } toogleUserActionPanel = {  this.toogleUserActionPanel  }  addSelectedToArray = { this.addSelectedToArray } selectAll = { true } removeSelectedFromArray = {  this.removeSelectedFromArray} unSelectAll = {unSelectAll}/>
                }
                if(unSelectAll) {
                  this.removeSelectedFromArray(value.feedIndexNumber,value.feedObjectId);
                  unSelectAll = true;
                  return <FeedCard key={i} {...value} indexNumber = {i} deleteFeedAction = { this.deleteFeedAction } archiveFeedAction = { this.archiveFeedAction } publishFeedAction = { this.publishFeedAction } unpublishFeedAction = { this.unpublishFeedAction } toogleUserActionPanel = {  this.toogleUserActionPanel  }  addSelectedToArray = { this.addSelectedToArray } selectAll = { selectAll } removeSelectedFromArray = {  this.removeSelectedFromArray} unSelectAll = {unSelectAll}/>
                }

                return <FeedCard key={i} {...value} indexNumber = {i} deleteFeedAction = { this.deleteFeedAction } archiveFeedAction = { this.archiveFeedAction } publishFeedAction = { this.publishFeedAction }  unpublishFeedAction = { this.unpublishFeedAction }  toogleUserActionPanel = {  this.toogleUserActionPanel  }  addSelectedToArray = { this.addSelectedToArray } selectAll = { selectAll } removeSelectedFromArray = {  this.removeSelectedFromArray} unSelectAll = {unSelectAll}/>
                
              }) } 
          </div>
          </div> 
        </div>
      );
    }
}
  
export default App;