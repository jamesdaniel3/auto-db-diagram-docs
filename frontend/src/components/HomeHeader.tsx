import "../styles/HomeHeader.css";
import { Link } from "react-router-dom";

export default function HomeHeader() {
  return (
    <>
      <div className="home-header-container">
        <div className="link-container">
          <a
            className="link"
            style={{ marginRight: "20px" }}
            href="https://github.com/jamesdaniel3/auto-db-diagram"
            target="_blank"
          >
            View the Code
          </a>
          <Link
            to={{ pathname: "/docs/installation/overview" }}
            className="link"
          >
            View the Docs
          </Link>
        </div>
      </div>
    </>
  );
}
