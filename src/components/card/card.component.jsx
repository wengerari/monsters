import React from "react";
import "./card.styles.css";

export const Card = props => (
        <div className="card-container">
            <img src={`https://robohash.org/${props.monster.id}.png?size=200x200`} />
            <p>{props.monster.name}</p>
            <p>{props.monster.email}</p>
        </div>
);