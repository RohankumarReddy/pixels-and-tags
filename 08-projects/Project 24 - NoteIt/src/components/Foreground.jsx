// File: src/components/Foreground.jsx
import React, { useRef, useState } from "react";
import { FaPlus } from "react-icons/fa";
import Card from "./Card.jsx"; // Import the Card component

const Foreground = () => {
  const constraintsRef = useRef(null);

  const initialData = [
    {
      id: 1,
      desc: "Add a title and start typing!",
      
      tag: { isOpen: true, tagLine: "Important" },
    },
  ];

  const [cards, setCards] = useState(initialData);

  const handleAddCard = () => {
    const newCard = {
      id: Date.now(),
      desc: "Enter a title and description",
      
      tag: { isOpen: false, tagLine: "" },
    };
    setCards([...cards, newCard]);
  };

  const handleDeleteCard = (id) => {
    setCards(cards.filter((card) => card.id !== id));
  };

  const handleUpdateCard = (id, newDesc) => {
    setCards(
      cards.map((card) =>
        card.id === id ? { ...card, desc: newDesc } : card
      )
    );
  };

  return (
    <>
      {/* Button to add a new note */}
      <button
        onClick={handleAddCard}
        className="fixed top-9 left-5  z-[100] p-4 bg-zinc-600 text-white rounded-full shadow-lg hover:bg-zinc-500 transition-colors"
        aria-label="Add new note"
      >
        <FaPlus />
      </button>

      {/* This is the area where cards can be dragged */}
      <div
        ref={constraintsRef}
        className="fixed inset-0 z-10 flex flex-wrap gap-6 p-5"
      >
        {cards.map((data) => (
          <Card
            key={data.id}
            data={data}
            constraints={constraintsRef}
            onDelete={handleDeleteCard}
            onUpdate={handleUpdateCard}
          />
        ))}
      </div>
    </>
  );
};

export default Foreground;