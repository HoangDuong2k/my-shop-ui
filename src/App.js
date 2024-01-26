import Header from "./components/pages/Header";
import Home from "./components/pages/Home/Home";
import All from "./components/pages/All/All";
import { Routes, Route } from "react-router-dom";
import Cosmetics from "./components/pages/Cosmetics/Cosmetics";
import Houseware from "./components/pages/Houseware/Houseware";
import Ginseng from "./components/pages/Ginseng/Ginseng";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all" element={<All />} />
        <Route path="/cosmetics" element={<Cosmetics />} />
        <Route path="/houseware" element={<Houseware />} />
        <Route path="/ginseng" element={<Ginseng />} />
      </Routes>
    </div>
  );
}

export default App;
