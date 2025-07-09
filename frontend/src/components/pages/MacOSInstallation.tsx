import { Link } from "react-router-dom";

export default function MacOSInstallation() {
  return (
    <>
      <p className="page-title">MacOS Installation</p>
      <p className="page-text">
        Installation on MacOS can be completed with just a few commands, so open
        a terminal and do the following!
      </p>

      <p className="page-section-header">Add our custom Homebrew tap</p>
      <div className="terminal-command-container">
        <p className="terminal-command-text">
          <span className="terminal-command-prompt">$ </span>brew tap
          jamesdaniel3/auto-db-diagram
        </p>
      </div>
      <p className="page-section-header">Install Auto DB Diagram</p>
      <div className="terminal-command-container">
        <p className="terminal-command-text">
          <span className="terminal-command-prompt">$ </span>brew install
          db-diagram
        </p>
      </div>
      <p className="page-text">
        If you are not planning to use Auto DB Diagram on a MongoDB instance,
        your good to go! If you are working with Mongo, we will need you to run
        these two additional commands that are not handled by Homebrew.
      </p>
      <p className="page-section-header">
        Add MongoDB's{" "}
        <a
          href="https://github.com/mongodb/homebrew-brew"
          target="_blank"
          className="page-intext-link"
        >
          official Homebrew repository
        </a>
      </p>
      <div className="terminal-command-container">
        <p className="terminal-command-text">
          <span className="terminal-command-prompt">$ </span>brew tap
          mongodb/brew
        </p>
      </div>
      <p className="page-section-header">
        Install MongoDB's command-line database utilties
      </p>
      <div className="terminal-command-container">
        <p className="terminal-command-text">
          <span className="terminal-command-prompt">$ </span>brew install
          mongodb-database-tools
        </p>
      </div>
      <p className="page-text">
        Now that you have everything installed, you are good to go!
      </p>
      <p className="page-section-header">
        <Link
          to={{ pathname: "/docs/usage/interactive" }}
          className="page-intext-link"
        >
          Start Using Auto DB Diagram!
        </Link>
      </p>
      <div className="terminal-command-container">
        <p className="terminal-command-text">
          <span className="terminal-command-prompt">$ </span> db-diagram
        </p>
      </div>
    </>
  );
}
