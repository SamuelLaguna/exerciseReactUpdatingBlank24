
import React, { useState } from 'react';

const UpdatePizza = () => {
  const [pizza, setPizza] = useState({
    name: 'King Arthur Supreme',
    toppings: ['Mushroom,', 'Onions,'],
  });

 
  const handleClick = () => {
    const updatedToppings = [...pizza.toppings];
    updatedToppings.push('Cheese');
    setPizza({...pizza, toppings: updatedToppings,});
  };

  return (
    <>
    <div>
      <h2>{pizza.name}</h2>
      <p>Toppings: {pizza.toppings.join(', ')}</p>
      <button onClick={handleClick}>Add Cheese</button>
    </div>
    </>
  );
};

export default UpdatePizza;