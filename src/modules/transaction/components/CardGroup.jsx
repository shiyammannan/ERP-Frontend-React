import React from 'react';
import Card from './Card';
import { faUsers } from "@fortawesome/free-solid-svg-icons";

const CardGroup = () => {
  const cardData = [
    { icon: faUsers, title: "Students Paid", value: "2,000" },
    { icon: faUsers, title: "Students Pending", value: "1,800" },
    { icon: faUsers, title: "Total Amount Paid", value: "150" },
    { icon: faUsers, title: "Total Amount Pending", value: "150" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {cardData.map((card, index) => (
        <Card key={index} icon={card.icon} title={card.title} value={card.value} />
      ))}
    </div>
  );
};

export default CardGroup;
