import React from "react";
import "./Header.css";
import { ReactComponent as Logo } from "../../assets/ori.svg";
import Input from "./Input";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <section className="container">
      <div className="Header">
        <Link to="/">
          <Logo />
        </Link>
        <Input />
      </div>
    </section>
  );
};

export default Header;
