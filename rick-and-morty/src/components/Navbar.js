import React from "react";
import Logo from "../assets/Rick-and-Morty-logo.png";
import { NavLink } from "react-router-dom";
import Search from "./SearchBar";

const Navbar = ({ setSearch, setPageNumber, showSearch = true }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid justify-content-start">
        <button
          className="navbar-toggler bg-dark"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon text-white h4"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <NavLink to="/" className="navbar-brand  me-auto">
            <img
              src={Logo}
              alt=""
              className="img-responsive"
              width="300px"
              height="100px"
            />
          </NavLink>
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <h1 className="navbar-nav text-white me-auto"> Rick & Morty</h1>
        </div>
        <div
          className="collapse navbar-collapse  justify-content-end"
          id="navbarSupportedContent"
        >
          {showSearch && (
            <Search setSearch={setSearch} setPageNumber={setPageNumber} />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
