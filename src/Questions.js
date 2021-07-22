import React, { useState } from "react";
import "./App.css";

function Questions() {
  let [id, setId] = useState(0);
  let [selected, setSelected] = useState(null);

  function nextClick() {
      if (selected === null) {
          return
      }
      if (id + 1 > quizQuestions.length) {
          return
      }


      setSelected(null);
    setId(id + 1);
}


  const quizQuestions = [
    {
      id: 0,
      question: "How would you describe your body type and how you look?",
      options: [
        "I am thin, lanky, and slender with prominent joints and thin muscles",
        "I have a medium, symmetrical build with good muscle development",
        "I have a broad and full build",
      ],
    },
    {
      id: 1,
      question: "How would you best describe your metabolism?",
      options: [
        "Fast metabolism, difficult to gain weight",
        "Balanced metabolism, your weight stays fairly consistent",
        "Slow metabolism, tendency to gain weight",
      ],
    },
    {
      id: 2,
      question: "Which best describes your skin?",
      options: [
        "My skin is dry, thin, and prone to wrinkles, it tans easily",
        "My skin is prone to irritation",
        "My skin is thick, moist, and smooth",
      ],
    },
    {
      id: 3,
      question: "Which best describes your hair?",
      options: [
        "My hair is dry, brittle or frizzy",
        "My hair is fine with a tendency towards early thinning or graying",
        "I have abundant, thick and oily hair.",
      ],
    },
    {
      id: 4,
      question: "Which best describes your eyes?",
      options: [
        "My eyes are small and active",
        "I have a deep and intentional gaze",
        "I have large pleasant eyes",
      ],
    },
    {
      id: 5,
      question: "Which best describes how you talk?",
      options: [
        "Fast and/or a lot!",
        "My words are sharp and concise",
        "My speech is slow and calm",
      ],
    },
    {
      id: 6,
      question: "What is your sleep pattern like?",
      options: [
        "I am a light sleeper with a tendency to awaken easily",
        "I am a moderately sound sleeper, usually needing less than eight hours to feel rested",
        "My sleep is deep and long. I tend to awaken slowly in the morning",
      ],
    },
    {
      id: 7,
      question: "How would you describe your body temperature?",
      options: [
        "My hands and feet are usually cold and I prefer warm environments",
        "I am usually warm, regardless of the season, and prefer cooler environments",
        "I am adaptable to most temperatures but do not like cold, wet days.",
      ],
    },
    {
      id: 8,
      question: "Which best describes your personality?",
      options: [
        "I am lively and enthusiastic by nature. I like to change",
        "I am purposeful and intense. I like to convince",
        "I am easy going and accepting. I like to support",
      ],
    },
    {
      id: 9,
      question: "How do you react to stress?",
      options: [
        "I get anxious, confused, worried",
        "I am easily irratable or aggressive",
        "I remain calm and like to withdraw",
      ],
    },
    {
      id: 10,
      question: "How best describes your memory?",
      options: [
        "I have good short-term memory but easily forget",
        "I have good medium-term memory",
        "It takes me longer to grasp things but I have good long-term memory",
      ],
    },
  ];

  let currentQuestion = quizQuestions.find((item) => item.id === id);
  console.log(currentQuestion);
  return (
    <div className="Questions">
      <div className="container">
        <section className="question-number">
          <p>Question {id + 1} of {quizQuestions.length}</p>
        </section>
        <section className="Question-btns">
          <h3 className="Question-1">{currentQuestion.question}</h3>
          <div>
            {currentQuestion.options.map((option, key) => (
              <button
                key={key}
                className={
                  selected === key
                    ? "Question-btn-selected Question-btn"
                    : "Question-btn"
                }
                onClick={() => setSelected(key)}
              >
                {option}
              </button>
            ))}
          </div>
        </section>
        <section>
          <button className="next-btn" onClick={nextClick}>
            Next Question
          </button>
        </section>
      </div>
    </div>
  );
}

export default Questions;
