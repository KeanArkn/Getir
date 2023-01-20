import React, { useEffect, useState } from "react";
import cardData from "api/cards.json";

function Cards() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(cardData);
  }, []);

  return (
    <div className="grid grid-cols-3 gap-x-4 ">
      {cards.length &&
        cards.map((card, index) => (
          <div
            key={index}
            className="bg-white p-14 rounded-lg shadow-md flex flex-col items-center text-center"
          >
            <img className="w-[150px] h-[150px] mb-6" src={card.image} />
            <h6 className="font-semibold text-lg text-primary-brand-color ">
              {card.title}
            </h6>
            <p className="mt-2 text-sm text-gray-700">{card.description}</p>
          </div>
        ))}
    </div>
  );
}

export default Cards;
