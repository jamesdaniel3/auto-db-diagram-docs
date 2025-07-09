import "../../styles/Pages.css";
import infoImage from "../../assets/images/info-black.png";

interface PlatformItem {
  operatingSystem: string;
  architecture: string;
  id: string;
}

export default function Overview() {
  const SUPPORTED_PLATFORMS: PlatformItem[] = [
    { operatingSystem: "macOS 13", architecture: "Intel", id: "macos13-intel" },
    { operatingSystem: "macOS 14", architecture: "arm64", id: "macos14-arm64" },
    { operatingSystem: "macOS 15", architecture: "arm64", id: "macos13-arm64" },
    {
      operatingSystem: "ubuntu 22.04",
      architecture: "x64",
      id: "ubuntu22.04-x64",
    },
    {
      operatingSystem: "ubuntu 24.04",
      architecture: "x54",
      id: "ubuntu24.04-x64",
    },
  ];

  return (
    <>
      <p className="page-title">Overview</p>
      <p className="page-text">Welcome to Auto DB Diagram!</p>

      <p className="page-text">
        Auto DB Diagram is an open-source tool made to give developers an
        immediate snapshot of their database schema. This tool will connect to
        your database, evaluate the schema, and provide you with an Entity
        Relationship Diagram in the form of a PNG file, so you can easily
        document new databases or take a look at old ones.
      </p>

      <p className="page-section-header">Capabilities</p>
      <p className="page-text">
        Auto DB Diagram currently supports connections to the following
        databases: PostgreSQL, MySQL, SQLite, and MongoDB.
      </p>
      <p className="page-text">
        Auto DB Diagram can handle all the standard data types across SQL
        databases and map foriegn key relationships.
      </p>
      <p className="page-text">
        In NoSQL Databaess like MongoDB, we infer database schema by viewing the
        documents in your database and output our findings. This can be a
        time-intensive process, so the program supports both an exhaustive
        search, and a more limited search that will still be accurate in many
        cases.{" "}
      </p>
      <p className="page-text">
        By default, Auto DB Diagram evaluates all of the tables in a given
        database, but users using the headless mode can easily exclude tables of
        their choosing.{" "}
      </p>

      <div className="page-note-container">
        <div className="note-top-line">
          <img
            className="info-image"
            src={infoImage}
            style={{ height: "20px", width: "20px" }}
          />
          <p className="page-note-label">Note</p>
        </div>
        <p className="page-text">
          This program is not perfect, but it's getting better everyday, if you
          encounter a problem,{" "}
          <a
            className="page-intext-link"
            target="_blank"
            href="https://github.com/jamesdaniel3/auto-db-diagram/issues"
          >
            report it!
          </a>
        </p>
      </div>

      <p className="page-section-header">Platforms</p>
      <p className="page-text">
        All releases of Auto DB Diagram are currently tested on the following
        operating systems and architectures
      </p>
      <div className="os-table-container">
        <table className="os-table">
          <thead>
            <tr>
              <th>Operating System</th>
              <th>Architecture</th>
            </tr>
          </thead>
          <tbody>
            {SUPPORTED_PLATFORMS.map((item) => (
              <tr key={item.id}>
                <td>{item.operatingSystem}</td>
                <td>{item.architecture}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="page-text">Windows coming soon!</p>

      <p className="page-section-header">Contributing</p>

      <p className="page-text">Spot an issue or want something new?</p>
      <ul>
        <li>
          <p className="page-text">
            Feel free to{" "}
            <a
              className="page-intext-link"
              target="_blank"
              href="https://github.com/jamesdaniel3/auto-db-diagram/issues"
            >
              create an issue on Github
            </a>
          </p>
        </li>
      </ul>

      <p className="page-text">Want to contribute?</p>
      <ul>
        <li>
          <p className="page-text">
            Feel free to{" "}
            <a
              className="page-intext-link"
              target="_blank"
              href="https://github.com/jamesdaniel3/auto-db-diagram/pulls"
            >
              open a PR
            </a>
          </p>
        </li>
      </ul>
    </>
  );
}
