import { Routes, Route } from "react-router-dom";
import Homepage from "./homepage";
import Home from "./home";
import Detail from "./detail";
import JhonnyEnglish from "./JhonnyEnglish";
import Search from "./search";
import Favorite from "./favorite";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />

      <Route path="/home" element={<Home />} />

      <Route path="/detail" element={<Detail />} />  

      <Route path="/movie/:kesh" element={<JhonnyEnglish />} />

      <Route path="/search" element={<Search />} />

      <Route path="/favorite" element={<Favorite />} />
    </Routes>
  );
}

export default App;
