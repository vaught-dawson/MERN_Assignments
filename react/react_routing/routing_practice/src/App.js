import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import TextPage from "./pages/TextPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/:text" element={<TextPage />} />
          <Route path="/:text/:color" element={<TextPage />} />
          <Route path="/:text/:color/:backgroundColor" element={<TextPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
