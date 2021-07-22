import React from "react";
import "./App.css";

function Questions() {
    function backClick(event) {
        event.preventDefault();
        console.log('send me home');
    }

  return (
    <div className="Questions">
      <div className="container">
        <section className="question-number">
          <p>Question 1 of 11</p>
        </section>
        <section className="Question-btns">
          <h3 className="Question-1">How would you describe your body type and how you look?</h3>
          <div className="Question-btn">
            <a href="/">
              I am thin, lanky, and slender with prominent joints and thin
              muscles.
            </a>
          </div>
          <div className="Question-btn">
            <a href="/">
              I have a medium, symmetrical build with good muscle development.
            </a>
          </div>
          <div className="Question-btn">
            <a href="/">I have a broad and full build.</a>
          </div>
        </section>
        <section className="back-btn">
            <a href="/" onClick={backClick}>Back</a>
        </section>
      </div>
    </div>
  );
}

export default Questions;
