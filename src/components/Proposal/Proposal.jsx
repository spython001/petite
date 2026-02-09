import "./Proposal.css";
import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import confetti from "canvas-confetti";

export default function Proposal() {
  const navigate = useNavigate();

  const [noStyle, setNoStyle] = useState({});
  const [showMessage, setShowMessage] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [noDisabled, setNoDisabled] = useState(false);

  const timeoutRef = useRef(null);

  const messages = [
    "this was a loyalty test",
    "wrong button, babe 😒",
    "be serious 😏",
    "you’re stubborn as usual ...",
    "okay but you already know the answer, playtime is over 😌"
  ];

  const handleYes = () => {
    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.6 }
    });

    setTimeout(() => {
      navigate("/message");
    }, 600);
  };

  const moveNoButton = () => {
    if (noDisabled) return;

    const nextAttempts = attempts + 1;
    setAttempts(nextAttempts);

    // clamp movement range (never negative)
    const range = Math.max(40, 120 - nextAttempts * 15);
    const x = Math.random() * range - range / 2;
    const y = Math.random() * range - range / 2;

    setNoStyle({
      transform: `translate(${x}px, ${y}px)`
    });

    setShowMessage(true);

    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setShowMessage(false);
    }, 2000);

    if (nextAttempts >= 5) {
      setNoDisabled(true);
    }
  };

  const messageIndex = Math.min(attempts, messages.length - 1);

  return (
    <section className="proposal">
      <h1 className="propH1">Now for the tea:</h1>
      <h2 className="propH2">Will you be my Valentine?</h2>

      <div className="btnGroup">
        <button
          type="button"
          className="yesBtn"
          onClick={handleYes}
        >
          YES ❤️
        </button>

        <div className="noWrapper">
          <button
            type="button"
            className={`noBtn ${!noDisabled ? "shake" : "disabled"}`}
            style={noStyle}
            onMouseEnter={moveNoButton}
            onTouchStart={moveNoButton}
            disabled={noDisabled}
          >
            NO 🙃
          </button>

          {showMessage && (
            <span className="loyaltyText">
              {messages[messageIndex]}
            </span>
          )}
        </div>
      </div>
    </section>
  );
}
