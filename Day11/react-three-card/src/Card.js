//import React from "react";
//import "./Card.css"; // Import CSS for styling

//function Card({ title, content, color }) {
  //return (
    //<div className="card" style={{ backgroundColor: color }}>
      //<h2>{title}</h2>
      //<p>{content}</p>
    //</div>
  //);
//}

import React from "react";
import "./Card.css"; // Import CSS for styling

function Card({ title, content, color, button}) {

  const handleClick = () => {
    alert(`You clicked on the card: ${title}`);
  };
  return (
    <div className="card" style={{ backgroundColor: color }}>
      <h2>{title}</h2>
      <p>{content}</p>
      <button onClick={handleClick} className="card-button" style={{ backgroundColor: button }}>
        Click Me!
      </button>
    </div>
  );
}

export default Card;