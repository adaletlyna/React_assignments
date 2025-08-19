
import './App.css';
import  { useState } from "react";
import BoxForm from "./components/BoxForm";
import BoxList from "./components/BoxList";

function App() {
  const [boxes, setBoxes] = useState([]);

  const addBox = (box) => {
    setBoxes([...boxes, box]);
  };

  const deleteBox = (index) => {
    setBoxes(boxes.filter((_, i) => i !== index));
  };


  return (
    <div>
      <h1>Box Generator Master</h1>
      <BoxForm addBox={addBox} />
      <BoxList boxes={boxes} deleteBox={deleteBox} />
    </div>
  );
}

export default App;


