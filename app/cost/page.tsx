"use client";

import { useState } from "react";

export default function CostPage() {
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const total = price * quantity;

  return (
    <main
      style={{
        maxWidth: "500px",
        margin: "50px auto",
        padding: "30px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1>Cost Calculator</h1>

      <div style={{ marginBottom: "20px" }}>
        <label>Price</label>
        <br />

        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          placeholder="Enter price"
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "5px",
          }}
        />
      </div>

      <div style={{ marginBottom: "20px" }}>
        <label>Quantity</label>
        <br />

        <input
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "5px",
          }}
        />
      </div>

      <div
        style={{
          padding: "20px",
          backgroundColor: "#f2f2f2",
          borderRadius: "8px",
        }}
      >
        <h2>Total Cost</h2>
        <p style={{ fontSize: "24px", fontWeight: "bold" }}>
          ₹{total}
        </p>
      </div>
    </main>
  );
}