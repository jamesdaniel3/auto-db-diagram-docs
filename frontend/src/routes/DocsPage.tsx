import { Outlet, useLocation } from "react-router-dom";
import DocsNavbar from "../components/DocsNavbar";

import "../styles/Docs.css";
import DocsFooter from "../components/DocsFooter";
import DocsHeader from "../components/DocsHeader";
import { SITE_MAP } from "../constants/SiteMap";

export default function DocsPage() {
  const location = useLocation();
  const currentPage = SITE_MAP[location.pathname];

  return (
    <>
      <div className="docs-container">
        <DocsHeader />
        <div className="docs-sub-container">
          <DocsNavbar />
          <main className="docs-content">
            <Outlet />
            <DocsFooter
              previous={currentPage?.previous}
              next={currentPage?.next}
            />
          </main>
        </div>
      </div>
    </>
  );
}
