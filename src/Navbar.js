import React, { useState } from "react";
import { MdMenu } from "react-icons/md";
import { links, social } from "./data";
import logo from "./logo.svg";
import "./Navbar.css";
function Navbar() {
  const [detail, showdetail] = useState(true);

  const toggleLink = () => {
    console.log(1);
    showdetail(!detail);
  };

  return (
    <nav>
      <div className="nav-bar">
        <div className="nav">
          <img src={logo} className="logo" alt="logo" />
          <button className="nav-toggle" onClick={toggleLink}>
            <MdMenu />
          </button>
        </div>

        <div
          className={` ${
            detail ? " show-container link-container" : " link-container "
          } `}
        >
          <ul className="links">
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li
                  key={id}
                  style={{
                    textTransform: "capitalize",
                    fontSize: "1rem",
                    display: "block",
                    padding: "0.5rem 1rem",
                  }}
                >
                  <a
                    style={{ cursor: "pointer", textDecoration: "none " }}
                    href={url}
                  >
                    {text}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="">
          <ul className="social-links">
            {social.map((link) => {
              const { id, url, icon } = link;
              return (
                <li
                  key={id}
                  style={{
                    textTransform: "capitalize",
                    fontSize: "1rem",
                    display: "block",
                    padding: "0.5rem 1rem",
                  }}
                >
                  <a
                    style={{ cursor: "pointer", textDecoration: "none " }}
                    href={url}
                  >
                    {icon}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
