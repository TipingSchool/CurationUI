import React, { Component } from 'react';
import FaTrashO from 'react-icons/lib/fa/trash-o';
import FaBookmarkO from 'react-icons/lib/fa/bookmark-o';
import FaCloudUpload from 'react-icons/lib/fa/cloud-upload';
import FaCheckCircleO from 'react-icons/lib/fa/check-circle-o';
import './App.css';
import Modal from './modal/modal';
import node1 from '../Categories/node1.png';
import CheckBoxBlank from 'react-icons/lib/md/check-box-outline-blank' ;
import CheckBox from 'react-icons/lib/md/check-box';


let selectCounter = 0;

class FeedCard extends Component{    
  constructor(props){
    super(props);
      this.state = {
        isModalOpen: false,
        isSelected : false,
      }; 
    }

    isSelected = false;

    componentWillReceiveProps(nextProp){
      //console.log("is selected is " + this.state.isSelected + "  next props is " + nextProps );
      if(this.props._id !== nextProp._id) {
        this.isSelected = false;
        console.log("this props is " + this.props.selectAll + "  next is " + nextProp.selectAll);
      }

      if(nextProp.selectAll == true) {
        this.isSelected = true;
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

    // Multiple Operations

    multipleSelect = () => {
      this.props.addSelectedToArray(this.props.indexNumber,this.props._id);
      ++selectCounter;
      this.props.toogleUserActionPanel(selectCounter);
      this.setState({isSelected : !(this.state.isSelected)});
      console.log("multi is  " + this.state.isSelected);
      this.isSelected = true;
    }

  

    unSelect = () => {
      --selectCounter;
      this.props.removeSelectedFromArray(this.props.indexNumber,this.props._id);
      console.log("slect counter is " + this.state.isSelected);
      if(selectCounter == 0 ) {
        this.props.toogleUserActionPanel(selectCounter);
      }
      this.setState({isSelected : false});
      this.isSelected=false;
      
    }

  render(){
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
                    <date>{ new Date(this.props.date).toDateString() }</date>
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
              { this.isSelected ? <CheckBox className="selectIcon" onClick = {this.unSelect } /> : <CheckBoxBlank className="selectIcon" onClick = { this.multipleSelect } /> }
                  <span id = "selectHighlight" className = "hoverText">Select</span><br/>
                  <FaTrashO className = "deleteIcon" onClick = { this.deleteFeedFunctionLocal } />
                  <span id = "deleteHighlight" className = "hoverText">Delete</span><br/>
                  <FaBookmarkO className = "archiveIcon" onClick = { this.archiveFeedFunctionLocal } />
                  <span id = "archiveHighlight" className = "hoverText" >Archive</span><br/>
                  <FaCloudUpload className = "publishIcon" onClick = { this.publishFeedFunctionLocal } />
                  <span id = "publishHighlight" className = "hoverText">Publish</span> 
              </div>
          
    </div>
    );
  }
}


export default FeedCard;