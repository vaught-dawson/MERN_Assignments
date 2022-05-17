import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./views/Main";
import ProductEditPage from "./views/ProductEditPage";
import ProductInfoPage from "./views/ProductInfoPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/:id" element={<ProductInfoPage />} />
          <Route path="/:id/edit" element={<ProductEditPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
