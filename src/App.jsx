import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";

// import User from './User';
// import Userclassbase from './UserClassbase';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import "./styles.css";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Navbar />
      <Home/>
      <Contact/>
  
      <Routes>
        <Route path="/"/>
        <Route path="/about" element={<h1>About Page</h1>} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
    </Router>
  );
}

export default App
