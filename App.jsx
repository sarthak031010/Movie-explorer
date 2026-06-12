import { Routes, Route } from "react-router-dom";
import Homepage from "./homepage";
import Home from "./home";
import Detail from "./detail";
import Endgame from "./endgame";
import EvilDead from "./EvilDead";
import Extraction from "./Extraction";
import Fast from "./Fast";
import GhostRider from "./GhostRider";
import IceAge from "./IceAge";
import JhonnyEnglish from "./JhonnyEnglish";
import Jumangi from "./Jumangi";
import MrBean from "./MrBean";
import Avatar from "./avatar";
import Tomandjerry from "./tomandjerry";
import Terminator from "./Terminator";
import TokiyoDrift from "./TokiyoDrift";
import Search from "./search";
import Favorite from "./favorite";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />

      <Route path="/home" element={<Home />} />

      <Route path="/detail" element={<Detail />} />

      <Route path="/endgame" element={<Endgame />} />

      <Route path="/EvilDead" element={<EvilDead />} />

      <Route path="/Extraction" element={<Extraction />} />

      <Route path="/Fast" element={<Fast />} />

      <Route path="/GhostRider" element={<GhostRider />} />

      <Route path="/IceAge" element={<IceAge />} />

      <Route path="/movie/:kesh" element={<JhonnyEnglish />} />

      <Route path="/Jumangi" element={<Jumangi />} />

      <Route path="/MrBean" element={<MrBean />} />

      <Route path="/avatar" element={<Avatar />} />

      <Route path="/tomandjerry" element={<Tomandjerry />} />

      <Route path="/Terminator" element={<Terminator />} />

      <Route path="/TokiyoDrift" element={<TokiyoDrift />} />

      <Route path="/search" element={<Search />} />

      <Route path="/favorite" element={<Favorite />} />
    </Routes>
  );
}

export default App;
