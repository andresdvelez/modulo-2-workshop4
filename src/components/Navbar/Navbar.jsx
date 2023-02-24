import React, { useState } from "react";
import "./style.scss";
import Logo from "../../assets/shared/logo.svg";
import { NavLink } from "react-router-dom";

import burguerIcon from "../../assets/shared/icon-hamburger.svg";
import SlideMenu from "../slideMenu/SlideMenu";

function Navbar() {
  const links = [
    { name: "Home", route: "/", id: "01" },
    { name: "Destination", route: "/destination", id: "02" },
    { name: "Crew", route: "/crew", id: "03" },
    { name: "Technology", route: "/technology", id: "04" },
  ];

  const [shown, setShown] = useState(false);

  const handleShown = () => {
    setShown(!shown);
  };

  return (
    <div className="navbar">
      <div className="navbar__left">
        <figure className="navbar__left-logo">
          <img src={Logo} alt="Logo" />
        </figure>
        <div className="navbar__left-bar"></div>
      </div>
      <button className={`burguer-menu ${shown && 'isShown'}`} onClick={handleShown}>
        <img src={burguerIcon} alt="" />
      </button>
      <SlideMenu shown={shown} setShown={setShown} links={links} />
      <ul className="navbar__right">
        {links.map((link) => (
          <li className="navbar__right-link" key={link.id}>
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

export default Navbar;
