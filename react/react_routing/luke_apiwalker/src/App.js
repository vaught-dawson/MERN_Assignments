import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavigationContext } from "./context/NavigationContext";
import SearchBar from "./components/SearchBar";
import HomePage from "./pages/HomePage";
import Info from "./pages/Info";

function App() {
  const [catagory, setCatagory] = useState(
    JSON.parse(localStorage.getItem("last-catagory")) || []
  );
  const [id, setId] = useState(
    JSON.parse(localStorage.getItem("last-id")) || []
  );

  useEffect(() => {
    localStorage.setItem("last-catagory", JSON.stringify(catagory));
    localStorage.setItem("last-id", JSON.stringify(id));
  }, [catagory, id]);

  return (
    <div className="App">
      <BrowserRouter>
        <NavigationContext.Provider
          value={{ catagory, setCatagory, id, setId }}
        >
          <SearchBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/:catagory/:id" element={<Info />} />
          </Routes>
        </NavigationContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
