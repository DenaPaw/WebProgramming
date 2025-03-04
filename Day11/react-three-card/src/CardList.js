import React from "react";
import Card from "./Card";

function CardList() {
  const cards = [
    { title: "Card 1", content: "First", color: "black", button: "blue"},
    { title: "Card 2", content: "Second", color: "gray", button: "white" },
    { title: "Card 3", content: "Third", color: "Blue", button: "gray" },
  ];

  return (
    <div className="container">
      {cards.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
}

export default CardList;