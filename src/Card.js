import React, { Component } from "react";

class Card extends Component{

 render(){
    let {name, id, email }= this.props;
     return(
        <div className="card bg-light-green dib pa3 br3 ma2 grow bw2 shadow-5">
            <img src={`https://robohash.org/${id}?200x200`} alt="Robot"/>
            <div>
            <h2 className="card-name">{name}</h2>
            <p className="card-email">{email}</p>
            </div>
        </div>
    );
  }
}

export default Card;
