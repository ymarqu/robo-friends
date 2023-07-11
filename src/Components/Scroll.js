import React, { Component } from "react";

class Scroll extends Component{
render(){
return(
    <div className="scroll" style={{ overflowY: 'scroll', border: '3px solid black', height: '1000px'}}>
      {this.props.children};
    </div>
   )
 }
}

export default Scroll;
