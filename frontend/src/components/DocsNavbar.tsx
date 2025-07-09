import { Link, useLocation } from "react-router-dom";

import "../styles/Navbar.css";
import { NAVBAR_ITEMS, type NavLink } from "../constants/NavLinks";

export default function DocsNavbar() {
  const location = useLocation();

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
      <Link to={subItem.url} className={commonClasses} key={subItem.id}>
        <span className="navbar-link">{subItem.name}</span>
      </Link>
    );
  };

  return (
    <>
      <div className="navbar-container">
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
