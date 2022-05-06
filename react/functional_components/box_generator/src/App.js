import "./App.css";
import { useState } from "react";
import Box from "./components/Box";
import Form from "./components/Form";

const initialState = {
  boxes: [
    {
      color: "red",
      size: 200,
    },
    {
      color: "blue",
      size: 200,
    },
    {
      color: "purple",
      size: 200,
    },
  ],
};

function App() {
  const [boxState, setBoxState] = useState(initialState);

  return (
    <div className="App">
      <Form boxState={boxState} setBoxState={setBoxState} />
      <div className="boxes">
        {boxState.boxes.map((b, i) => (
          <Box color={b.color} key={i} size={b.size} />
        ))}
      </div>
    </div>
  );
}

export default App;
