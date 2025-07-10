import star from "../assets/images/star.png";
import "../styles/Docs.css";
import "../styles/Pages.css";

export default function DocsHeader() {
  const handleClick = () => {
    window.open("https://github.com/jamesdaniel3/auto-db-diagram", "_blank");
  };
  return (
    <>
      <div className="header-text-container" onClick={handleClick}>
        <p className="header-text">
          Enjoying Auto DB Diagram? Leave a{" "}
          <span>
            <img
              src={star}
              alt="star icon"
              style={{ height: "15px", width: "15px" }}
            />
          </span>{" "}
          on Github!
        </p>
      </div>
    </>
  );
}
