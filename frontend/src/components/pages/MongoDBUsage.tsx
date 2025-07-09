import "../../styles/Pages.css";
import infoImage from "../../assets/images/info-black.png";

export default function MongoDBUsage() {
  const configString = `{
  database_type: mongodb
  connection_info: {
    connection_string?: string,
    host?: string;
    port?: number;
    database_name: string;
    username?: string;
    password?: string;
    ssl_enabled?: true | false,
    ssl_allow_invalid_certs?: true | false,  
    ssl_ca_file_path?: string,  // path to ca pem file
    ssl_client_cert_path?: string,  // path to client pem file
    connect_with_service_record?: true | false
  };
  excluded_tables?: string[];
  exhaustive_search?: true | false; 
}`;

  return (
    <>
      <p className="page-title">MongoDB Configs (Headless Mode)</p>
      <p className="page-text">
        {" "}
        On this page, the possible configuration options for connecting to a
        MongoDB instace in Headless Mode will be described.
      </p>
      <p className="page-text">
        The briefest description of the rules of config files for MongoDB
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
          optional field and a pipe | denotes the logical OR.
        </p>
      </div>
      <p className="page-text">
        Below is a longer description of the rules for config files connecting
        to a PostgreSQL Instance:{" "}
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
            I used true | false instead of boolean to indicate that those fields
            are case-sensitive
          </p>
        </li>
        <li>
          <p className="page-text">
            {" "}
            If a connection string is passed in connection info, host, port,
            username, and password are unnecessary
          </p>
        </li>
        <li>
          <p className="page-text">
            {" "}
            ssl_enabled, ssl_allow_invalid_certs, ssl_ca_file_path, and
            ssl_client_cert_path are each only necessary if you are protecting
            your database with one or more of those listed options
          </p>
        </li>
        <li>
          <p className="page-text">
            {" "}
            connect_with_service_record should be true if your connection string
            is prefixed with +srv or you are using Mongo Atlas
          </p>
        </li>
        <li>
          <p className="page-text">
            {" "}
            database_type is a required field and must be the string mongodb
            (case-sensitive)
          </p>
        </li>
        <li>
          <p className="page-text">
            {" "}
            connection_info is required and must be an object containing at bare
            minimum a connection string and a database name
          </p>
        </li>
        <li>
          <p className="page-text">
            {" "}
            Neither host nor port is required, but they will default to
            localhost and 27017 unless a connection string is passed
          </p>
        </li>
      </ul>
    </>
  );
}
