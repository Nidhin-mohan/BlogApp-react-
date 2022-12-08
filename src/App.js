import Home from "./Home";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Create from "./Create";


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />

            {/*
             react router outdated stuff
            <Route path="/">
              <Home />
            </Route>
            <Route path="/">
              <Create />
            </Route> */}
          </Routes>

       
        </div>
      </div>
    </Router>
  );
}

export default App;
