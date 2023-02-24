import React from "react";
import "./App.css";
import Header from "./components/Fixed/Header";
import Home from "./components/Home/Home";

function App() {
  React.useEffect(() => {
    document.title = "PicSure | Home";
  });

  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
