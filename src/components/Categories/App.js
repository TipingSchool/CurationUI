import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import mongo from './mongo.jpg';
import node from './node.png';
import react from './react.png';
import webdev from './webdep.jpg';
import devop from './devops.jpg';
import html from './html.jpg';
import './App.css';

const CatCard_style = {
  textDecoration : "none",
  color : "black"
};

class App extends Component {
        constructor(props){
          super(props);
          this.state ={
            CardValue :[{'imgsrc':mongo, 'title':'MongoDB','name':'mongodb'},{'imgsrc':node, 'title':'NodeJS','name':'nodejs'},{'imgsrc':react, 'title':'ReactJS','name':'reactjs'},
            {'imgsrc':webdev, 'title':'JavaScript','name':'javascript'},{'imgsrc':devop, 'title':'DevOps','name':'devops'},{'imgsrc':html, 'title':'HTML/CSS','name':'html5'},{'imgsrc':webdev, 'title':'Product Management','name':'product'},{'imgsrc':webdev, 'title':'Engineering','name':'engineering'},{'imgsrc':webdev, 'title':'Web Design','name':'design'}]
          }
       
        }

  render() {
   
    return (
      <div className="App">
        <div className="stat">
          </div>
        <div className='flex-container' >
         {this.state.CardValue.map((value,i) =>( <Link key={i} to={`/feeds/${value.name}`  } style={ CatCard_style }>
          <CatCard key={i} {...value}  /></Link>))}
        </div>
      </div>
    );
  }
}



const CatCard = (props) =>(
    <div>
      <div className='cat-card-box' >
        <div>
            <img src={props.imgsrc} className='cat-card-img' alt={props.name}/>
            <p> {props.title} </p>
            </div>
        </div>
      </div>
    );
 

export default App;
