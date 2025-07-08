import { useState, useEffect } from "react";
import "../styles/Terminal.css";

export default function Terminal() {
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);

  const commands = [
    "brew tap jamesdaniel3/auto-db-diagram",
    "brew install db-diagram",
  ];

  const typingSpeed = 80;
  const pauseBetweenCommands = 400;
  const restartDelay = 2500;

  const resetTerminal = () => {
    setCurrentCommandIndex(0);
    setCurrentText("");
    setIsTyping(true);
  };

  useEffect(() => {
    if (!isTyping && currentCommandIndex >= commands.length) {
      const timeout = setTimeout(() => {
        resetTerminal();
      }, restartDelay);

      return () => clearTimeout(timeout);
    }
  }, [isTyping, currentCommandIndex, commands.length]);

  useEffect(() => {
    if (currentCommandIndex >= commands.length) {
      setIsTyping(false);
      return;
    }

    const currentCommand = commands[currentCommandIndex];

    if (currentText.length < currentCommand.length) {
      // Still typing current command
      const timeout = setTimeout(() => {
        setCurrentText(currentCommand.slice(0, currentText.length + 1));
      }, typingSpeed);

      return () => clearTimeout(timeout);
    } else {
      // Finished typing current command, move to next
      const timeout = setTimeout(() => {
        setCurrentCommandIndex((prev) => prev + 1);
        setCurrentText("");
      }, pauseBetweenCommands);

      return () => clearTimeout(timeout);
    }
  }, [currentText, currentCommandIndex, commands]);

  // Blinking cursor effect
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="terminal-container">
      <div className="terminal-wrapper">
        <div className="terminal-window">
          <div className="terminal-header">
            <div className="terminal-traffic-lights">
              <div className="terminal-traffic-light terminal-traffic-light--close"></div>
              <div className="terminal-traffic-light terminal-traffic-light--minimize"></div>
              <div className="terminal-traffic-light terminal-traffic-light--maximize"></div>
            </div>
          </div>

          <div className="terminal-content">
            {commands.slice(0, currentCommandIndex).map((command, index) => (
              <div key={index} className="terminal-line">
                <span className="terminal-prompt">$ </span>
                <span className="terminal-text">{command}</span>
              </div>
            ))}

            {isTyping && currentCommandIndex < commands.length && (
              <div className="terminal-line">
                <span className="terminal-prompt">$ </span>
                <span className="terminal-text">{currentText || " "}</span>
                <span
                  className={`terminal-cursor ${
                    showCursor
                      ? "terminal-cursor--visible"
                      : "terminal-cursor--hidden"
                  }`}
                ></span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
