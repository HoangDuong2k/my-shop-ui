import Header from "./components/pages/Header";
import Home from "./components/pages/Home/Home";
import All from "./components/pages/All/All";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all" element={<All />} />
      </Routes>
    </div>
  );
}

export default App;
