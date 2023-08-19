import React from "react";
import { cardslist } from "./Cardslist";
function Cards() {
  return (
    <div className="cards">
      {cardslist.map((card) => {
        const { id, name, imageUrl, description, price } = card;
        return (
          <article className="menu-item" key={id}>
<div className="flex">            <div className="photo">
            <img src={imageUrl} alt={name} className="ipo"/>
            </div>
            <div className="flexcol">
            <div className="namedesc">
              <h4 className="name">{name}</h4>
              <p className="desc">{description.substring(0,90)}</p>
          </div>
          <button>&{price}</button>
          </div>
</div>          </article>
        );
      })}
    </div>
  );
}

export default Cards;
