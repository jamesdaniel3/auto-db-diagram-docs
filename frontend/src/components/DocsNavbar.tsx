import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import { NAVBAR_ITEMS, type NavLink } from "../constants/NavLinks";
import arrow from "../assets/images/right-arrow.png";

import "../styles/Navbar.css";

export default function DocsNavbar() {
  const location = useLocation();
  const [isHidden, setIsHidden] = useState(true);

  const handleActivatorClick = () => {
    setIsHidden(false);
  };

  const handleCloseMenu = () => {
    setIsHidden(true);
  };

  useEffect(() => {
    if (!isHidden) {
      // Menu is open - prevent body scroll
      document.body.style.overflow = "hidden";
    } else {
      // Menu is closed - restore body scroll
      document.body.style.overflow = "unset";
    }

    // Cleanup function to restore scroll on unmount
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isHidden]);

  const renderNavLink = (subItem: NavLink) => {
    const commonClasses = `navbar-link-container ${
      location.pathname === subItem.url ? "navbar-link-container--active" : ""
    }`;

    if (subItem.isEmail || subItem.isExternal) {
      return (
        <a
          href={subItem.url}
          className={commonClasses}
          key={subItem.id}
          target={subItem.isExternal ? "_blank" : undefined}
          rel={subItem.isExternal ? "noopener noreferrer" : undefined}
        >
          <span className="navbar-link">{subItem.name}</span>
        </a>
      );
    }

    return (
      <Link
        to={subItem.url}
        className={commonClasses}
        key={subItem.id}
        onClick={handleCloseMenu}
      >
        <span className="navbar-link">{subItem.name}</span>
      </Link>
    );
  };

  return (
    <>
      <div
        className={`navbar-container-activator${
          isHidden ? "" : " navbar-container-activator--hidden"
        }`}
        onClick={handleActivatorClick}
      >
        <button className="mini-tab">
          <span className="arrow-right"></span>
        </button>
      </div>
      <div
        className={`navbar-container${
          isHidden ? "" : " navbar-container--active"
        }`}
      >
        <div className="close-navbar-container" onClick={handleCloseMenu}>
          <img
            src={arrow}
            alt="arrow to close menu"
            style={{ height: "25px", width: "25px" }}
            className="close-navbar-arrow"
          ></img>
        </div>

        {NAVBAR_ITEMS.map((item) => (
          <div key={item.id} className="navbar-section-container">
            <p className="navbar-section-title">{item.title}</p>
            {item.subItems.map(renderNavLink)}
          </div>
        ))}
      </div>
    </>
  );
}
