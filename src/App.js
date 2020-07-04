import React from "react";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import RightPanel from "./components/RightPanel/RightPanel";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <RightPanel />
    </div>
  );
}

export default App;
