import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';



class App extends Component {
    constructor(props){
        super(props);

        console.log(this);
    }
   
   findpublished =() => {

        console.log(this)
       this.props.history.push(this.props.location.pathname + '?state=pub')
   }

   findunpublished =() => {
          console.log(this);
       this.props.history.push(this.props.location.pathname+ '?state=unpub')
   }
   
   findarchive =() => {
    console.log(this);
    this.props.history.push(this.props.location.pathname+ '?state=arch')
   } 

   findpublisharchive =() => {
    console.log(this);
    this.props.history.push(this.props.location.pathname+ '?state=pubarch')
   } 

   findunpublisharchive =() => {
    console.log(this);
    this.props.history.push(this.props.location.pathname+ '?state=unpubarch')
   } 

    render(){
        return(
            <div>
                <div className ="publishedBtn" onClick ={this.findpublished}> Published  </div>
                <div className ="unpublishedBtn" onClick ={this.findunpublished}> Unpublished </div>
                <div className ="archiveBtn" onClick ={this.findarchive}> Archive  </div>
                <div className ="publisharchiveBtn" onClick ={this.findpublisharchive}> Publish Archive  </div>
                <div className ="unpublisharchiveBtn" onClick ={this.findunpublisharchive}> Unpublish Archive  </div>
            </div>
        )
    }
}


export default withRouter(App);