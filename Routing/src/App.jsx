
import { BrowserRouter, Routes, Route , Navigate} from "react-router-dom";
import Home from "./components/Home";
import Display from "./components/Display";
import StyleWord from "./components/StyleWord";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/" element={<Navigate to="/home"/>}></Route>

        <Route path="/:value" element={<Display/>}></Route>

        <Route path="/:word/:textColor/:backgroundColor" element={<StyleWord/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

