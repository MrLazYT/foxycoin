import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Tokenomics from "./components/Tokenomics";
import Buy from "./components/Buy";

import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Tokenomics />
      <Buy />
   
      <Footer />
    </div>
  );
}

export default App;
