import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./Homepage";
import Severity from "./Severity";
import Coordinate from "./Coordinate";

function App() {
  return (
    <>
      <Router>
        <div className="app">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/severity" element={<Severity />} />
            <Route path="/coordinates" element={<Coordinate />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
