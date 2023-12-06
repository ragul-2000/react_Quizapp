import "./app.css";
import { useEffect, useMemo, useState } from "react";
import Start from "./components/Start";
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";

function App() {
  const [username, setUsername] = useState(null);
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("$ 0");

  const data = [
    
      {
        "id": 1,
        "question": "What does HTML stand for?",
        "answers": [
          { "text": "Hyper Text Markup Language", "correct": true },
          { "text": "Highly Typed Modern Language", "correct": false },
          { "text": "Hyperlink and Text Markup Language", "correct": false },
          { "text": "Home Tool Markup Language", "correct": false }
        ]
      },
      {
        "id": 2,
        "question": "Which of the following is a valid CSS property?",
        "answers": [
          { "text": "color-style", "correct": false },
          { "text": "font-family", "correct": true },
          { "text": "text-decoration-style", "correct": false },
          { "text": "box-sizing", "correct": true }
        ]
      },
      {
        "id": 3,
        "question": "What is the purpose of JavaScript?",
        "answers": [
          { "text": "Styling web pages", "correct": false },
          { "text": "Creating dynamic content", "correct": true },
          { "text": "Defining document structure", "correct": false },
          { "text": "Managing databases", "correct": false }
        ]
      },
      {
        "id": 4,
        "question": "Which HTML tag is used to link an external JavaScript file?",
        "answers": [
          { "text": "<script>", "correct": true },
          { "text": "<link>", "correct": false },
          { "text": "<style>", "correct": false },
          { "text": "<js>", "correct": false }
        ]
      },
      {
        "id": 5,
        "question": "What does CSS stand for?",
        "answers": [
          { "text": "Counter Style Sheets", "correct": false },
          { "text": "Computer Style Sheets", "correct": false },
          { "text": "Cascading Style Sheets", "correct": true },
          { "text": "Creative Style Sheets", "correct": false }
        ]
      },
      {
        "id": 6,
        "question": "Which JavaScript keyword is used to declare a variable?",
        "answers": [
          { "text": "var", "correct": true },
          { "text": "let", "correct": true },
          { "text": "const", "correct": true },
          { "text": "variable", "correct": false }
        ]
      },
      {
        "id": 7,
        "question": "What is the purpose of the HTML <head> tag?",
        "answers": [
          { "text": "To define the main content of the page", "correct": false },
          { "text": "To include external scripts and styles", "correct": true },
          { "text": "To create a heading for the page", "correct": false },
          { "text": "To mark important text", "correct": false }
        ]
      },
      {
        "id": 8,
        "question": "Which CSS property is used to control the size of an element's box?",
        "answers": [
          { "text": "width", "correct": true },
          { "text": "height", "correct": true },
          { "text": "size", "correct": false },
          { "text": "length", "correct": false }
        ]
      },
      {
        "id": 9,
        "question": "In JavaScript, what is an array?",
        "answers": [
          { "text": "A type of loop", "correct": false },
          { "text": "A collection of values", "correct": true },
          { "text": "A conditional statement", "correct": false },
          { "text": "A CSS property", "correct": false }
        ]
      },
      {
        "id": 10,
        "question": "Which HTML tag is used to create a hyperlink?",
        "answers": [
          { "text": "<link>", "correct": false },
          { "text": "<a>", "correct": true },
          { "text": "<href>", "correct": false },
          { "text": "<src>", "correct": false }
        ]
      },
      {
        "id": 11,
        "question": "What is the purpose of the CSS property 'margin'?",
        "answers": [
          { "text": "To set the background color", "correct": false },
          { "text": "To add space outside the element", "correct": true },
          { "text": "To change the font size", "correct": false },
          { "text": "To define text alignment", "correct": false }
        ]
      },
      {
        "id": 12,
        "question": "Which JavaScript operator is used for equality comparison?",
        "answers": [
          { "text": "==", "correct": true },
          { "text": "=", "correct": false },
          { "text": "===", "correct": true },
          { "text": "!=", "correct": false }
        ]
      },
      {
        "id": 13,
        "question": "What is the purpose of the HTML <div> element?",
        "answers": [
          { "text": "To create a hyperlink", "correct": false },
          { "text": "To define a division or a section", "correct": true },
          { "text": "To set the document title", "correct": false },
          { "text": "To add an image", "correct": false }
        ]
      },
      {
        "id": 14,
        "question": "In CSS, what does 'float: left' do?",
        "answers": [
          { "text": "It sets the text alignment to the left", "correct": false },
          { "text": "It makes the element float to the right", "correct": false },
          { "text": "It makes the element float to the left", "correct": true },
          { "text": "It changes the font style to italic", "correct": false }
        ]
      },
      {
        "id": 15,
        "question": "Which JavaScript function is used to perform actions after a specified time interval?",
        "answers": [
          { "text": "setInterval()", "correct": false },
          { "text": "setTimeout()", "correct": true },
          { "text": "delay()", "correct": false },
          { "text": "interval()", "correct": false }
        ]
      }
    

  ];

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "$ 100" },
        { id: 2, amount: "$ 200" },
        { id: 3, amount: "$ 300" },
        { id: 4, amount: "$ 500" },
        { id: 5, amount: "$ 1000" },
        { id: 6, amount: "$ 2000" },
        { id: 7, amount: "$ 4000" },
        { id: 8, amount: "$ 8000" },
        { id: 9, amount: "$ 16000" },
        { id: 10, amount: "$ 32000" },
        { id: 11, amount: "$ 64000" },
        { id: 12, amount: "$ 125000" },
        { id: 13, amount: "$ 250000" },
        { id: 14, amount: "$ 500000" },
        { id: 15, amount: "$ 1000000" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  return (
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername}username={username} />
      ) : (
        <>
          <div className="main">
          <h2 className ="welcome">Welcome, {username}!</h2>
            {timeOut ? (
              <h1 className="endText">You earned: {earned}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App;