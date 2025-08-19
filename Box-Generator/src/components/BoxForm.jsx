
import  { useState } from "react";

function BoxForm({ addBox }) {
  const [color, setColor] = useState("");
  const [size, setSize] = useState(100);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!color) return;
    addBox({ color, size });
    setColor("");
    setSize(100);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="color">Color:</label>
      
      <input
        type="text"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <label htmlFor="size">Size:</label>
      <input
        type="number"
        value={size}
        onChange={(e) => setSize(Number(e.target.value))}
      />
      <button type="submit">Add Box</button>
    </form>
  );
}

export default BoxForm;
