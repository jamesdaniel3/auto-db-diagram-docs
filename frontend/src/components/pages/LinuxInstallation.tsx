import "../../styles/Pages.css";

export default function LinuxInstallation() {
  return (
    <>
      <p className="page-title">Linux Installation</p>
      <p className="page-text">
        There is not currently an officail distribution for Auto DB Diagram
        available on Linux, but it is tested on Ubunut 22.04 and 24.04.
      </p>
      <p className="page-text">
        Because this is an open-source project, it can be{" "}
        <a
          className="page-intext-link"
          target="_blank"
          href="https://github.com/jamesdaniel3/auto-db-diagram"
        >
          cloned from Github
        </a>{" "}
        and run that way!
      </p>
      <p className="page-text">
        After you have cloned the code, you can run the program with the
        following commands
      </p>
      <div className="terminal-command-container">
        <p className="terminal-command-text">
          <span className="terminal-command-prompt">$ </span> cd [your
          directory]
        </p>
        <p className="terminal-command-text">
          <span className="terminal-command-prompt">$ </span> ./main.sh
        </p>
      </div>
    </>
  );
}
