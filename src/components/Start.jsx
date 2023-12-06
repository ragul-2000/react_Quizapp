import { useRef, useState } from "react";

export default function Start({ setUsername, username }) {
  const inputRef = useRef();
  const [errorMessage, setErrorMessage] = useState("");

  const handleClick = () => {
    const enteredName = inputRef.current.value.trim();
    if (enteredName) {
      setUsername(enteredName);
      setErrorMessage("");
    } else {
      setErrorMessage("Please enter your name to continue");
    }
  };

  return (
    <div className="start">
      {username ? (
        <p>Welcome, {username}!</p>
      ) : (
        <>
          <input
            className="startInput"
            placeholder="Enter Your Name"
            ref={inputRef}
          />
          <button className="startButton" onClick={handleClick}>
            Start
          </button>
          {errorMessage && <p className="errorMessage">{errorMessage}</p>}
        </>
      )}
    </div>
  );
}
