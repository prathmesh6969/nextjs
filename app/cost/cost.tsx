import React, { useState } from "react";

const Cost = () => {
  const [price, setPrice] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(1);

  const total = price * quantity;

  return (
    <div>
      <h2>Cost Calculator</h2>

      <input
        type="number"
        placeholder="Enter price"
        value={price}
        onChange={(e) => setPrice(Number(e.target.value))}
      />

      <input
        type="number"
        placeholder="Enter quantity"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      />

      <h3>Total Cost: ₹{total}</h3>
    </div>
  );
};

export default Cost;