import "./App.css";

import Navbar from "./Components/Navbar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import About from "./pages/About"
import Careers from "./pages/Careers"
import Contact from "./pages/Contact"
function App() {
  return (
    <>  
      
      <Router>
      <Navbar/>
        <div>
          <Routes>
            <Route exact path ="/" element = {<Home/>}/>
            <Route exact path ="/about" element = {<About/>}/>
            <Route exact path ="/career" element = {<Careers/>}/>
            <Route exact path ="/contact" element = {<Contact/>}/>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
