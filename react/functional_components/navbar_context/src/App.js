import { useState } from "react";
import "./App.css";
import FormWrapper from "./components/FormWrapper";
import Navbar from "./components/Navbar";
import { WrapperContext } from "./context/Wrapper";

function App() {
  const [name, setName] = useState("User");

  return (
    <div className="App">
      <WrapperContext.Provider value={{ name, setName }}>
        <Navbar />
        <FormWrapper />
      </WrapperContext.Provider>
    </div>
  );
}

export default App;
