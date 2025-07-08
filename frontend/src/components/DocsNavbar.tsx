import { Link, useLocation } from "react-router-dom";

import "../styles/Navbar.css";

interface NavLink {
  id: string;
  name: string;
  url: string;
}

interface NavItem {
  title: string;
  id: string;
  subItems: NavLink[];
}

export default function DocsNavbar() {
  const location = useLocation();
  const NAVBAR_ITEMS: NavItem[] = [
    {
      title: "Getting Started",
      id: "getting-started",
      subItems: [
        {
          name: "Overview",
          url: "/docs/installation/overview",
          id: "installation-overview",
        },
        {
          name: "MacOS Installation",
          url: "/docs/installation/macos",
          id: "installation-macos",
        },
        {
          name: "Linux Installation",
          url: "/docs/installation/linux",
          id: "installation-linux",
        },
      ],
    },
    {
      title: "Usage",
      id: "usage",
      subItems: [
        {
          name: "Interactive Mode",
          url: "/docs/usage/interactive",
          id: "usage-interative",
        },
        {
          name: "PostgreSQL Configs",
          url: "/docs/usage/postgres",
          id: "usage-postgres",
        },
        {
          name: "MySQL Configs",
          url: "/docs/usage/mysql",
          id: "usage-mysql",
        },
        {
          name: "SQLite Configs",
          url: "/docs/usage/sqlite",
          id: "usage-sqlite",
        },
        {
          name: "MongoDB Configs",
          url: "/docs/usage/mongodb",
          id: "usage-mongodb",
        },
        {
          name: "Limitations",
          url: "/docs/usage/limitations",
          id: "usage-limitations",
        },
      ],
    },
  ];

  return (
    <>
      <div className="navbar-container">
        {NAVBAR_ITEMS.map((item) => (
          <div key={item.id} className="navbar-section-container">
            <p className="navbar-section-title">{item.title}</p>
            {item.subItems.map((subItem) => (
              <Link
                to={subItem.url}
                className={`navbar-link-container ${
                  location.pathname === subItem.url
                    ? "navbar-link-container--active"
                    : ""
                }`}
                key={subItem.id}
              >
                <span className="navbar-link">{subItem.name}</span>
              </Link>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}

// #d4d4d8

// #a1a1aa

// #71717a
