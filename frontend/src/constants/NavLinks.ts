export interface NavLink {
  id: string;
  name: string;
  url: string;
  isExternal?: boolean;
  isEmail?: boolean;
}

interface NavItem {
  title: string;
  id: string;
  subItems: NavLink[];
}

export const NAVBAR_ITEMS: NavItem[] = [
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
    ],
  },
  {
    title: "More",
    id: "more",
    subItems: [
      {
        name: "Questions?",
        url: "mailto:jamesmd333@gmail.com",
        id: "contact-email",
        isEmail: true,
      },
      {
        name: "See the Code!",
        url: "https://github.com/jamesdaniel3/auto-db-diagram",
        id: "github-repo",
        isExternal: true,
      },
    ],
  },
];
