// import React, { Component } from 'react';
// import "./App.css";

// const UserActions_style1 = {
//     position: "fixed",
//     marginTop: "50px",
//     marginLeft: "1080px",
//     width: "255px",
//     display : "none"
// };

// const UserActions_style2 = {
//     position: "fixed",
//     marginTop: "50px",
//     marginLeft: "1080px",
//     width: "255px",
//     display : "block"
// }

// class UserActions extends Component{
//     constructor(props){
//         super(props);
//     }

//     render(){
//         if(this.props.UserActionDisplay){
//             return(
//                 <div style = { UserActions_style1 }>
//                     <button className = "userButton userPublish">Publish</button>
//                     <button className = "userButton userArchive">Archive</button>
//                     <button className = "userButton userDelete">Delete</button>
//                 </div>
//             );
//         }
//         else{
//                 return(
//                     <div style = { UserActions_style2 }>
//                         <button className = "userButton userPublish">Publish</button>
//                         <button className = "userButton userArchive" onClick = { this.props.archiveFeedAction }>Archive</button>
//                         <button className = "userButton userDelete" onClick = { this.props.deleteFeedAction }>Delete</button>
//                         <div>{ this.props.selectedCount } selected(I will style it later)</div>
//                     </div>
//                 );
//             }
//         }
//     }

// export default UserActions;