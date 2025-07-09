import "../../styles/Pages.css";
import infoImage from "../../assets/images/info-black.png";

export default function InteractiveUsage() {
  return (
    <>
      <p className="page-title">Interactive Mode</p>
      <p className="page-text">
        The simplest (and default) way to run Auto DB Diagram is in "Interactive
        Mode". To run the code in Interactive Mode, simply paste the following
        command into your terminal after installation.
      </p>

      <div className="terminal-command-container">
        <p className="terminal-command-text">
          <span className="terminal-command-prompt">$ </span> db-diagram
        </p>
      </div>

      <div className="page-note-container">
        <div className="note-top-line">
          <img
            className="info-image"
            src={infoImage}
            style={{ height: "20px", width: "20px" }}
            alt="info icon"
          />
          <p className="page-note-label">Note</p>
        </div>
        <p className="page-text">
          Until an official distribution is downloadable on Linux, all instances
          of "db diagram" in commands should be replaced with "./main.sh".
        </p>
      </div>

      <p className="page-text">
        In Interactive Mode, Auto DB Diagram will prompt you for all of the
        information it needs to connect to your database instance and generate a
        PNG. There are two major downsides to Interactive Mode. First, it is
        much more difficult to use in a program, due to all of the input
        required. Second, Interactive Mode does not currently support table
        exclusion, so you will be required to include all tables in your
        database in the generated diagram.
      </p>

      <p className="page-section-header">
        Alternative to Interactive Mode (Headless Mode)
      </p>
      <p className="page-text">
        For those who prefer not to enter all of their data in the terminal or
        want table exclusion, we have Headless Mode!
      </p>
      <p className="page-text">
        As mentioned before, Headless Mode has support for everything
        Interactive Mode has and more. To run Auto DB Diagram in Headless Mode,
        input the following command into your terminal.
      </p>

      <div className="terminal-command-container">
        <p className="terminal-command-text">
          <span className="terminal-command-prompt">$ </span> db-diagram
          --headless [/path/to/config.json]
        </p>
      </div>

      <p className="page-text">
        When running Auto DB Diagram in Headless Mode, all you need to do is
        fill out a JSON file with the required information and pass it to Auto
        DB Diagram from the command line. There are different config options for
        differenet database providers. If you check the relevant documentation
        page for your database, you can see the config options.
      </p>
    </>
  );
}
