import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landingpage from "./components/Landing Page/landingPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Landingpage />} />{" "}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
