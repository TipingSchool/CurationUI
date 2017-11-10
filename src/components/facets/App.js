import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';



class App extends Component {
    constructor(props){
        super(props);

        console.log(this);
    }
   
   findpublished =() => {

    //    console.log(this)
       this.props.history.push(this.props.location.pathname + '?state=pub')
   }

    render(){
        return(
            <div>
                <div onClick ={this.findpublished}> Published  </div>
            </div>
        )
    }
}


export default withRouter(App);