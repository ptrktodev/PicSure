import React from "react";
import "./Header.css";
import { ReactComponent as Logo } from "../../assets/ori.svg";

const Header = () => {
  return (
    <section className="container">
      <div className="Header">
        <Logo />
      </div>
    </section>
  );
};

export default Header;
