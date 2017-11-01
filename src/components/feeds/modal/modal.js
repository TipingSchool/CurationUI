import React, { Component } from 'react';
import './modal.css';
import node1 from './node1.png'
import FaClose from 'react-icons/lib/fa/close';




class Modal extends Component{
  constructor(props){
    super(props);
  }
  
  close = () => {
    this.props.onClose();
  }

   render(){
     if(this.props.isOpen === false){
       return null;
     }

     return(
       <div>
         <div className='modal-box'>
         <p className='close'><FaClose onClick={ this.props.onClose }/></p>
            <div className='modal-img'>
              <img className='' src={node1} alt='try'/>
            </div>
            <div className=''>
              <p className='modal-title'> {this.props.child.title}</p>
              
              <div className='modal-author'>
                <p> {this.props.child.creator}</p>
                <p>{new Date(this.props.child.date).toDateString()}</p>
              </div>
              <div className='modal-description'>{this.props.child.description} </div>
              <div  ><a className='modal-link' href={this.props.child.link} target='#'>Visit Website</a> </div>
            </div>
         </div>
         <div className = "backdropstyle" onClick={ this.close }/>
       </div>
     )
   }
}


export default Modal;