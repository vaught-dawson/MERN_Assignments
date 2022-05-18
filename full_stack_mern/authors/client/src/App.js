import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Edit from "./views/Edit";
import Main from "./views/Main";
import New from "./views/New";

function App() {
  return (
    <div className="App" style={{ marginLeft: "10%", marginTop: "24px" }}>
      <BrowserRouter>
        <h1>Favorite authors</h1>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/new" element={<New />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="*" element={<></>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
