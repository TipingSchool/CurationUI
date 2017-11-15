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

    render(){
        return(
            <div>
                <div>
                    <ul>Categories
                        <li><Link  to='/feeds/nodejs' >Nodejs</Link></li>
                        <li><Link  to='/feeds/react' >Reactjs</Link></li>
                        <li><Link  to='/feeds/mongodb' >MongoDB</Link></li>
                        <li><Link  to='/feeds/devops' >DevOps</Link></li>
                        <li><Link  to='/feeds/javascript' >JavaScript</Link></li>
                        <li><Link  to='/cat' >More....</Link></li>
                    </ul>
                </div>
                <div className ="publishedBtn" onClick ={this.findpublished}> Published  </div>
                <div className ="unpublishedBtn" onClick ={this.findunpublished}> Unpublished </div>
                <div className ="archiveBtn" onClick ={this.findarchive}> Archive  </div>
                <div className ="publisharchiveBtn" onClick ={this.findpublisharchive}> Publish Archive  </div>
                <div className ="unpublisharchiveBtn" onClick ={this.findunpublisharchive}> Unpublish Archive  </div>
                <div className ="latest100Btn" onClick ={this.latest100}> Latest 100 </div>
            </div>
        )
    }
}


export default withRouter(App);