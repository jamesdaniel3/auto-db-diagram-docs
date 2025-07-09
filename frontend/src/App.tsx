import { Routes, Route } from "react-router-dom";

import Home from "./routes/Home";
import DocsPage from "./routes/DocsPage";
import Overview from "./components/pages/Overview";
import MacOSInstallation from "./components/pages/MacOSInstallation";
import LinuxInstallation from "./components/pages/LinuxInstallation";
import InteractiveUsage from "./components/pages/InteractiveUsage";
import PostgresUsage from "./components/pages/PostgresUsage";
import MySQLUsage from "./components/pages/MySQLUsage";
import SQLiteUsage from "./components/pages/SQLiteUsage";
import MongoDBUsage from "./components/pages/MongoDBUsage";
import Limitations from "./components/pages/Limitations";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function App() {
  function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  }

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/docs" element={<DocsPage />}>
          <Route path="installation/overview" element={<Overview />} />
          <Route path="installation/macos" element={<MacOSInstallation />} />
          <Route path="installation/linux" element={<LinuxInstallation />} />
          <Route path="usage/interactive" element={<InteractiveUsage />} />
          <Route path="usage/postgres" element={<PostgresUsage />} />
          <Route path="usage/mysql" element={<MySQLUsage />} />
          <Route path="usage/sqlite" element={<SQLiteUsage />} />
          <Route path="usage/mongodb" element={<MongoDBUsage />} />
          <Route path="usage/limitations" element={<Limitations />} />
        </Route>
      </Routes>
    </>
  );
}
