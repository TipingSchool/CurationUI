import React, { Component} from 'react';
import FaTrashO from 'react-icons/lib/fa/trash-o';
import FaBookmarkO from 'react-icons/lib/fa/bookmark-o';
import FaCloudUpload from 'react-icons/lib/fa/cloud-upload';
import FaCloudDownload from 'react-icons/lib/fa/cloud-download';
import './App.css';

class Action1 extends Component{
    constructor(props){
    super(props);
    //console.log(this);
    }
    render(){
        return(
            <div>
                <div>
                  <FaTrashO className = "deleteIcon" onClick = { this.props.deleteFeedFunctionLocal } />
                  <span id = "deleteHighlight" className = "hoverText">Delete</span><br/>
                  <FaBookmarkO className = "archiveIcon" onClick = { this.props.archiveFeedFunctionLocal } />
                  <span id = "archiveHighlight" className = "hoverText" >Archive</span><br/>
                  <FaCloudDownload className = "unpublishIcon" onClick = { this.props.unpublishFeedFunctionLocal } />
                  <span id = "unpublishHighlight" className = "hoverText">Unpublish</span> 
              </div>

           </div>
        )
    }
}

class Action2 extends Component{
    constructor(props){
    super(props);
    //console.log(this);
    }
    render(){
        return(
            <div>
                <div>
                  <FaTrashO className = "deleteIcon" onClick = { this.props.deleteFeedFunctionLocal } />
                  <span id = "deleteHighlight" className = "hoverText">Delete</span><br/>
                  <FaBookmarkO className = "archiveIcon" onClick = { this.props.archiveFeedFunctionLocal } />
                  <span id = "archiveHighlight" className = "hoverText" >Archive</span><br/>
                  <FaCloudUpload className = "publishIcon" onClick = { this.props.publishFeedFunctionLocal } />
                  <span id = "publishHighlight" className = "hoverText">Publish</span> 
              </div>

           </div>
        )
    }
}

export  {
    Action1,
    Action2
}