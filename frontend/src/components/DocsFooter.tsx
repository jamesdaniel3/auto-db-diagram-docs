export interface DocsFooterPropts {
  previous?: LinkItem;
  next?: LinkItem;
}

interface LinkItem {
  name: string;
  url: string;
}

import "../styles/Docs.css";
import arrow from "../assets/images/right-arrow.png";
import { Link } from "react-router-dom";

export default function DocsFooter({ previous, next }: DocsFooterPropts) {
  return (
    <>
      <div
        className={`footer-container${!next ? " footer-container--last" : ""}${
          !previous ? " footer-container--first" : ""
        }`}
      >
        {previous && (
          <div className="new-page-container">
            <img
              src={arrow}
              alt="arrow indicating link to previous page"
              className="previous-page-arrow"
              style={{ height: "20px", width: "20px" }}
            />
            <Link to={previous.url} className="page-intext-link">
              {previous.name}
            </Link>
          </div>
        )}
        {next && (
          <div className="new-page-container">
            <Link to={next.url} className="page-intext-link">
              {next.name}
            </Link>
            <img
              src={arrow}
              alt="arrow indicating link to next page"
              className="next-page-arrow"
              style={{ height: "20px", width: "20px" }}
            />
          </div>
        )}
      </div>
    </>
  );
}
