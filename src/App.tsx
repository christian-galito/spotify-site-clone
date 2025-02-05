import React from "react";

import "./App.css";

import SideContent from "./components/screen/SideContent/SideContent";
import MainContent from "./components/screen/MainContent/MainContent";
import Footer from "./components/screen/Footer/Footer";

function App() {
  return (
    <div className="app-container">
      <SideContent />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
