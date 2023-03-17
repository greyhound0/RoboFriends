import React from "react";

const Card = ({id, name, username})=>{
    return(
        <div className="bg-light-green tc dib br3 pa3 ma2 grow bw2 shadow-5">
            <img alt="robot" src={`https://robohash.org/${id}?200*200`}/>
            <div>
                <h2>{name}</h2>
                <p>{username}</p>
            </div>
        </div>
    )
}

export default Card