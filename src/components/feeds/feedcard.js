import React, { Component } from 'react';
import FaCheckCircleO from 'react-icons/lib/fa/check-circle-o';
import './App.css';
import Modal from './modal/modal';
import action,{Action1,Action2} from './action';
import node1 from '../Categories/node1.png';
import CheckBoxBlank from 'react-icons/lib/md/check-box-outline-blank' ;
import CheckBox from 'react-icons/lib/md/check-box';
// import  from '../facets/App';

let selectCounter = 0;
let flag = true;

class FeedCard extends Component{    
  constructor(props){
    super(props);
      this.state = {
        isModalOpen: false,
        isFeedSelected: false,
        isSelectAll : this.props.selectAll,
        isUnSelectAll : this.props.unSelectAll,
        time: ''
      }; 
    }

    componentWillReceiveProps(nextProp, nextState) {

      var date = new Date(this.props.date);
      var now = new Date();
      var diff = Math.abs(now-date)
       switch(true){

      case (diff<1000) :
              this.setState({time:`${parseInt(diff)}`+" "+'mS ago'});
              break;
      
      case (diff<60000) :
              this.setState({time:`${parseInt(diff/1000)}`+" "+'S ago'});
              break;
              
      case (diff<3600000) :
              this.setState({time:`${parseInt(diff/60000)}`+" "+'min ago'});
              break;

      case (diff<86400000) :
              this.setState({time:`${parseInt(diff/3600000)}`+" "+'hr ago'});
              break;

      case (diff<2592000000) :
              this.setState({time:`${parseInt(diff/86400000)}`+" "+'days ago'});
              break;
      
      case (diff<31104000000) :
              this.setState({time:`${parseInt(diff/2592000000)}`+" "+'months ago'});
              break;
      
      case (diff>31104000000) :
              this.setState({time:`${parseInt(diff/31104000000)}`+" "+'years ago'});
              break;

      default:
              this.setState({time:this.props.date});

    }




      //////////////////////////////////////////////////////
      if(nextProp._id  !== this.props._id ) {
        this.setState({isFeedSelected : false});
      }

      //console.log(nextProp.unSelectAll + " jhg " + this.props.selectAll );

      if(nextProp.selectAll == true && this.state.isSelectAll == false ) {
        this.setState({isFeedSelected : true});
        this.setState({isSelectAll : true});
        this.setState({isUnSelectAll : false});
      }

     // console.log(" is next prop unselectall : " + nextProp.unSelectAll + " and this state unselectall is " + this.state.isUnSelectAll);

      if(nextProp.unSelectAll == true && this.state.isUnSelectAll == false  && this.props.unSelectAll == false ) {
        //console.log("inseide as;dlk;aslkdasda;sjfkdjlkfds");
          this.setState({isUnSelectAll : true});
          this.setState({isFeedSelected : false });
          this.setState({isSelectAll : false});
        }

      if(nextProp.unSelectAll == true && this.state.isSelectAll == true ) {
         this.setState({isFeedSelected : false});
         this.setState({isUnSelectAll : false });
         this.setState({isSelectAll : false});
        }      
    }
    
    openModal = () => {
      this.setState({isModalOpen:!(this.state.isModalOpen)});
    }
    
    

    deleteFeedFunctionLocal = () => {
      this.props.deleteFeedAction(this.props.indexNumber, this.props._id);
    }

    archiveFeedFunctionLocal = () => {
      this.props.archiveFeedAction(this.props.indexNumber, this.props._id);
    }

    publishFeedFunctionLocal = () => {
      this.props.publishFeedAction(this.props.indexNumber, this.props._id);
    }

    unpublishFeedFunctionLocal = () => {
      this.props.unpublishFeedAction(this.props.indexNumber, this.props._id);
    }

    // Multiple Operations

    multipleSelect = () => {
      this.props.addSelectedToArray(this.props.indexNumber,this.props._id);
      ++selectCounter;
      this.props.toogleUserActionPanel(selectCounter);
      this.setState({isFeedSelected : true, isUnSelectAll : false });
    
      
      //console.log(" state in multiselect is "+ this.state.isUnSelectAll);
    }

  

    unSelect = () => {
      --selectCounter;
      this.props.removeSelectedFromArray(this.props.indexNumber,this.props._id);
      if(selectCounter == 0 ) {
        this.props.toogleUserActionPanel(selectCounter);
        //this.setState({isUnSelectAll : true});
        //this.setState({isSelectAll : true});
      }

      this.setState({isFeedSelected : false});
      
    }

    componentWillMount(){
      // var date = new Date(this.props.date);
      // var now = new Date();
      // var diff = Math.abs(now-date)/3600000
      // this.setState({time:this.props.date})
    
        var date = new Date(this.props.date);
        var now = new Date();
        var diff = Math.abs(now-date)
         switch(true){
  
        case (diff<1000) :
                this.setState({time:`${parseInt(diff)}`+" "+'mS ago'});
                break;
        
        case (diff<60000) :
                this.setState({time:`${parseInt(diff/1000)}`+" "+'S ago'});
                break;
                
        case (diff<3600000) :
                this.setState({time:`${parseInt(diff/60000)}`+" "+'min ago'});
                break;

        case (diff<86400000) :
                this.setState({time:`${parseInt(diff/3600000)}`+" "+'hr ago'});
                break;

        case (diff<2592000000) :
                this.setState({time:`${parseInt(diff/86400000)}`+" "+'days ago'});
                break;
        
        case (diff<31104000000) :
                this.setState({time:`${parseInt(diff/2592000000)}`+" "+'months ago'});
                break;
        
        case (diff>31104000000) :
                this.setState({time:`${parseInt(diff/31104000000)}`+" "+'years ago'});
                break;

        default:
                this.setState({time:this.props.date});
  
      }
  

    }

    
  render(){
    var actionPanel;
      if(this.props.published){
        actionPanel=<Action1 deleteFeedFunctionLocal={this.deleteFeedFunctionLocal} archiveFeedFunctionLocal={this.archiveFeedFunctionLocal} unpublishFeedFunctionLocal={this.unpublishFeedFunctionLocal} />;
      console.log('published');
      }
      else{
        actionPanel=<Action2 deleteFeedFunctionLocal={this.deleteFeedFunctionLocal} archiveFeedFunctionLocal={this.archiveFeedFunctionLocal} publishFeedFunctionLocal={this.publishFeedFunctionLocal} />
        console.log('unpublished');
      }
      
    return(
    <div>
          <div className = "feed-card-box" onClick={this.openModal}>
              <div className='img-card col-md-3'>
                  <img className = "feed-card-img" src={ node1 } alt='try'/>
              </div>
            <div className='description-box col-md-9'>
                <p className='heading'> {this.props.title }</p>
                <div>
                    <author> {this.props.creator.substring(0,20) }</author>
                    <date>{this.state.time}</date>
                    {/* <date>{ new Date(this.props.date).toDateString() }</date> */}
                </div>
              <div className='description'>
                  { this.props.description.substring(0,150) + '...' }
              </div>     
              <div>
                  <Modal isOpen={this.state.isModalOpen} onClose={this.openModal}  child={this.props}/>
              </div>
            </div>
          </div> 
          <div className = "actionButtonsDiv">
                { this.state.isFeedSelected ? <CheckBox className="selectIcon" onClick = {this.unSelect } /> : <CheckBoxBlank className="selectIcon" onClick = { this.multipleSelect } /> }
                <span id = "selectHighlight" className = "hoverText">Select</span><br/>
              {actionPanel}
            </div>   
    </div>
    );
  }
}


export default FeedCard;