import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import Contacts from "./pages/Contacts/Contacts";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./App.scss";

function App() {
  return (
    <Router>
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
