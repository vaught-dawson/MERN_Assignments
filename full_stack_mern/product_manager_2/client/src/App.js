import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./views/Main";
import ProductPage from "./views/ProductPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/:id" element={<ProductPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
