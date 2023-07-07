import React, {Component} from "react";
import Card from "./Card";

class CardList extends Component{

    render(){
    let { RobotList } = this.props;
    let cardsArray = RobotList.map((robot) => {
        return <Card key={robot.id} name={robot.name} id={robot.id} email={robot.email}/>
    });
        return(
        <>
            {cardsArray}
        </>
        );
    }
}

export default CardList
