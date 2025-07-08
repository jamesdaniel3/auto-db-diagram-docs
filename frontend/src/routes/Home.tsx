import Terminal from "../components/Terminal";
import HomeHeader from "../components/HomeHeader";

import "../styles/Home.css";

export default function Home() {
  return (
    <>
      <HomeHeader />

      <div className="home-container">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <p className="main-title">Auto DB Diagram</p>
          <p className="subtitle">
            An ERD generator supporting PostgreSQL, MySQL, SQLite, and MongoDB
          </p>
        </div>

        <Terminal />
      </div>
    </>
  );
}

// get a logo and tab text
