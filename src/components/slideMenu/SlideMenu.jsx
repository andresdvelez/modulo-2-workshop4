import React from "react";
import "./SlideMenu.scss";

import closeIcon from "../../assets/shared/icon-close.svg";
import { NavLink } from "react-router-dom";

function SlideMenu({ shown, setShown, links }) {
  return (
    <div className={`slide-menu ${shown && "active"}`}>
      <div className="slide-menu__header">
        <button
          className="slide-menu__header-closeBtn"
          onClick={() => setShown(!shown)}
        >
          <img src={closeIcon} alt="" />
        </button>
      </div>
      <ul className="slide-menu__body">
        {links.map((link) => (
          <li className="slide-menu__body-link" key={link.id}>
            <NavLink to={link.route}>
              <span>{link.id}</span>
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SlideMenu;
