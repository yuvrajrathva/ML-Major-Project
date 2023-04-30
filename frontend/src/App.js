import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./Homepage";
import Severity from "./Severity";
import Coordinate from "./Coordinate";
import Eda from "./Eda";

function App() {
  return (
    <>
      <Router>
        <div className="app">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/severity" element={<Severity />} />
            <Route path="/coordinates" element={<Coordinate />} />
            <Route path="/eda" element={<Eda />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
