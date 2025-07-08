import { Outlet } from "react-router-dom";
import DocsNavbar from "../components/DocsNavbar";

import "../styles/Docs.css";

export default function DocsPage() {
  return (
    <>
      <div className="docs-container">
        <DocsNavbar />
        <main className="docs-content">
          <Outlet />
        </main>
      </div>
    </>
  );
}
