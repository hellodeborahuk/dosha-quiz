import React from "react";

function Welcome(props) {
  function handleClick(event) {
    event.preventDefault();
    props.setAppState("questions");
  }

  return (
    <div className="container">
      <section className="intro-header">
        <h1>DOSHA QUIZ</h1>
      </section>
      <section className="intro-copy">
        <p>
          Doshas are a central element of Ayurveda and the basis of what makes
          it such a personalized approach to health. There are three Doshas —
          Vata, Pitta, and Kapha. By understanding your Dosha and creating a
          lifestyle accordingly, you’ll enjoy a healthier, more balanced life.
        </p>
        <p>
          This quiz is the first step toward creating that lifestyle. When
          answering the questions, think about your whole life and not just your
          most recent condition. Choose the answer that best fits you.
        </p>
      </section>
      <section>
        <button className="quiz-btn" onClick={handleClick}>
          Which dosha are you?
        </button>
      </section>
    </div>
  );
}

export default Welcome;
