import "../../styles/Pages.css";
import infoImage from "../../assets/images/info-black.png";

export default function SQLiteUsage() {
  const configString = `{
  database_type: sqlite
  connection_info: {
    database_location: string;
  };
  excluded_tables?: string[];
}`;

  return (
    <>
      <p className="page-title">SQLite Configs (Headless Mode)</p>
      <p className="page-text">
        {" "}
        On this page, the possible configuration options for connecting to a
        SQLite instace in Headless Mode will be described.
      </p>
      <p className="page-text">
        The briefest description of the rules of config files for SQLite
        instaces is the following:{" "}
      </p>
      <div className="config-code-container">
        <pre className="config-code">
          <code>{configString}</code>
        </pre>
      </div>
      <div className="page-note-container" style={{ margin: "1.75em 0" }}>
        <div className="note-top-line">
          <img
            className="info-image"
            src={infoImage}
            style={{ height: "20px", width: "20px" }}
          />
          <p className="page-note-label">Note</p>
        </div>
        <p className="page-text">
          I have adopted the TypeScript interface notation where ? denotes an
          optional field.
        </p>
      </div>
      <p className="page-text">
        Below is a longer description of the rules for config files connecting
        to a SQLite Instance:{" "}
      </p>
      <ul>
        <li>
          <p className="page-text">
            {" "}
            All field-names in the JSON file are case-insensitive
          </p>
        </li>
        <li>
          <p className="page-text">
            {" "}
            The config file must be JSON with the structure shown above, but the
            order of fields is not important
          </p>
        </li>
        <li>
          <p className="page-text">
            {" "}
            database_type is a required field and must be the string sqlite
            (case-sensitive)
          </p>
        </li>
        <li>
          <p className="page-text">
            {" "}
            database_location is the path to the file containing the SQLite
            instance
          </p>
        </li>
        <li>
          <p className="page-text">
            {" "}
            excluded_tables is an optional list of table names (case-sensitive)
            that you would like to be excluded from the diagram
          </p>
        </li>
      </ul>
    </>
  );
}
