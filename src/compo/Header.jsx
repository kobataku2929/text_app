import React from "react";
import { NavLink } from "react-router-dom";

import "./Header.css";

const header = () => {
  return (
    <header>
      <div className="logo">
        <h3>教科書王国</h3>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">検索</NavLink>
          </li>
          <li>
            <NavLink to="/AddPost">寄付・投稿</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default header;
