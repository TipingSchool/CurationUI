import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import './App.css';
import { Link } from 'react-router-dom'



class App extends Component {
    constructor(props){
        super(props);
        
    }

   
   findpublished =() => {

       this.props.history.push(this.props.location.pathname + '?state=pub')
   }

   findunpublished =() => {
       this.props.history.push(this.props.location.pathname+ '?state=unpub')
   }
   
   findarchive =() => {
    this.props.history.push(this.props.location.pathname+ '?state=arch')
   } 

   findpublisharchive =() => {

    this.props.history.push(this.props.location.pathname+ '?state=pubarch')
   } 

   findunpublisharchive =() => {
    this.props.history.push(this.props.location.pathname+ '?state=unpubarch')
   } 
   
   latest100 =() => {
    console.log(this);
    this.props.history.push(this.props.location.pathname+ '?state=latest100')
   } 

   last7days =() =>{
       this.props.history.push(this.props.location.pathname+ '?state=last7days')
   }
   last14days =() =>{
    this.props.history.push(this.props.location.pathname+ '?state=last14days')
   }
   last21days =() =>{
    this.props.history.push(this.props.location.pathname+ '?state=last21days')
   }

    render(){
        return(
            <div className='facet'>
                <div className='nav1'> &nbsp; &nbsp; &nbsp; Categories
                
                    <ul className='facet-ul'>
                        <li><Link className='cat'  to='/feeds/nodejs' >Nodejs</Link></li>
                        <li><Link className='cat' to='/feeds/react' >Reactjs</Link></li>
                        <li><Link className='cat'  to='/feeds/mongodb' >MongoDB</Link></li>
                        <li><Link className='cat' to='/feeds/devops' >DevOps</Link></li>
                        <li><Link className='cat' to='/feeds/javascript' >JavaScript</Link></li>
                        <li><Link className='cat'  to='/cat' >More....</Link></li>
                    </ul>
                </div>
                <div className='nav' onClick ={this.findpublished}> Published  </div>
                <div className='nav' onClick ={this.findarchive}> Archive  </div>
                <div className='nav' onClick ={this.latest100}> Latest 100 </div>
                <div className='nav' onClick ={this.last7days}> Last 7days </div>
                <div className='nav' onClick ={this.last14days}> Last 14days </div>
                <div className='nav' onClick ={this.last21days}> Last 21days </div>
            </div>
        )
    }
}


export default withRouter(App);