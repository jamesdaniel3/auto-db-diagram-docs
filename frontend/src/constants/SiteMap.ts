interface LinkItem {
  name: string;
  url: string;
}

interface SiteMapItem {
  previous?: LinkItem;
  next?: LinkItem;
}

type SiteMap = {
  [key: string]: SiteMapItem;
};

export const SITE_MAP: SiteMap = {
  "/docs/installation/overview": {
    next: {
      name: "MacOS Installation",
      url: "/docs/installation/macos",
    },
  },
  "/docs/installation/macos": {
    next: {
      name: "Linux Installation",
      url: "/docs/installation/linux",
    },
    previous: {
      name: "Overview",
      url: "/docs/installation/overview",
    },
  },
  "/docs/installation/linux": {
    next: {
      name: "Interactive Mode",
      url: "/docs/usage/interactive",
    },
    previous: {
      name: "MacOS Installation",
      url: "/docs/installation/macos",
    },
  },
  "/docs/usage/interactive": {
    next: {
      name: "PostgreSQL Configs",
      url: "/docs/usage/postgres",
    },
    previous: {
      name: "Linux Installation",
      url: "/docs/installation/linux",
    },
  },
  "/docs/usage/postgres": {
    next: {
      name: "MySQL Configs",
      url: "/docs/usage/mysql",
    },
    previous: {
      name: "Interactive Mode",
      url: "/docs/usage/interactive",
    },
  },
  "/docs/usage/mysql": {
    next: {
      name: "SQLite Configs",
      url: "/docs/usage/sqlite",
    },
    previous: {
      name: "PostgreSQL Configs",
      url: "/docs/usage/postgres",
    },
  },
  "/docs/usage/sqlite": {
    next: {
      name: "MongoDB Configs",
      url: "/docs/usage/mongodb",
    },
    previous: {
      name: "MySQL Configs",
      url: "/docs/usage/mysql",
    },
  },
  "/docs/usage/mongodb": {
    previous: {
      name: "SQLite Configs",
      url: "/docs/usage/sqlite",
    },
  },
};
