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
            <a href={previous.url} className="page-intext-link">
              {previous.name}
            </a>
          </div>
        )}
        {next && (
          <div className="new-page-container">
            <a href={next.url} className="page-intext-link">
              {next.name}
            </a>
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
