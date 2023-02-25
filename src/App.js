import React from "react";
import "./App.css";
import Header from "./components/Fixed/Header";
import Home from "./components/Home/Home";
import Search from "./components/Fixed/Search";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserStorage } from "./Context";

function App() {
  React.useEffect(() => {
    document.title = "PicSure | Home";
  });

  return (
    <div className="App">
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="search" element={<Search />} />
          </Routes>
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
