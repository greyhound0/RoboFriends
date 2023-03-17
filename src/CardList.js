import React from "react";
import Card from "./Card";

const CardList = ({robot,i})=>{
    const CardArray = robot.map((user,i)=> <Card id={user.id} name={user.name} username={user.username}/>)
    return(
          <div>
              {CardArray}
          </div>
        );
    
}

export default CardList