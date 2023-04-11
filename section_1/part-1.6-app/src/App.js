import { useState } from "react";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);
  const [average, setAverage] = useState(0);
  const [positive, setPositive] = useState(0);

  const getAverage = () => {
    const removeNeutralVotes = all - neutral;
    const positiveVotes = good - bad;
    return positiveVotes / removeNeutralVotes;
  };

  const handleClick = (e) => {
    if (getAverage() === average) {
      // do nothing
    } else {
      setAverage(getAverage());
    }
    switch (e.target.value) {
      case "good":
        setGood(good + 1);
        setAll(all + 1);
        break;
      case "neutral":
        setNeutral(neutral + 1);
        setAll(all + 1);
        break;
      case "bad":
        setBad(bad + 1);
        setAll(all + 1);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <h1>Give feedback</h1>
      <button onClick={handleClick} value="good">
        Good
      </button>
      <button onClick={handleClick} value="neutral">
        Neutral
      </button>
      <button onClick={handleClick} value="bad">
        Bad
      </button>
      <h1>Statistics</h1>
      <p>Good {good}</p>
      <p>Neutral {neutral}</p>
      <p>Bad {bad}</p>
      <p>All {all}</p>
      <p>Average {average}</p>
      <p>Positive {positive}</p>
    </div>
  );
};

export default App;
