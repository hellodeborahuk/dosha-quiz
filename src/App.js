import "./App.css";

function App() {
  function handleClick(event) {
    event.preventDefault();
    console.log('clicked the button');
  }

  return (
    <div className="App">
      <header className="App-header"></header>
      <div className="container">
        <section className="intro-header">
          <h1>DOSHA QUIZ</h1>
        </section>
        <section className="intro-copy">
          <p>
            According to Ayurveda, doshas are the energy patterns that flow
            around our bodies, governing our thinking and behaviour. There are
            three primary doshas - vata, pitta and kapha – and we're all born
            with all three of them. But it’s the dominance of one or two of
            these doshas that defines who we are. To enjoy a balanced mind, body
            and spirit, so the thinking goes, our unique dosha constitution
            needs to be in a state of equilibrium, when it isn’t, we fall ill.
          </p>
        </section>
        <section className="quiz-btn">
          <a href="#" onClick={handleClick}>Which dosha are you?</a>
        </section>
      </div>
    </div>
  );
}

export default App;
